import { Button, Card, CardActions, CardContent } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import './ProductsListItem.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLikeState } from 'redux/likeReducer'
import { addProductToCart } from 'redux/cartReducer'

type Props = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}
const ProductsListItem = ({
    id,
    title,
    desc,
    type,
    capacity,
    price,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => {
        setCount((prevState: number) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState: number) => prevState - 1)
    }
    const isLiked = useAppSelector((state) => state.likeProducts[id])
    const dispatch = useAppDispatch()

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <Button
                    variant="outlined"
                    onClick={() => dispatch(toggleLikeState(id))}
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
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
                    onClick={() =>
                        dispatch(
                            addProductToCart({
                                id,
                                count,
                            })
                        )
                    }
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
