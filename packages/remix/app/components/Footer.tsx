export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} fickt euch alle zusammen
        </p>
      </div>
    </footer>
  )
}
