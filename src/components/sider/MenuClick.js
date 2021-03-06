import { createBrowserHistory } from 'history'
import menus from '../../menu'
const history = createBrowserHistory()

// 这里处理菜单跳转的页面, 新增一个这里需要对应一个菜单...!
export const handleClick = (item) => {
    if (item.key === "/operating") {
        history.push('/operating')
    } else if (item.key === "/user") {
        history.push("/user")
    } else if (item.key === "/product") {
        history.push("/product")
    } else if (item.key === "/glayout") {
        history.push("/glayout")
    } else if (item.key === "//csv_import") {
        history.push("//csv_import")
    }

    // 由于使用history.push()无法跳转...!所以这里手动刷新一次...!
    window.location.reload()
}