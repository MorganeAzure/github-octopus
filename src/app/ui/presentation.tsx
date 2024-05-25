//
export default function Presentaion(){
    //
        return (
          <div className="flex-col sm:flex-row p-4 flex w-full items-center justify-center bg-yellow-200">
            <div className="flex m-auto w-auto flex-col items-center">
              <img
                src="/path/to/your/image.jpg"
                alt="Madison Lee"
                className="w-40 bg-green-200 rounded-full text-center h-40 m-4"
              />
              <h1 className="text-4xl font-bold text-white mb-2">Morgane Picciotto</h1>
              <h2 className="text-xl font-semibold text-white mb-6">SHE-EO ・ ENTREPRENEUR</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 m-auto w-full max-w-4xl">
              <div className="bg-teal-400 p-8 text-white text-center rounded-lg shadow-lg">
                Download My Book
              </div>
              <div className="bg-pink-400 p-8 text-white text-center rounded-lg shadow-lg">
                10 Online Side Hustles
              </div>
              <div className="bg-purple-500 p-8 text-white text-center rounded-lg shadow-lg">
                15 Money Saving Ideas
              </div>
              <div className="bg-orange-400 p-8 text-white text-center rounded-lg shadow-lg">
                How To Be A Good Mentor
              </div>
              <div className="bg-indigo-600 p-8 text-white text-center rounded-lg shadow-lg">
                Future Proofing Your Career
              </div>
              <div className="bg-yellow-400 p-8 text-white text-center rounded-lg shadow-lg">
                40 Simple Self Care Tips
              </div>
            </div>
          </div>
        );
      };