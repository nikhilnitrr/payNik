const InputBox = ({label, placeholder, onChange}) => {
    return <div className="grid grid-cols-1">
        <div className="text-1xl font-bold py-1">{label}</div>
        <input onChange={onChange} type="text" placeholder={placeholder} className="border border-gray-300 col-span-1 px-1 py-1 rounded-sm"></input>
    </div>
}

export {InputBox}