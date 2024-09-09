import { useCounter } from "../hooks/useCounter"

export const CounterApp = () => {

    const { counter, increment, reset, decrement } = useCounter()

    return (
        <>
            <h1>Contador</h1>
            <h4>{counter}</h4>
            <button className="btn btn-primary" onClick={() => decrement()}>-1</button>
            <button className="btn btn-danger" onClick={() => reset()}>Reset</button>
            <button className="btn btn-primary" onClick={() => increment()}>+1</button>
        </>
    )
}
