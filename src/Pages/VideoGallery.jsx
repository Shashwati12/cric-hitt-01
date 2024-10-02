"use client"

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import worldcup from '../assets/worldcup.mp4'
import worldcup2 from '../assets/worldcup2.mp4'
import suryakumar from '../assets/suryakumar.mp4'
import kingkohli from '../assets/kingkohli.mp4'
import test from '../assets/test.mp4'
import benStokes from '../assets/benStokes.mp4'
import worldcup3 from '../assets/worldcup3.mp4'
import kohliking from '../assets/kohliking.mp4'
import rohitman from '../assets/rohitman.mp4'
import BubbleText from '../components/BubbleText'
// Mock data for videos
const videos = [
  { id: 1, src: worldcup, title: 'WORLD CUP' },
  { id: 2, src: worldcup2, title: 'FINALLY' },
  { id: 3, src: suryakumar, title: 'AURA' },
  { id: 4, src: kingkohli, title: 'KING KOHLI' },
  { id: 5, src: test, title: 'TEST' },
  { id: 6, src: benStokes, title: 'BEN STOKES' },
  { id: 7, src: worldcup3, title: 'T20 CUP' },
  { id: 8, src: kohliking, title: 'CHIKU' },
  { id: 9, src: rohitman, title: 'ROHITMAN' },
]

const VideoCard = ({ video, isSelected, onClick }) => {
  const videoRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current) {
      videoRef.current.muted = false
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.muted = true
    }
  }

  const handleCloseClick = (e) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = true // Mute the video when the close button is clicked
    }
    onClick()
  }

  return (
    <motion.div
      layout
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${
        isSelected ? 'fixed inset-0 z-50 flex items-center justify-center' : 'w-full h-64'
      }`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: isSelected ? 1 : 1,
        transition: { duration: 0.3 }
      }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <motion.div
        className={`${isSelected ? 'w-[90vw] h-[90vh] max-w-5xl max-h-[80vh]' : 'w-full h-full'}`}
        initial={false}
        animate={isSelected ? { scale: 1 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <video
          ref={videoRef}
          src={video.src}
          className="w-full h-full object-cover rounded-lg"
          loop
          muted={!isHovered && !isSelected}
          autoPlay
          playsInline
        />
      </motion.div>
      <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
        isSelected ? 'opacity-0' : 'opacity-0 hover:opacity-100'
      }`}>
        <h3 className="text-white text-xl font-bold">{video.title}</h3>
      </div>
      {isSelected && (
        <button
          onClick={handleCloseClick} // Use the new handler here
          className="absolute top-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </motion.div>
  )
}

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleCardClick = (video) => {
    setSelectedVideo(selectedVideo === video ? null : video)
  }

  return (
    <div className="bg-black container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-12 cursor-pointer">
        <BubbleText></BubbleText>
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isSelected={selectedVideo === video}
              onClick={() => handleCardClick(video)}
            />
          ))}
        </AnimatePresence>
      </div>
      {selectedVideo && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVideo(null)}
        />
      )}
    </div>
  )
}

export default VideoGallery


