import React, { useState } from 'react';

const videos = [
  {
    title: "Big Buck Bunny",
    channel: "Blender Foundation",
    views: "1M views",
    timestamp: "1 day ago",
    thumbnail: "https://www.w3schools.com/html/pic_trulli.jpg",
    videoUrl: "https://download.blender.org/demo/movies/BBB/bbb_sunflower_1080p_30fps_normal.mp4"
  },
  {
    title: "Sintel",
    channel: "Blender Foundation",
    views: "2M views",
    timestamp: "2 days ago",
    thumbnail: "https://www.w3schools.com/html/img_chania.jpg",
    videoUrl: "https://download.blender.org/demo/movies/Sintel.2010.1080p.mkv"
  },
  {
    title: "Tears of Steel",
    channel: "Blender Foundation",
    views: "3M views",
    timestamp: "3 days ago",
    thumbnail: "https://www.w3schools.com/html/img_girl.jpg",
    videoUrl: "https://download.blender.org/demo/movies/ToS/tears_of_steel_720p.mov"
  },
  {
    title: "Caminandes: Llamigos",
    channel: "Blender Foundation",
    views: "6M views",
    timestamp: "6 days ago",
    thumbnail: "https://www.w3schools.com/html/img_mountains.jpg",
    videoUrl: "https://caminandes.com/wp-content/uploads/2016/06/Caminandes_Llamigos_720p.mp4"
  },
  {
    title: "BBB Trailer",
    channel: "Blender Foundation",
    views: "7M views",
    timestamp: "1 week ago",
    thumbnail: "https://www.w3schools.com/html/img_lights.jpg",
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4"
  },
  {
    title: "ED Trailer",
    channel: "Blender Foundation",
    views: "8M views",
    timestamp: "2 weeks ago",
    thumbnail: "https://www.w3schools.com/html/img_forest.jpg",
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.webm"
  },
  {
    title: "Big Buck Bunny (Short)",
    channel: "Blender Foundation",
    views: "9M views",
    timestamp: "3 weeks ago",
    thumbnail: "https://www.w3schools.com/html/img_lights.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Tears of Steel (Short)",
    channel: "Blender Foundation",
    views: "10M views",
    timestamp: "1 month ago",
    thumbnail: "https://www.w3schools.com/html/img_forest.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
];

const Home = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg overflow-hidden relative"
            onMouseEnter={() => setHoveredVideo(index)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            {hoveredVideo === index ? (
              <video
                src={video.videoUrl}
                className="w-full h-48 object-cover"
                autoPlay
                loop
                muted
              />
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
