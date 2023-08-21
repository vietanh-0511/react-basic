import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "../../store/slices/counterSlice"

function Counter() {
    const {count} = useSelector((state) => state.counter)
    const dispatch = useDispatch()
  
    return (
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(incrementByAmount(100))}
          >
            Increase by 100 
          </button>
        </div>
      </div>
    )
  }

export default Counter;