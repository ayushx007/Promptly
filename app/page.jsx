import Feed from "@components/Feed";
const Home = () => (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Discover & Share The Best
            <br className='max-md:hidden' />&nbsp;
            <span className="orange_gradient text-center">
                AI-Powered Prompts
            </span>
        </h1>
        <p className='desc text-center'>
            Promptly is an AI prompting tool for the modern world to discover, create, and share helpful and creative prompts.
        </p>
        <Feed />
    </section>
);

export default Home;