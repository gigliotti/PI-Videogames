import { useDispatch } from "react-redux"
import { order } from "../redux/actions";
import { ASCENDENTE, DESCENDENTE } from "../redux/constants";



function Order() {

    const dispatch = useDispatch()
    const onOrderSelectChange = (e) => {
        dispatch(order(e.target.value))
    }


    

    return <select name="orderSelect" onChange={onOrderSelectChange}>
        <option value={ASCENDENTE}>ascendente</option>
        <option value={DESCENDENTE}>descendente </option>
    </select>
}

export default Order;