function Form() {
    return (
      <>
        
        
        <div className=" bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900 pt-20">
        <div className="mx-5 md:mx-20 sm:mx-5">
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="h-1 bg-gradient-to-r from-red-500 to-pink-500 to-purple-800" />
          </div>
        </div>
       
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300
                text-3xl font-medium leading-10">Issue certificate</h2>
                <p className="mt-1 text-sm text-purple-200"></p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
                          Receiver web3 Address
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
                          Certicate type
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
                          />
                      </div>
  
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-purple-200">
                          Certificate content
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
                          />
                      
  
                      
                   <div className="px-4 py-3  text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Record On Blockchain
                    </button>
                  </div>
                     </div>
                    </div>
                  </div>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
  
        
  {/* end of record certificate */}


{/* Beginning of Institution name retrieve */}
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Get an issuer institution name of web3 address</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                     
  
                      
  
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-purple-200">
                          Web3 Wallet Address
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
                          />
                      
  
                      
                   <div className="px-4 py-3  text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Retrieve from Blockchain
                    </button>
                  </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
  {/* End of Institution name retrieve  */}


  {/* Begening of Receiver name retrieve */}
  <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">Get a recepient name of web3 address</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                     
  
                      
  
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-purple-200">
                          Web3 Wallet Address
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
                          />
                      
  
                      
                   <div className="px-4 py-3  text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Retrieve from Blockchain
                    </button>
                  </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
  {/* End of Receiver name retrieve */}


  {/* Beginning of certificates issued by web3 wallet address */}
  <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t  border-white" />
          </div>
        </div>
  
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">Get certificates issued by web3 address</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="border-2 border-purple-700 px-4 py-5 bg-zinc-800 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                     
  
                      
  
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-purple-200">
                          Web3 Wallet Address
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
                          />
                      
  
                      
                   <div className="px-4 py-3  text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Retrieve from Blockchain
                    </button>
                  </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">Get certificates received by web3 address</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="border-2 border-purple-700 px-4 py-5 bg-zinc-800 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                     
  
                      
  
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-purple-200">
                          Web3 Wallet Address
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
                          />
                      
  
                      
                   <div className="px-4 py-3  text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Retrieve from Blockchain
                    </button>
                  </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
  {/* End of certificates issued by web3 wallet address */}

      <br/>
      <br/>

</div>
</div>
 

      </>
    )
  }
export default Form;  