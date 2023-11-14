'use client'

import MainLayout from '@/app/components/layout'
import { DownloadButton } from '@/app/components/button'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { Document, pdfjs, Page as PDFPage } from 'react-pdf'
import Loader from '@/app/components/loader'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString()

const PdfPage = () => {
    const [pages, setPages] = useState(null)
    const [loading, setLoading] = useState(true)

    const { title } = useParams()

    const onDocumentLoadSuccess = ({ numPages }) => {
        let newPages = []
        setLoading(true)
        for (let i = 1; i <= numPages; i++) {
            newPages.push(
                <div className="">
                    <PDFPage
                        pageNumber={i}
                        renderAnnotationLayer={false}
                        loading={false}
                        renderTextLayer={false}
                        onLoadSuccess={() => {
                            if (i === numPages) {
                                setLoading(false)
                            }
                        }}
                    />
                </div>
            )
        }
        setPages(newPages)
    }
    return (
        <MainLayout>
            <main
                className="lg:grid gap-5 bg-primary flex flex-col-reverse"
                style={{ gridTemplateColumns: !loading ? '10fr 4fr' : '' }}
            >
                <Document
                    file={`${process.env.NEXT_PUBLIC_API_SERVER_URL}/pdf/${title}`}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={false}
                    onLoadStart={() => setLoading(true)}
                    error={false}
                >
                    <div className="flex flex-col items-center gap-4 ">
                        {pages}
                    </div>
                </Document>
                {loading ? (
                    <div className="flex mx-auto h-full mt-[200px]">
                        <Loader />
                    </div>
                ) : (
                    <div className="bg-white flex-auto lg:flex-1 h-[100px] flex justify-center items-center">
                        <DownloadButton
                            href={`${process.env.NEXT_PUBLIC_API_SERVER_URL}/pdf/${title}`}
                        >
                            Скачать
                        </DownloadButton>
                    </div>
                )}
            </main>
        </MainLayout>
    )
}

export default PdfPage
