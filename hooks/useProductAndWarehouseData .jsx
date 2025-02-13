import { useDispatch, useSelector } from "react-redux"
import { productDetails } from "../redux/features/productDetailsSlice"
import { warehousemans } from "../redux/features/warehousemansSlice"
import { useEffect } from "react"
import { productDetailsSelector } from "../redux/selectors/productDetailsSelectors"
import { warehousemansSelector } from "../redux/selectors/warehousemansSelectors"

const useProductAndWarehouseData = (id) => {

    //  dispatch data 
    const dispatch = useDispatch()
    useEffect(() => {
        if (id) {
            dispatch(productDetails(id))
        }
        dispatch(warehousemans())
    }, [dispatch])
    const productDeltails = useSelector(productDetailsSelector)
    const warehousemansData = useSelector(warehousemansSelector)

    // information of edite by  
    const warehousemansInfo = productDeltails?.editedBy?.map((edit) => {
        const warehouseman = warehousemansData?.find(user => user.id == edit.warehousemanId) || null;
        return {
            editedAt: edit.at,
            warehousemanName: warehouseman?.name
        };
    })

    return { productDeltails, warehousemansInfo };
}

export default useProductAndWarehouseData;