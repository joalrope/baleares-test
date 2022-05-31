import React, { useEffect, useState } from "react";
import { UploadForm } from "../../forms/upload/Upload";
import { CardGrid } from "../../ui/card/CardGrid";

const dataImages = [
	{
		id: "1001",
		name: "Jose Rodriguez",
		userId: "62943d6c11ffab036b9997f5",
		image: "Cedula Cheo.jpg",
	},
	{
		id: "1002",
		name: "Jose Rodriguez",
		userId: "62943d6c11ffab036b9997f5",
		image: "joalrope.jpg",
	},
	{
		id: "1003",
		name: "Jose Rodriguez",
		userId: "62943d6c11ffab036b9997f5",
		image: "joalrope200x200.png",
	},
	{
		id: "1004",
		name: "Jose Rodriguez",
		userId: "62943d6c11ffab036b9997f5",
		image: "Cedula Cheo.jpg",
	},
	{
		id: "1005",
		name: "Jose Rodriguez",
		userId: "62943d6c11ffab036b9997f5",
		image: "joalrope.jpg",
	},
	{
		id: "1006",
		name: "Jose Rodriguez",
		userId: "62943d6c11ffab036b9997f5",
		image: "joalrope200x200.png",
	},
];

export const Playground = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		let abortController = new AbortController();
		const fetchData = async () => {
			setImages(dataImages);
		};

		fetchData();

		return () => {
			abortController.abort();
		};
	}, []);

	return (
		<div className='container'>
			<CardGrid images={images} />
			<UploadForm />
		</div>
	);
};
