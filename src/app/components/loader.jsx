import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loader = () => {
    return (
        <div className="text-[50px] text-grey flex items-center animate-spin justify-center">
            <AiOutlineLoading3Quarters />
        </div>
    )
}

export default Loader
