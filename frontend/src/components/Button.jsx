const Button = ({title, onClick}) => {
    return <div onClick={onClick} className="rounded bg-black text-white text-center mt-5 mb-3 py-2 cursor-pointer">
        {title}
    </div>
}

export {Button}