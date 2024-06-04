import React from 'react'

function Product() {
  return (
    <>
    <div className="productParent flex flex-row overflow-hidden">
        <div className="productParentChild productParentChild1 h-full w-1/2">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, libero. Est a officiis voluptatibus veritatis dignissimos quisquam architecto. Velit quisquam tempora voluptas aspernatur necessitatibus minus consequuntur voluptates! Optio est voluptatum omnis fugit aut labore adipisci cupiditate laboriosam sint, provident velit nobis facilis? Optio placeat praesentium nobis eos officiis non architecto facere doloremque, minus, accusamus dolorem hic quam, deleniti voluptas id consequuntur quasi soluta molestiae unde voluptatum quo amet? Itaque neque natus voluptas harum eligendi sed ipsa facilis quis aspernatur assumenda ipsum inventore explicabo labore, omnis ex nostrum qui dolor nam et ducimus amet quaerat enim tenetur architecto. Fugit, error sequi. Dolore esse beatae maiores illo impedit distinctio molestias quos nisi doloremque, officia in facilis officiis, repellendus repellat minus atque molestiae possimus? Voluptatum nihil iure ex deserunt, molestiae officia vero perferendis veritatis adipisci odit dolorum quasi accusamus recusandae quam dolor vel quod quibusdam totam sed non assumenda ratione ipsa beatae. Odio accusantium illo alias eveniet est qui, provident beatae ad, explicabo dolores voluptatum, tempora pariatur quia esse. Architecto recusandae aspernatur, quisquam vitae eligendi impedit odit animi non quo aperiam autem deleniti voluptatem, numquam aliquam corrupti ipsum fuga eum vero rerum atque? Nam maiores accusamus accusantium impedit assumenda corrupti harum, temporibus quas iure, placeat earum provident! Magnam maiores minima harum veniam vero tempore obcaecati deserunt ex sapiente eum dolore soluta incidunt enim ad quos labore adipisci fugiat ipsam vitae earum perferendis ea, accusantium excepturi! Totam quas doloremque facere autem possimus fuga error laboriosam velit. Iste deserunt enim culpa repellendus dolorem, voluptates maxime voluptatum. Sapiente enim libero, officiis laborum nobis blanditiis modi, mollitia omnis pariatur eius voluptates qui quia placeat assumenda quis obcaecati sed voluptas id ipsum accusantium eligendi esse! Unde inventore porro commodi quaerat omnis repellat, non fugit est placeat iusto iste quibusdam veritatis quis obcaecati incidunt? Sapiente laborum expedita sit at.
        </div>
        {/* Scond  */}
        <div className="productParentChild productParentChild2 w-1/2  ">
           <div class="h-full w-full md:h-[200px] md:w-[300px] min-w-[250px]">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Laptop"
            className="h-[20px] w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div class="p-1">
            <h1 class="inline-flex items-center text-lg font-semibold">
            e-Commerce
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-2 h-4 w-4"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </h1>
            <p class="mt-3 text-sm text-gray-600">
                Recently, We started to built an e-Commerce Website in React and it seems prety well. I'm still working on it.
            </p> <span> <a href="">Take a Look</a></span>
            <div class="mt-4">
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #E-Commerce
              </span>
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Amazing
              </span>
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Awesome
              </span>
            </div>
            <div class="mt-3 flex items-center space-x-2">
              <img
                class="inline-block h-8 w-8 rounded-full"
                src="assets/2.jpg"
                alt="Dan_Abromov"
              />
              <span class="flex flex-col">
                <span class="text-[10px] font-medium text-gray-900">Dharmendra Sharma</span>
                <span class="text-[8px] font-medium text-gray-500">DHarmendraWD</span>
              </span>
            </div>
          </div>
        </div>
      
        </div>
    </div>
    </>
  )
}

export default Product