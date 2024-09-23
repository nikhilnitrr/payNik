export const SendMoney = () => {
    return <div className="h-screen flex justify-center bg-slate-200">
        <div className="flex flex-col justify-center">
            <div className="w-80 border rounded p-3 shadow-sm bg-white">
                <div className="text-center text-3xl font-bold mb-10">Send Money</div>
                <div className="font-bold px-2 mt-2"><span className="text-white bg-green-500 rounded-full px-2 py-1">N</span> Nikhil Chandrakar</div>
                <div className="p-2 mt-5 mb-5">
                    <div>Amount (in Rs)</div>
                    <input type="text" placeholder="Enter amount" className="w-full border rounded-sm text-sm p-2"></input>
                </div>
                <div className="cursor-pointer text-white bg-black text-md text-center rounded-md p-2 mx-1 m-5">Initiate transfer</div>
            </div>
        </div>
    </div>
}