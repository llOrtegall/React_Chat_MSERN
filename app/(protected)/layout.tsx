export default async function Home({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {children}
    </div>
  )
}