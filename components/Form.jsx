import React from 'react'
import Link from 'next/link'
const Form = ({
  type, post, setPost, submitting
}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>
          {type} Post
        </span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share amazing prompts with the world, and let your imagination run wild!
      </p>
      <form
      onSubmit={handleSubmit}
      className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Your AI Prompt</span>
          <textarea value={post.prompt}
          onChange={(e) => setPost()} />
          
        </label>

      </form>
    </section>
  )
}

export default Form