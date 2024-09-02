const NotFoundPage = () => {
  return (
    <section>
      <div className=' text-white'>
        <div className='flex h-screen'>
          <div className='m-auto text-center'>
            <div>
              <img src='/404.svg' alt='404' />
            </div>
            <p className='text-sm md:text-base text-[#ff98d9] p-2 mb-4'>
              The stuff you were looking for doesn&apos;t exist
            </p>
            <a
              href='/'
              className='bg-transparent hover:bg-[#e018a4] text-[#ffa3dd] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#f395d1] hover:border-transparent'
            >
              Take me home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NotFoundPage;
