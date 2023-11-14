import Image from 'next/image'

export const Title = ({ children }) => {
    return <h1 className="lg:text-4xl text-3xl font-bold">{children}</h1>
}

export const Block = ({ children }) => {
    return <p className="lg:text-lg text-md">{children}</p>
}

export const List = ({ children }) => {
    return <ul className="lg:text-lg text-md list-disc pl-10">{children}</ul>
}

export const ListItem = ({ children }) => {
    return <li className="lg:text-lg text-md">{children}</li>
}

export const ImageBlock = ({ src }) => {
    return <Image className="lg:w-1/3 md:w-1/2 m-auto" src={src} alt="" />
}
