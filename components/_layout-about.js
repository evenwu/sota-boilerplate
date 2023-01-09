export default function LayoutAbout({children}) {
  return (
    <>
      <div className="nested-layout my-6">
        <div className="relative mx-2 -mb-2 w-fit bg-white px-2 text-sm leading-none text-sky-500">
          Layout:About Start
        </div>
        <div className="border-2 border-slate-200 p-10">{children}</div>
        <div className="relative mx-2 -mt-2 w-fit bg-white px-2 text-sm leading-none text-sky-500">
          Layout:About End
        </div>
      </div>
    </>
  )
}
