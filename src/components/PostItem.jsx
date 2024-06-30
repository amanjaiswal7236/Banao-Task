import React from 'react';

function PostItem({ post }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6 w-full">
      <img src={post.image} alt={post.title} className="w-full h-48 md:h-64 object-cover" />
      <div className="p-4">
        <div className="text-gray-500 text-xs mb-2">{post.type}</div>
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <div className="text-gray-500 text-sm mb-4">by {post.author}</div>
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-sm">{post.likes} Likes</div>
          <div className="text-gray-500 text-sm">{post.views} Views</div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
