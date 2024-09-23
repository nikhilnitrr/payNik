const Balance = ({balance}) => {
    return <div className="p-2 text-0.5xl font-semibold py-5">
        Your balance  <span className="px-2">Rs {balance}</span>
    </div>
}

export {Balance}