import Link from 'next/link'
import { useRouter } from 'next/router'

type HeaderLinkProps = {
  href: string
  children: React.ReactNode | string
}

export function HeaderLink({ href, children }: HeaderLinkProps) {
  // const router = useRouter()
  // const active = router.pathname.startsWith(href)

  return (
    <Link href={href}>
      <a className="text-gray-400 p-2 hover:bg-gray-800 hover:text-gray-300 transition-all ease-in-out duration-200 rounded-md">
        {children}
      </a>
    </Link>
  )
}
