import { ReactNode } from "react"

type Props = {
   children: ReactNode
}

export default function ContentBlock({children}: Props) {
   return <div className="m-4 bg-white dark:bg-black p-8 rounded-md shadow-md">
      {children}
   </div>
}