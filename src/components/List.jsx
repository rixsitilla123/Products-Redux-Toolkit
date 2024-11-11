import React, { useEffect } from 'react'
import ProductCard from "./ProductCard";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { saveLikedProducts } from '../store/LikedSlice';

function List({ products, setProducts, refresh }) {
	const dispatch = useDispatch()

	useEffect(() => {
		axios("https://dummyjson.com/products").then(res => {
			setProducts(res.data.products.map(item => {
				item.isLiked = false
				return item
			}))
		})
	}, [refresh])

	function handleLikedBtnClick(item) {
		const data = { ...item, isLiked: !item.isLiked }
		const updateList = products.map(value => {
			return value.id == item.id ? data : value
		})
		setProducts(updateList)
		dispatch(saveLikedProducts(data))
	}

	return (
		<div className='p-5 flex flex-wrap justify-between gap-[25px]'>
			{products.map(item => <ProductCard item={item} handleLikedBtnClick={handleLikedBtnClick} key={item.id} width={300} />)}
		</div>
	)
}

export default List