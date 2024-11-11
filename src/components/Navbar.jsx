import { Button, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductsCard from "./ProductCard"

function Navbar({ products, setProducts, refresh, setRefresh }) {
	const dispatch = useDispatch()
	const likedProducts = useSelector(state => state.likedList)
	const [closeModal, setCloseModal] = useState(false)

	function handleDeleteProduct(item) {
		const data = { ...item, isLiked: !item.isLiked }
		const updateList = products.map(value => {
			return value.id == item.id ? data : value
		})
		setProducts(updateList)
		dispatch(handleDeleteProduct(item))
	}

	function handleInputSearch(e) {
		const filteredData = products.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
		setProducts(filteredData)
		if(!e.target.value) {
			setRefresh(!refresh)
		}
	}

	return (
		<nav className='p-5 bg-blue-500 flex items-center justify-between'>
			<h1 className="text-bold text-[30px] leading-[25px] text-white">Products</h1>
			<div className="flex items-center space-x-5">
				<Input onChange={handleInputSearch} className='w-[300px]' size='large' placeholder='Searching...' allowClear autoComplete='off' />
				<Button onClick={() => setCloseModal(true)} className='bg-transparent hover:!bg-transparent text-white hover:!text-white border-white hover:!border-white text-[20px] font-medium leading-[20px]' size='large'>Like ({likedProducts.length})</Button>
			</div>
			<Modal className='!w-full !inset-0 !h-full' open={closeModal} onCancel={() => setCloseModal(false)} onOk={() => setCloseModal(false)}>
				<div className="w-full flex items-center gap-5 overflow-x-auto mt-10">
					{likedProducts.map(item => <ProductsCard item={item} width={250} key={item.id} handleDeleteProduct={handleDeleteProduct} extraClass={"min-w-[250px]"} isDelete={true} />)}
				</div>
			</Modal>
		</nav>
	)
}

export default Navbar