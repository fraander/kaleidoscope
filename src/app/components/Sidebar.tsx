import { ReactNode } from "react"

type Props = {
   children?: ReactNode
}

const Sidebar = ({children}: Props): ReactNode => <div>{children}</div>

export default Sidebar