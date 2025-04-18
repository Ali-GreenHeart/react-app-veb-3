import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

const FakeDropDown = () => {
    const { firstName } = useContext(DataContext)
    return (
        <h1 >{firstName}</h1>
    )
}
export default FakeDropDown;
