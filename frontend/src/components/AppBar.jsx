const AppBar = ({ title, logo }) => {
    return <div className="flex justify-between p-3 py-4 border rounded shadow-md mx-1">
        <div className="text-2xl font-bold">{title}</div>
        <div>Hello, User <span className="rounded-full px-2 py-1 bg-green-500">{logo}</span></div>
    </div>
}

export { AppBar }