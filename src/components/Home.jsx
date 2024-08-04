import React, { useState } from 'react';

const videos = [
  {
    title: "Big Buck Bunny",
    channel: "Blender Foundation",
    views: "1M views",
    timestamp: "1 day ago",
    thumbnail: "https://www.w3schools.com/html/pic_trulli.jpg",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ"
  },
  {
    title: "Sintel",
    channel: "Blender Foundation",
    views: "2M views",
    timestamp: "2 days ago",
    thumbnail: "https://www.w3schools.com/html/img_chania.jpg",
    videoUrl: "https://www.youtube.com/embed/eRsGyueVLvQ"
  },
  {
    title: "Tears of Steel",
    channel: "Blender Foundation",
    views: "3M views",
    timestamp: "3 days ago",
    thumbnail: "https://www.w3schools.com/html/img_girl.jpg",
    videoUrl: "https://www.youtube.com/embed/R6MlUcmOul8"
  },
  {
    title: "Caminandes: Llamigos",
    channel: "Blender Foundation",
    views: "6M views",
    timestamp: "6 days ago",
    thumbnail: "https://www.w3schools.com/html/img_mountains.jpg",
    videoUrl: "https://www.youtube.com/embed/XP7KpUgyqIc"
  },
  {
    title: "BBB Trailer",
    channel: "Blender Foundation",
    views: "7M views",
    timestamp: "1 week ago",
    thumbnail: "https://www.w3schools.com/html/img_lights.jpg",
    videoUrl: "https://www.youtube.com/embed/YE7VzlLtp-4"
  },
  {
    title: "ED Trailer",
    channel: "Blender Foundation",
    views: "8M views",
    timestamp: "2 weeks ago",
    thumbnail: "https://www.w3schools.com/html/img_forest.jpg",
    videoUrl: "https://www.youtube.com/embed/2P-CAXFUw6Q"
  },
  {
    title: "Big Buck Bunny (Short)",
    channel: "Blender Foundation",
    views: "9M views",
    timestamp: "3 weeks ago",
    thumbnail: "https://www.w3schools.com/html/img_lights.jpg",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ"
  },
  {
    title: "Tears of Steel (Short)",
    channel: "Blender Foundation",
    views: "10M views",
    timestamp: "1 month ago",
    thumbnail: "https://www.w3schools.com/html/img_forest.jpg",
    videoUrl: "https://www.youtube.com/embed/R6MlUcmOul8"
  },
];

const Home = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handleVideoClick = (index) => {
    setPlayingVideo(index);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg overflow-hidden relative cursor-pointer"
            onClick={() => handleVideoClick(index)}
          >
            {playingVideo === index ? (
              <iframe
                width="100%"
                height="200"
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <p className="text-gray-600">{video.channel}</p>
              <p className="text-gray-600">{video.views} • {video.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
