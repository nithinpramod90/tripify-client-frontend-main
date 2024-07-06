import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigator from './Navigator';

const YOUTUBE_API_KEY = 'AIzaSyBzvlw8zHw8Q8KmVpeWaW_iB0pRaRaHQg0';
const CHANNEL_ID = 'UC2ysr_lTuaAwYyVF0yCn8mw';
const MAX_RESULTS = 9;

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async (pageToken = '') => {
    setLoading(true);
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: YOUTUBE_API_KEY,
          channelId: CHANNEL_ID,
          part: 'snippet',
          maxResults: MAX_RESULTS,
          pageToken: pageToken,
          order: 'date'
        }
      });

      setVideos(prevVideos => [
        ...prevVideos,
        ...response.data.items.map(item => ({
          title: item.snippet.title,
          description: item.snippet.description,
          url: `https://www.youtube.com/embed/${item.id.videoId}`,
          hashtags: [] // Add hashtags if needed
        }))
      ]);

      setNextPageToken(response.data.nextPageToken);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setLoading(false);
    }
  };

  const loadMoreVideos = () => {
    if (nextPageToken) {
      fetchVideos(nextPageToken);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:mt-0 mt-10">
       <Navigator text={'text-black'} icone={'text-black'}/>
         <div
                className="cursor-pointer absolute top-0 left-0 px-10 py-5 "
                onClick={() => navigate('/')}
            >
                <img
                    src="/TRIP999Artboard 1@4x (1).png"
                    alt="TRIPIFYME Logo"
                    className="md:w-20 w-12"
                />
                <p className='md:text-sm font-bold py-2 text-xs'>By QATAYWORLD PVT LTD</p>
            </div>
      <h1 className="text-4xl font-bold mb-8 text-center">Video Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 border-2">
            <div className="relative pb-56">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{video.title}</h2>
              <p className="text-gray-700 mb-4">{video.description}</p>
              <div className="flex flex-wrap space-x-2">
                {video.hashtags.map((hashtag, i) => (
                  <span key={i} className="text-sm font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1">
                    {hashtag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {loading && <p className="text-center mt-8">Loading...</p>}
      {!loading && nextPageToken && (
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            onClick={loadMoreVideos}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
