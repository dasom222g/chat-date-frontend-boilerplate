import React from 'react';

const Chat = () => {
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      {/* START:뒤로가기 버튼 */}
      <button
        type="button"
        className="text-none absolute top-6 left-4 px-4 py-2"
      >
        <img src="./images/arrow-prev.svg" alt="뒤로가기" className="block" />
        뒤로가기
      </button>
      {/* END:뒤로가기 버튼 */}
      <div className="h-full flex flex-col">
        {/* START:헤더 영역 */}
        <div className="-mx-6 -mt-10 py-7 bg-date-blue-600">
          <span className="block text-xl text-center text-white">홍길동</span>
        </div>
        {/* END:헤더 영역 */}
        {/* START:채팅 영역 */}
        <div className="overflow-auto">
          {/* START:user 채팅 */}
          <div className="py-4 max-w-3/4 ml-auto text-right">
            <span className="inline-block px-4 py-3 text-sm rounded-xl text-left bg-date-blue-600 text-white rounded-tr-none">
              Hello
            </span>
            <span className="block text-right text-date-gray-400 text-xs mt-2 px-2">
              09:25 AM
            </span>
          </div>
          {/* END:user 채팅 */}
          {/* START:assistant 채팅 */}
          <div className="py-4 max-w-3/4 flex">
            <div className="w-10 h-10 bg-date-blue-500 rounded-full">
              <img src="./images/female.svg" alt="" />
            </div>
            <div className="pl-3">
              <span className="text-base font-medium">홍길동</span>
              <div className="pt-3 pl-2">
                <span className="inline-block px-4 py-3 text-sm rounded-xl text-left bg-date-gray-100 rounded-tl-none">
                  Hello ! Nazrul How are you?
                </span>
                <span className="block text-right text-date-gray-400 text-xs mt-2 px-2">
                  09:25 AM
                </span>
              </div>
            </div>
          </div>
          {/* END:assistant 채팅 */}
        </div>
        {/* END:채팅 영역 */}
        {/* START:메시지 입력 영역 */}
        <div className="mt-auto flex py-5 -mx-2 border-t border-gray-100">
          <div className="w-full px-2 h-full">
            <input
              className="w-full text-sm px-3 py-2 h-full block rounded-xl bg-gray-100 focus:"
              type="text"
            />
          </div>
          <button
            type="button"
            className="w-10 min-w-10 h-10 inline-block rounded-full bg-date-blue-600 text-none px-2 bg-[url('../public/images/send.svg')] bg-no-repeat bg-center"
          >
            보내기
          </button>
        </div>
        {/* END:메시지 입력 영역 */}
      </div>
    </div>
  );
};

export default Chat;
