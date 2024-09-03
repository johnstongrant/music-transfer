
// PageWrapper will serve as the navigation bar that will be the same on every page throughout this application
export default function PageWrapper(props){
    return (
        <>
            <div className="text-white min-w-full bg-blue-200 grid grid-rows-1 grid-cols-3 grid-flow-row  p-8">
                <div className="col-span-2 text-3xl ml-3">
                    <h1>Music Transfer</h1>
                </div>
                <div className="col-span-1 flex flex-row mb-0 mt-3 justify-end">
                    <h1 className="">Login</h1>
                </div>
            </div>
            <div>
                {props.children}
            </div>
        </>

    )
}