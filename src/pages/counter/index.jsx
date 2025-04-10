import { useState } from "react";
import Button from "./Button";

const Counter = ({ }) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <Button title="+" onClick={() => setCount(count + 1)} />
            <Button title="-" onClick={() => setCount(count - 1)} />
            <Button title="reset" onClick={() => setCount(0)} />
            <Button title="special" onClick={() => {
                const special = Number(prompt('Enter desired value: '))
                if (isNaN(special)) {
                    setCount(0)
                } else {
                    setCount(special)
                }
            }} />
            <Button title="console" onClick={() => console.log(count)} />
        </div>
    )
}
export default Counter
