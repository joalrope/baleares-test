import React from "react";
import { UploadForm } from "../../forms/upload/Upload";

export const Playground = () => {
	return (
		<div className='container'>
			<div className='row'>
				<form>
					<h3>React File Upload</h3>
					<div className='form-group'>
						<input type='file' />
					</div>
					<div className='form-group'>
						<button className='btn btn-primary' type='submit'>
							Upload
						</button>
					</div>
				</form>
			</div>
			<UploadForm />
		</div>
	);
};
