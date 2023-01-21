import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import './ProductsListItem.scss'

type Props = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
    addProductToCart: (count: number, price: number) => void
}
const ProductsListItem = ({
    id,
    title,
    desc,
    type,
    capacity,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => {
        setCount((prevState: number) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState: number) => prevState - 1)
    }
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-img">
                    <img src={image} alt=""></img>
                </div>
                <div className="product-title">{title}</div>
                <div className="product-decs">{desc}</div>
                <div className="product-features">
                    <span>Type:</span> {type}
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {capacity}
                </div>
                <div className="product-price">
                    <span>Price:</span> {price}$
                </div>
                <Quantity
                    count={count}
                    onIncrementClick={onIncrementClick}
                    onDecrementClick={onDecrementClick}
                />
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
