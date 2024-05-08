import React from 'react';

const Home = () => {
  // logic

  const handleClick = () => {
    console.log('Click');
  };

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-date-pink-500 fixed -z-10 -left-60 -top-56"></i>
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 -z-10">
        <img src="./images/hero.png" alt="hero" />
      </div>
      <div className="h-full flex flex-col">
        {/* START:타이틀 영역 */}
        <div className="px-2 pt-6">
          <h1 className="text-4.5xl font-black text-white max-w-3/4">
            소개팅 1초전
          </h1>
          <span className="block text-sm mt-3 text-white break-keep pr-7">
            소개팅 전, 어떤 얘기를 해야되나 고민되시나요? 미리 연습하고
            가보세요!
          </span>
        </div>
        {/* END:타이틀 영역 */}
        {/* START:Button 영역 */}
        <div className="mt-auto py-12 w-full flex justify-center">
          <button
            className="w-full py-4 px-1 block bg-date-pink-700 rounded-3xl text-white text-sm font-medium"
            type="button"
            onClick={handleClick}
          >
            Get started
          </button>
        </div>
        {/* END:Button 영역 */}
      </div>
    </div>
  );
};

export default Home;
