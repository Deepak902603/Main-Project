import React from "react";
import useAuth from "../hooks/useAuth";
import Loader from "./Loader";
import posts from "../data/posts.json";

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-6xl mx-auto mt-16 px-6 pb-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Welcome,
          <span className="text-indigo-400 ml-2">{user}</span> 👋
        </h2>

        <button
          onClick={logout}
          className="px-5 py-2 bg-gradient-to-r from-red-500 to-red-600
                     rounded-xl font-semibold hover:scale-105
                     transition-all duration-300 shadow-lg"
        >
          Logout
        </button>
      </div>

      {/* Cards */}
      {!posts ? (
        <Loader />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => {
            const isPoem = post.poem;

            return (
              <div
                key={post.id}
                className={`relative group backdrop-blur-xl
                  p-6 rounded-2xl border border-white/20
                  hover:-translate-y-2 hover:shadow-2xl
                  transition-all duration-300
                  ${isPoem
                    ? "bg-pink-500/10 shadow-pink-500/30"
                    : "bg-white/10"
                  }`}
              >
                {/* Badge */}
                <span className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full
                  ${isPoem
                    ? "bg-pink-500/20 text-pink-300"
                    : "bg-indigo-500/20 text-indigo-300"
                  }`}
                >
                  {post.category || post.emotion}
                </span>

                <h3 className={`text-lg font-semibold mb-3
                  ${isPoem
                    ? "text-pink-300"
                    : "group-hover:text-indigo-400"
                  } transition`}
                >
                  {post.title}
                </h3>

                {/* Normal Content */}
                {post.body && (
                  <p className="text-sm opacity-80 mb-4 leading-relaxed">
                    {post.body}
                  </p>
                )}

                {/* Poem Content */}
                {post.poem && (
                  <>
                    <p className="text-sm opacity-80 mb-2">
                      {post.description}
                    </p>

                    <pre className="whitespace-pre-wrap text-sm italic text-pink-300 mb-4">
                      {post.poem}
                    </pre>
                  </>
                )}

                <div className="flex justify-between items-center text-xs text-gray-300">
                  <span>✍ {post.author}</span>
                  <span>📅 {post.year}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
