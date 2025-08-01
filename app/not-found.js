import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center min-h-[100vh] px-4 text-center'>
            <h1 className='text-6xl font-bold gradient-title mb-4'>404</h1>
            <h1 className='text-2xl font-semibold mb-4'>Page Not Found</h1>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}