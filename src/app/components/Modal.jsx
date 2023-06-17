"use client"
import { useEffect, useState } from "react"
import { isMobile } from '../libraries/utils'

export default function Modal() {
    const [images, setImages] = useState([]);
    const [image, setSelectedImage] = useState(undefined);

    const isNextDisabled = images[images?.length - 1] === image;
    const isBackDisabled = images[0] === image;

    const checkImage = (e) => {
        if (isMobile()) return
        const imagesDom = document.querySelectorAll('[class^="wp-image"]');
        const imagesList = Array.from(imagesDom)
        const target = e.target;
        const hasInArray = imagesList.find(item => item.src === target.src);
        if (target.tagName.toLowerCase() === 'img' && hasInArray) {
            setSelectedImage(target.src);
        }
    }

    const handleBack = () => {
        let selectedId = 0
        images.forEach((item, index) => {
            if (item === image) {
                selectedId = index
            }
        })
        if (selectedId > 0) {
            setSelectedImage(images[selectedId - 1])
        }
    }

    const handleNext = () => {
        let selectedId = 0
        images.forEach((item, index) => {
            if (item === image) {
                selectedId = index
            }
        })
        if (selectedId < images?.length - 1) {
            setSelectedImage(images[selectedId + 1])
        }
    }

    const handleCloseModal = () => {
        setSelectedImage(undefined)
    }

    useEffect(() => {
        const imagesDom = document.querySelectorAll('[class^="wp-image"]');
        const imagesList = Array.from(imagesDom)
        setImages(imagesList.map(item => item.src))
        document.addEventListener('click', checkImage);
    }, [])
    return !image ? null : <>
        <div className="absolute top-0 left-0 z-10 w-screen h-screen blur-md backdrop-blur-sm" onClick={() => handleCloseModal()}></div>
        <div class="absolute inset-0 flex items-start justify-center z-20">
            <div class="bg-white relative p-4 rounded-lg shadow-lg max-w-sm md:max-w-fit">
                <div className="flex justify-end mb-2">
                    <button onClick={() => handleCloseModal()} class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold p-2 rounded-full w-8 h-8 flex justify-center items-center">×</button>
                </div>
                <button onClick={() => handleBack()} className={`absolute left-0 z-30 p-2 -translate-y-1/2 top-1/2 bg-emerald-500 ${isBackDisabled ? 'opacity-50 cursor-auto pointer-events-none' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button onClick={() => handleNext()} className={`absolute right-0 z-30 p-2 -translate-y-1/2 top-1/2 bg-emerald-500 ${isNextDisabled ? 'opacity-50  cursor-auto pointer-events-none' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
                <img src={image} />
            </div>
        </div>
    </>

}