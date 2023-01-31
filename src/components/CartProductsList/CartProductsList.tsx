import { useAppSelector } from 'redux/hooks'
import { getProductsObject, ProductProps } from 'utils/productsArray'
import CartProductsListItem from './CartProductsListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {}
    CartItem?: any
}
type ProductsObjectProps = {
    [id: number]: ProductProps
}

const CartProductsList = ({
    productsInCart,
    CartItem = CartProductsListItem,
}: Props) => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObjectProps = getProductsObject(productsArray)
    if (productsArray.length === 0) {
        return null
    } else {
        return (
            <>
                {Object.keys(productsInCart).map((productId) => (
                    <CartItem
                        key={productId}
                        product={productsObject[parseInt(productId)]}
                        productCount={productsInCart[parseInt(productId)]}
                    />
                ))}
            </>
        )
    }
}

export default CartProductsList
