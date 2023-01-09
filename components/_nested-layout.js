export default function NestedLayout({children}) {
  return (
    <>
      <div className="nested-layout border-2 my-4">
        <h2 className="relative -mt-3 mx-2 bg-white text-gray-400 px-2 w-fit">NestedLayout Start</h2>
        {children}
        <h2 className="relative -mb-3 mx-2 bg-white text-gray-400 px-2 w-fit">NestedLayout End</h2>
      </div>
    </>
  )
}