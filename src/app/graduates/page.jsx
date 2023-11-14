'use client'

import { Document, Page as PDFPage, pdfjs } from 'react-pdf'
import MainLayout from '../components/layout'
import { useState } from 'react'
import Loader from '../components/loader'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString()

const Page = () => {
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [years, setYears] = useState([])

    const onDocumentLoadSuccess = ({ numPages }) => {
        setLoading(true)
        let temp = []
        for (let i = 1; i <= numPages; i++) {
            temp.push(`Выпуск ${i + 1948} года`)
        }
        setYears(temp)
    }

    const handleChange = (e) => {
        setCurrentPage(parseInt(e.target.value))
    }

    return (
        <MainLayout>
            <div
                className="lg:grid gap-5 bg-primary flex flex-col-reverse"
                style={{ gridTemplateColumns: !loading ? '10fr 4fr' : '' }}
            >
                <Document
                    file={`${process.env.NEXT_PUBLIC_API_SERVER_URL}/pdf/graduates`}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={false}
                    onLoadStart={() => setLoading(true)}
                    error={false}
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="">
                            <PDFPage
                                pageNumber={currentPage}
                                renderAnnotationLayer={false}
                                loading={false}
                                renderTextLayer={false}
                                onLoadSuccess={() => {
                                    setLoading(false)
                                }}
                            />
                        </div>
                    </div>
                </Document>
                {loading ? (
                    <>
                        <div className="flex mx-auto h-full mt-[200px]">
                            <Loader />
                        </div>
                    </>
                ) : (
                    <div className="bg-white flex-auto h-[100px] lg:flex-1 flex justify-center items-center flex-col lg:gap-10 gap-5">
                        <div className="">
                            <select
                                className="bg-secondary text-white px-5 py-3"
                                onChange={handleChange}
                            >
                                {years.map((year, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={index + 1}
                                            className="bg-white text-grey"
                                        >
                                            {year}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    )
}

export default Page
