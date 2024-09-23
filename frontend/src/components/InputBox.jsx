const InputBox = ({label, placeholder}) => {
    return <div className="grid grid-cols-1">
        <div className="text-1xl font-bold py-1">{label}</div>
        <input type="text" placeholder={placeholder} className="border border-gray-300 col-span-1 px-1 py-1 rounded-sm"></input>
    </div>
}

export {InputBox}