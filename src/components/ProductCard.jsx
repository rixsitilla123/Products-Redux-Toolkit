import React from 'react';
import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { DeleteOutlined, HeartFilled } from '@ant-design/icons';

function ProductCard({ item, handleLikedBtnClick, handleDeleteProduct, width, extraClass, isDelete }) {
	return (
		<Card className={`!border-[1.8px] border-blue-500 hover:!border-blue-500 hover:shadow-md hover:shadow-blue-500 ${extraClass}`} hoverable style={{ width: width }} cover={<img className='h-[300px] object-contain' src={item.images[0]} alt="img" width={240} height={300} />}>
			<Meta title={item.title} description={<p className='line-clamp-3'>{item.description}</p>} />
			<Meta description={isDelete
				? <Button onClick={() => handleDeleteProduct(item)} className={`w-full mt-5 !border-red-500 !hover:bg-red-500}`} size='middle'><DeleteOutlined className={`scale-[1.3] text-red-500`} /></Button> 
				: <Button onClick={() => handleLikedBtnClick(item)} className={`w-full mt-5 border-blue-500 hover:bg-blue-500 ${item.isLiked ? "!border-red-500 !hover:bg-red-500" : ""}`} size='middle'><HeartFilled className={`scale-[1.3] text-blue-500 ${item.isLiked ? "text-red-500" : ""}`} /></Button>} 
			/>
		</Card>
	)
}

export default ProductCard