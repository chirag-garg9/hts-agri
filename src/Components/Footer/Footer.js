import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800'>
      <footer class="relative bg-blueGray-200 pt-8 pb-6">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap text-left lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
              <h4 class="text-3xl fonat-semibold text-white">Let's keep in touch!</h4>
              <h5 class="text-lg mt-0 mb-2 text-white">
                Find us on any of these platforms, we respond within 1-2 business days.
              </h5>
              <div class="mt-6 lg:mb-0 mb-6">
                <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <a href="www.twitter.com"><i class="fab fa-twitter"/></a>
                  </button>
                  <button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <a href='www.facebook.com'>  <i class="fab fa-facebook-square"/></a>
                  </button>
                  
                  <button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <a href="www.github.com"><i class="fab fa-github"/></a>
                </button>
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="flex flex-wrap items-top mb-6">
                <div class="w-full lg:w-4/12 px-4 ml-auto">
                  <span class="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
                  <ul class="list-unstyled">
                    <li>
                      <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#about">About Us</a>
                    </li>
                    {/* <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
              </li> */}
                    <li>
                      <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com">Github</a>
                    </li>
                    {/* <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
              </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-6 border-white" />
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-white font-semibold py-1">
                Copyright © <span id="get-current-year">2023</span>
                Code Bandits.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer