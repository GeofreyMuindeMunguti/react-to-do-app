const TableHeader = () => {
    return (
        <thead>
            <tr className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">#</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">Action</td>
                </tr>
        </thead>
    )
}

const TableBody = (props) => {

    const { data, removeAction } = props

    const rows = data.map((row, index) => {
        return (
            <tr id={index+1} className="text-center">
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">{index+1}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">{row.action}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                    <button 
                    onClick={() => {removeAction(index)}} 
                    className="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden"
                    >Done!
                    <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                    </button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>
            {rows}
        </tbody>

    )
}


const Table = (props) => {
    const {data, removeAction} = props
    
    return(
        <table className="min-w-full leading-normal">
            <TableHeader/>
            <TableBody data={data} removeAction={removeAction}/>
        </table>
    )
}

export default Table