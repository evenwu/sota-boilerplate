export default function NestedLayout({children}) {
  return (
    <>
      <div class="nested-layout my-6">
        <div class="relative mx-2 -mb-2 w-fit bg-white px-2 text-sm leading-none text-slate-400 ">
          NestedLayout Start
        </div>
        <div class="border-2 border-slate-200 p-5">
          <h2>NestedLayout Heading</h2>
          {children}
        </div>
        <div class="relative mx-2 -mt-2 w-fit bg-white px-2 text-sm leading-none text-slate-400">
          NestedLayout End
        </div>
      </div>
    </>
  )
}
