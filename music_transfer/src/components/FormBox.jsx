

export default function FormBox(props) {

    return(
      <div className="flex flex-row gap-2 items-center justify-center p-24">
          <div className="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800  w-1/2 h-1/2">
            <div className="flex flex-col items-center">
              {props.children}
            </div>
        </div>
      </div>
    )
}