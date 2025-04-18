import { useEffect, useRef, useState } from "react";
import Button from "../../components/common/Button";

const clickFunc = () => {
    console.log('click me!')
}
let preVal = '';

const CounterWithSingleUndo = ({ }) => {
    const [count, setCount] = useState(0);

    const titleRef = useRef()

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.addEventListener("click", clickFunc)
        }
        return () => {
            titleRef.current.removeEventListener("click", clickFunc)
        }
    }, [titleRef.current])

    const handleCountChange = (cb) => {
        preVal = count;
        cb()
    }

    return (
        <div>
            <h1 ref={titleRef}>{count}</h1>
            <h1 hidden></h1>
            <Button title="+" onClick={() => handleCountChange(() => setCount(count + 1))} />
            <Button title="-" onClick={() => handleCountChange(() => setCount(count - 1))} />
            <Button title="reset" onClick={() => handleCountChange(() => setCount(0))} />
            <Button title="special" onClick={() => handleCountChange(() => {
                const special = Number(prompt('Enter desired value: '))
                if (isNaN(special)) {
                    setCount(0)
                } else {
                    setCount(special)
                }
            })} />
            <Button title="console" onClick={() => console.log(count)} />
            <Button title="undo" onClick={() => setCount(preVal)} />
            <h1>{preVal}</h1>
        </div>
    )
}
export default CounterWithSingleUndo
