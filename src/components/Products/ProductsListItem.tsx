import { Button, Card, CardActions, CardContent } from '@mui/material'

type Props = {}
const ProductsListItem = (props: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-title">iPhone X</div>
                <div className="product-decs">This's iPhone X</div>
                <div className="product-features">
                    <span>Type:</span> phone
                </div>
                <div className="product-features">
                    <span>Capacity:</span> 64Gb
                </div>
                <div className="product-price">
                    <span>Price:</span> 500$
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
