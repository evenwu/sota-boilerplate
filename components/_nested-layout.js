export default function NestedLayout({children}) {
  return (
    <>
      <div className="nested-layout my-4 border-2">
        <h2 className="relative mx-2 -mt-3 w-fit bg-white px-2 text-gray-400">
          NestedLayout Start
        </h2>
        {children}
        <h2 className="relative mx-2 -mb-3 w-fit bg-white px-2 text-gray-400">NestedLayout End</h2>
      </div>
    </>
  )
}
