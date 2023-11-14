export const DownloadButton = ({ href, children }) => {
    return (
        <a href={href}>
            <nav className="py-3 px-10 bg-secondary text-center text-white hover:cursor-pointer">
                {children}
            </nav>
        </a>
    )
}
