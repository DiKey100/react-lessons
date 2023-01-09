import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'

type ProductProps = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
}

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map((product: ProductProps) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductsListItem
                            title={product.title}
                            desc={product.desc}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default ProductsList
