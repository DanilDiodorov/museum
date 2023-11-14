'use client'

import { useParams } from 'next/navigation'
import MainLayout from '@/app/components/layout'
import { useEffect, useState } from 'react'
import Loader from '@/app/components/loader'
import { DownloadButton } from '@/app/components/button'

const Page = () => {
    const { year } = useParams()
    const [forms, setForms] = useState([])
    const [loading, setLoading] = useState(false)
    const [current, setCurrent] = useState(null)

    useEffect(() => {
        switch (parseInt(year)) {
            case 2023:
                let formsTemp = [2, 3, 4, 6, 7, '8-1', '8-2', 9, 11]
                setCurrent(formsTemp[0])
                setForms(formsTemp)
                break
            default:
                setForms([])
                break
        }
    }, [year])

    const handleChange = (e) => {
        setCurrent(e.target.value)
    }

    return (
        <MainLayout>
            <main
                className="lg:grid gap-5 bg-primary flex flex-col-reverse"
                style={{ gridTemplateColumns: '10fr 4fr' }}
            >
                <div className="bg-white">
                    <video
                        className="w-full h-[400px] bg-[#000]"
                        src={`${process.env.NEXT_PUBLIC_API_SERVER_URL}/video?path=${year}/${current}.mp4`}
                        controls
                    ></video>
                </div>
                {loading ? (
                    <>
                        <div className="flex mx-auto h-full mt-[200px]">
                            <Loader />
                        </div>
                    </>
                ) : (
                    <div className="bg-white flex-auto lg:flex-1 flex justify-center items-center flex-col lg:gap-10 gap-5 h-[200px]">
                        <select
                            className="bg-secondary text-white px-6 py-3"
                            onChange={handleChange}
                        >
                            {forms.map((form, index) => {
                                return (
                                    <option
                                        key={index}
                                        value={form}
                                        className="bg-white text-grey"
                                    >
                                        {form} класс
                                    </option>
                                )
                            })}
                        </select>
                        <DownloadButton
                            href={`${process.env.NEXT_PUBLIC_API_SERVER_URL}/video?path=${year}/${current}.mp4`}
                        >
                            Cкачать
                        </DownloadButton>
                    </div>
                )}
            </main>
        </MainLayout>
    )
}

export default Page
