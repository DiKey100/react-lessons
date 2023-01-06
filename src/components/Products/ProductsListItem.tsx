import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'

type Props = {
    title: string
    type: string
    capacity: number | string
    price: number | string
}
const ProductsListItem = (props: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-title">{props.title}</div>
                <div className="product-decs">This's {props.title}</div>
                <div className="product-features">
                    <span>Type:</span> {props.type}
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {props.capacity}
                </div>
                <div className="product-price">
                    <span>Price:</span> {props.price}
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
