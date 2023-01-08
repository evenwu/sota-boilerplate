export default function NestedLayout({children}) {
  return (
    <>
      <h2>NestedLayout start</h2>
      {children}
      <h2>NestedLayout end</h2>
    </>
  )
}