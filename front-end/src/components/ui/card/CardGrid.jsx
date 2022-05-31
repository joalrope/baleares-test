import { Col, Row } from "antd";
import React from "react";
import { ImgCard } from "./ImgCard";
import "./card-grid.scss";

export const CardGrid = ({ images }) => {
	return (
		<Row gutter={[24, 24]} justify='space-around' className='row-card'>
			{images.map((img) => (
				<Col
					key={img.id}
					xs={24}
					sm={18}
					md={12}
					lg={8}
					xl={4}
					style={{ display: "flex", justifyContent: "center" }}
				>
					<ImgCard userName={img.name} userId={img.userId} image={img.image} />
				</Col>
			))}
		</Row>
	);
};
