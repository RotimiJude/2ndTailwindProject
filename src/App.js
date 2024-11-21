
import './App.css';


function App() {
  return (
    <div className="text-gray-600 font-body">

<div >
    <div>
      <nav>
        <div>
          <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
            <a href="/" className='text-green-500 sm:text-red-500'>Food Ninja</a>
          </h1>
        </div>
        <ul>
          <li className='text-gray-700 font-bold'>
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  
    <main className='px-16 py-6 bg-gray'>
      <div className='flex justify-center md:justify-end'>
        <a href="#" className='text-primary'>Log in</a>
        <a href="#" className='text-primary ml-2'>Sign up</a>
      </div>

      <header>
        <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
        <h3 className='text-2xl font-semibold'>For Ninjas</h3>
      </header>

      <div>
        <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
  
        <div className='mt-8'>
          {/* <!-- cards go here --> */}
          <div className='bg-white rounded overflow-hidden shadow-md'> 
            <img src="/img/curry.jpg" alt='curry' className='w-full h-32 sm:48 object-cover'/>
            {/* image stays here */}
            <div className='m-4'>
              <span className='font-bold'>5 Bean Chili Stew</span>
              <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
            </div>
          </div>
        </div>

        <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>

        <div className='mt-8'>
          {/* <!-- cards go here --> */}
        </div>
      </div>

      <div className='flex justify-center2'>
        <div className='bg-secondary-100 text-secondary-200 '>Load more</div>
      </div>    
    </main>
  </div>
  <span className='text-5xl text-gray-300 font-serif'>
        This is tailwind css
      </span>
     
     
    </div>
  );
}

export default App;
