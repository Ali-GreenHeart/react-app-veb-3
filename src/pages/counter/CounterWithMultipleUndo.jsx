import { useEffect, useState } from "react";
import Button from "../../components/common/Button";

let actions = [];
const maxLength = 4; // max length 4

const CounterWithMultipleUndo = ({ }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        actions.push(count)
        actions = actions.slice(-maxLength)
    }, [count])

    const handleUndo = () => {
        if (actions.length === 1) {
            alert('son elementdir!')
            return;
        }
        actions.pop()
        const lastElem = actions.pop()
        setCount(lastElem)

    }

    return (
        <div>
            <h1>{count}</h1>
            <h1 hidden></h1>
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
            <Button title="undo" onClick={handleUndo} />
        </div>
    )
}
export default CounterWithMultipleUndo
