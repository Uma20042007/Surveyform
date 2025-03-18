import React from 'react'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-gray-800 mb-4">Survey Form</h1>
        <form>
      <label class="block mb-4">
        <span class="text-gray-700">Name</span>
        <input
          type="text"
          name="name"
          class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </label>
      <label class="block mb-4">
        <span class="text-gray-700">Email</span>
        <input
          type="email"
          name="email"
          class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </label>
      <label class="block mb-4">
        <span class="text-gray-700">Feedback</span>
        <textarea
          name="feedback"
          class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        ></textarea>
      </label>
      <button
        type="submit"
        class="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
      >
        Submit
      </button>
    </form>
  </div>
    </div>
  )
}

export default Home