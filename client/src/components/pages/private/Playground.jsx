import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getImages } from "../../../actions/upload";
import { UploadForm } from "../../forms/upload/Upload";
import { CardGrid } from "../../ui/card/CardGrid";

export const ImagesContext = createContext(null);

export const Playground = () => {
	const dispatch = useDispatch();
	const [images, setImages] = useState([]);
	const imgCtxValue = { images, setImages };

	useEffect(() => {
		let abortController = new AbortController();
		const fetchData = async () => {
			const result = await dispatch(getImages());

			console.log(result);

			const sortResult = result.sort((a, b) => a.image - b.image);

			setImages(sortResult);
		};

		fetchData();

		return () => {
			abortController.abort();
		};
	}, [dispatch]);

	return (
		<div className='container'>
			<ImagesContext.Provider value={imgCtxValue}>
				<CardGrid images={images} />
				<UploadForm />
			</ImagesContext.Provider>
		</div>
	);
};
