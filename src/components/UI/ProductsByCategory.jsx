import React from 'react'
import { products } from '../../../dummyProducts'
import { Col, Row } from 'antd'
import FeaturedProducts from './FeaturedProducts'

export default function ProductsByCategory({category}) {

    const CPUCategoryData = products?.filter((product) => product.category === category)
  return (
    <div>
        <Row gutter={[16,16]}>
         {CPUCategoryData?.map((product) =>(
            <Col span={6} key={product.id}>
                <FeaturedProducts product={product} />
            </Col>
         ))}
        </Row>
    </div>
  )
}
