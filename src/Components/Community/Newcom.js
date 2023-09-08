import React from 'react'
import "./newcom.css"

const Newcom = () => {
  return (

    <div className='bgset'>
    <div className='d-flex align-middle justify-center'>
            <div className="box-border max-w-7xl mx-4 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3 d-flex">
      {/* <!-- Card--> */}
      <article className="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border">
        <div className="flex pb-6 items-center justify-between">
          <div className="flex">
            <a className="inline-block mr-4" href="/">
              <img className="rounded-full max-w-none w-12 h-12" alt="text" src="https://randomuser.me/api/portraits/men/35.jpg" />
            </a>
            <div className="flex flex-col">
              <div>
                <a className="inline-block text-lg font-bold text-black" href="/">Rajesh shukla</a>
              </div>
              <div className="text-slate-500  dark:text-slate-400">
                July 17, 2022
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-extrabold text-black">
        When is the best time to plant crops?
        </h2>
        <p className="text-black">
          Can you tell what is the best time to plant crops. Suggest some tech as well.
        </p>
        <div className="py-4">
          <a className="inline-flex items-center" href="/">
            <span className="mr-2">
              <svg className="fill-rose-600 dark:fill-rose-400"  style={{width: "22px", height: "22px"}} viewBox="0 0 24 24">
                <path
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                </path>
              </svg>
            </span>
            <span className="text-lg font-bold">34</span>
          </a>
        </div>
        <div className="relative">
          <input
            className="pt-2 pb-2 pl-3 w-full h-11 text-white bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
            type="text" placeholder="Suggest Answer" />
          <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
            
            <svg className="fill-blue-500 dark:fill-slate-50"  style={{width: "22px", height: "22px"}} viewBox="0 0 24 24">
              <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
            </svg>
          </span>
        </div>
        {/* <!-- Comments content --> */}
        <div className="pt-6">
          {/* <!-- Comment row --> */}
          <div className="media flex pb-4">
            <a className="mr-4" href="/">
              <img className="rounded-full max-w-none w-12 h-12" alt="text" src="https://randomuser.me/api/portraits/men/82.jpg" />
            </a>
            <div className="media-body">
              <div>
                <a className="inline-block text-base font-bold mr-2" href="/">Raghav</a>
                <span className="text-slate-500 dark:text-slate-300">25 minutes ago</span>
              </div>
              <p>The best time to plant crops depends on your location and the specific crop you're growing. Research the optimal planting window for your region and crop type.</p>
              <div className="mt-2 flex items-center">
                <a className="inline-flex items-center py-2 mr-3" href="/">
                  <span className="mr-2">
                    <svg className="fill-rose-600 dark:fill-rose-400"  style={{width: "22px", height: "22px"}}
                      viewBox="0 0 24 24">
                      <path
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                      </path>
                    </svg>
                  </span>
                  <span className="text-base font-bold">12</span>
                </a>
                <button className="py-2 px-4 font-medium hover:bg-slate-50 hover:text-white dark:hover:bg-slate-700 rounded-lg">
                  Reply
                </button>
              </div>
            </div>
          </div>
          {/* <!-- End comments row -->
          <!-- comments row --> */}
          <div className="media flex pb-4">
            <a className="inline-block mr-4" href="/">
              <img className="rounded-full max-w-none w-12 h-12" alt="text" src="https://randomuser.me/api/portraits/women/76.jpg" />
            </a>
            <div className="media-body">
              <div>
                <a className="inline-block text-base font-bold mr-2" href="/">Radha</a>
                <span className="text-slate-500 dark:text-slate-300">13 minutes ago</span>
              </div>
              <p> Crop planting times can vary, but in general, many crops are best planted in the spring after the last frost. Check your local agricultural extension office for precise planting recommendations</p>
              <div className="mt-2 flex items-center">
                <a className="inline-flex items-center py-2 mr-3" href="/">
                  <span className="mr-2">
                    <svg className="fill-rose-600 dark:fill-rose-400" style={{width: "22px", height: "22px"}}
                      viewBox="0 0 24 24">
                      <path
                        d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z">
                      </path>
                    </svg>
                  </span>
                  <span className="text-base font-bold">0</span>
                </a>
                <button className="py-2 px-4 font-medium hover:bg-slate-50 hover:text-white dark:hover:bg-slate-700 rounded-lg">
                  Reply
                </button>
              </div>
            </div>
          </div>
          {/* <!-- End comments row -->
          <!-- More comments --> */}
          <div className="">
            <a href="/"
              className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium text-white hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75">Show
              more Answer</a>
          </div>
          {/* <!-- End More comments --> */}
        </div>
        {/* <!-- End Comments content --> */}
      </article>
    </div>
    </div>

<hr/>

   {/* 2nd cummunity question */}


   <div className='d-flex align-middle justify-center'>
            <div className="box-border max-w-7xl mx-4 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3 d-flex">
      {/* <!-- Card--> */}
      <article className="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border">
        <div className="flex pb-6 items-center justify-between">
          <div className="flex">
            <a className="inline-block mr-4" href="/">
              <img className="rounded-full max-w-none w-12 h-12" alt="text" src="https://randomuser.me/api/portraits/men/32.jpg" />
            </a>
            <div className="flex flex-col">
              <div>
                <a className="inline-block text-lg font-bold text-black" href="/">Ram sharma</a>
              </div>
              <div className="text-slate-500  dark:text-slate-400">
                July 17, 2023
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-extrabold text-black">
        How can I improve soil fertility?
        </h2>
        <p className="text-black">
         I have been growing crops since last 10 years but i have notice that the yield has been decreased kindly help me to improve my soil fertility 
        </p>
        <div className="py-4">
          <a className="inline-flex items-center" href="/">
            <span className="mr-2">
              <svg className="fill-rose-600 dark:fill-rose-400"  style={{width: "22px", height: "22px"}} viewBox="0 0 24 24">
                <path
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                </path>
              </svg>
            </span>
            <span className="text-lg font-bold">34</span>
          </a>
        </div>
        <div className="relative">
          <input
            className="pt-2 pb-2 pl-3 w-full h-11 text-white bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
            type="text" placeholder="Suggest Answer" />
          <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
            
            <svg className="fill-blue-500 dark:fill-slate-50"  style={{width: "22px", height: "22px"}} viewBox="0 0 24 24">
              <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
            </svg>
          </span>
        </div>
        {/* <!-- Comments content --> */}
        <div className="pt-6">
          {/* <!-- Comment row --> */}
          <div className="media flex pb-4">
            <a className="mr-4" href="/">
              <img className="rounded-full max-w-none w-12 h-12" alt="text" src="https://randomuser.me/api/portraits/men/42.jpg" />
            </a>
            <div className="media-body">
              <div>
                <a className="inline-block text-base font-bold mr-2" href="/">gulam sharma </a>
                <span className="text-slate-500 dark:text-slate-300">25 minutes ago</span>
              </div>
              <p>To improve soil fertility, consider adding organic matter like compost or well-rotted manure. You can also use cover crops to prevent erosion and fix nitrogen in the soil</p>
              <div className="mt-2 flex items-center">
                <a className="inline-flex items-center py-2 mr-3" href="/">
                  <span className="mr-2">
                    <svg className="fill-rose-600 dark:fill-rose-400"  style={{width: "22px", height: "22px"}}
                      viewBox="0 0 24 24">
                      <path
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                      </path>
                    </svg>
                  </span>
                  <span className="text-base font-bold">12</span>
                </a>
                <button className="py-2 px-4 font-medium hover:bg-slate-50 hover:text-white dark:hover:bg-slate-700 rounded-lg">
                  Reply
                </button>
              </div>
            </div>
          </div>
          </div>
          {/* <!-- End comments row -->
          <!-- comments row --> */}

          <div className="media flex pb-4">
            <a className="inline-block mr-4" href="/">
              <img className="rounded-full max-w-none w-12 h-12" alt="text" src="https://randomuser.me/api/portraits/women/76.jpg" />
            </a>
            <div className="media-body">
              <div>
                <a className="inline-block text-base font-bold mr-2" href="/"> Anjali Patro</a>
                <span className="text-slate-500 dark:text-slate-300">3 minutes ago</span>
              </div>
              <p> Conduct a soil test to determine nutrient deficiencies, and then apply the appropriate fertilizers based on the test results. Crop rotation can also help maintain soil fertility.</p>
              <div className="mt-2 flex items-center">
                <a className="inline-flex items-center py-2 mr-3" href="/">
                  <span className="mr-2">
                    <svg className="fill-rose-600 dark:fill-rose-400" style={{width: "22px", height: "22px"}}
                      viewBox="0 0 24 24">
                      <path
                        d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z">
                      </path>
                    </svg>
                  </span>
                  <span className="text-base font-bold">0</span>
                </a>
                <button className="py-2 px-4 font-medium hover:bg-slate-50 hover:text-white dark:hover:bg-slate-700 rounded-lg">
                  Reply
                </button>
              </div>
            </div>
          </div>
          {/* <!-- End comments row -->
          <!-- More comments --> */}
           <div className="pt-6">
          {/* <!-- Comment row --> */}
          <div className="media flex pb-4">
            <a className="mr-4" href="/">
              <img className="rounded-full max-w-none w-12 h-12" alt="text" src="https://randomuser.me/api/portraits/men/22.jpg" />
            </a>
            <div className="media-body">
              <div>
                <a className="inline-block text-base font-bold mr-2" href="/">chirag sharma </a>
                <span className="text-slate-500 dark:text-slate-300">2 minutes ago</span>
              </div>
              <p>To enhance soil fertility, employ a multifaceted approach that includes soil testing to determine nutrient deficiencies and pH levels, the addition of organic matter like compost and cover crops to improve soil structure and nutrient content, crop rotation to prevent soil depletion and minimize pest and disease issues, balanced fertilization based on soil test recommendations, and sustainable farming practices such as reduced tillage and responsible water management.</p>
              <div className="mt-2 flex items-center">
                <a className="inline-flex items-center py-2 mr-3" href="/">
                  <span className="mr-2">
                    <svg className="fill-rose-600 dark:fill-rose-400"  style={{width: "22px", height: "22px"}}
                      viewBox="0 0 24 24">
                      <path
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                      </path>
                    </svg>
                  </span>
                  <span className="text-base font-bold">12</span>
                </a>
                <button className="py-2 px-4 font-medium hover:bg-slate-50 hover:text-white dark:hover:bg-slate-700 rounded-lg">
                  Reply
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <a href="/"
              className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium text-white hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75">Show
              more Answer</a>
          </div>
          {/* <!-- End More comments --> */}
        </div>
        {/* <!-- End Comments content --> */}
      </article>
    </div>
    </div>

<hr/>



{/* 
    3rd cummunity question */}
      <div className='d-flex align-middle justify-center'>
            <div className="box-border max-w-7xl mx-4 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3 d-flex">
      {/* <!-- Card--> */}
      <article className="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border">
        <div className="flex pb-6 items-center justify-between">
          <div className="flex">
            <a className="inline-block mr-4" href="/">
              <img className="rounded-full max-w-none w-12 h-12" alt="text" src="https://randomuser.me/api/portraits/men/33.jpg" />
            </a>
            <div className="flex flex-col">
              <div>
                <a className="inline-block text-lg font-bold text-black" href="/">Ayush Singh</a>
              </div>
              <div className="text-slate-500  dark:text-slate-400">
                July 23, 2022
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-extrabold text-black">
        How do I prepare for extreme weather events, like droughts or floods?
        </h2>
        <p className="text-black">
          I had recently discoverd that there are chances of Bad weather here so help me to tackle and get prepared for extreme weather condition?
        </p> 
        <div className="py-4">
          <a className="inline-flex items-center" href="/">
            <span className="mr-2">
              <svg className="fill-rose-600 dark:fill-rose-400"  style={{width: "22px", height: "22px"}} viewBox="0 0 24 24">
                <path
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                </path>
              </svg>
            </span>
            <span className="text-lg font-bold">14</span>
          </a>
        </div>
        <div className="relative">
          <input
            className="pt-2 pb-2 pl-3 w-full h-11 text-white bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
            type="text" placeholder="Suggest Answer" />
          <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
            
            <svg className="fill-blue-500 dark:fill-slate-50"  style={{width: "22px", height: "22px"}} viewBox="0 0 24 24">
              <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
            </svg>
          </span>
        </div>
        {/* <!-- Comments content --> */}
        <div className="pt-6">
          {/* <!-- Comment row --> */}
          <div className="media flex pb-4">
            <a className="mr-4" href="/">
              <img className="rounded-full max-w-none w-12 h-12" alt="text" src="https://randomuser.me/api/portraits/men/12.jpg" />
            </a>
            <div className="media-body">
              <div>
                <a className="inline-block text-base font-bold mr-2" href="/">Raghav</a>
                <span className="text-slate-500 dark:text-slate-300">25 minutes ago</span>
              </div>
              <p>Invest in water storage facilities and consider using drought-resistant crop varieties. Implement soil conservation practices like terracing to prevent soil erosion during heavy rains.</p>
              <div className="mt-2 flex items-center">
                <a className="inline-flex items-center py-2 mr-3" href="/">
                  <span className="mr-2">
                    <svg className="fill-rose-600 dark:fill-rose-400"  style={{width: "22px", height: "22px"}}
                      viewBox="0 0 24 24">
                      <path
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                      </path>
                    </svg>
                  </span>
                  <span className="text-base font-bold">12</span>
                </a>
                <button className="py-2 px-4 font-medium hover:bg-slate-50 hover:text-white dark:hover:bg-slate-700 rounded-lg">
                  Reply
                </button>
              </div>
            </div>
          </div>
          {/* <!-- End comments row -->
          <!-- comments row --> */}
          <div className="media flex pb-4">
            <a className="inline-block mr-4" href="/">
              <img className="rounded-full max-w-none w-12 h-12" alt="text" src="https://randomuser.me/api/portraits/women/36.jpg" />
            </a>
            <div className="media-body">
              <div>
                <a className="inline-block text-base font-bold mr-2" href="/">Priya verma</a>
                <span className="text-slate-500 dark:text-slate-300">13 minutes ago</span>
              </div>
              <p>Develop a comprehensive disaster management plan for your farm. This plan should include strategies for protecting livestock, securing equipment, and managing water resources during extreme events.</p>
              <div className="mt-2 flex items-center">
                <a className="inline-flex items-center py-2 mr-3" href="/">
                  <span className="mr-2">
                    <svg className="fill-rose-600 dark:fill-rose-400" style={{width: "22px", height: "22px"}}
                      viewBox="0 0 24 24">
                      <path
                        d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z">
                      </path>
                    </svg>
                  </span>
                  <span className="text-base font-bold">0</span>
                </a>
                <button className="py-2 px-4 font-medium hover:bg-slate-50 hover:text-white dark:hover:bg-slate-700 rounded-lg">
                  Reply
                </button>
              </div>
            </div>
          </div>
          {/* <!-- End comments row -->
          <!-- More comments --> */}
          <div className="w-full">
            <a href="/"
              className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium text-white hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75">Show
              more Answer</a>
          </div>
          {/* <!-- End More comments --> */}
        </div>
        {/* <!-- End Comments content --> */}
      </article>
    </div>
    </div>
    </div>
  )
}

export default Newcom