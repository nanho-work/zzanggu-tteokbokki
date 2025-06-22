"use client"

// src/components/LocationPage.tsx
export default function LocationPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
      {/* 지점 정보 목록 */}
      <div className="space-y-16">
        <div className="my-16 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-4 text-gray-500 text-base sm:text-xl whitespace-nowrap">짱구즉석떡볶이 태평동본점</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>
          <p className="text-sm mt-2 text-right">주소: 경기 성남시 수정구 남문로145번길 1</p>
          <a
            href="https://map.kakao.com/?urlX=531496.0000000006&amp;urlY=1097018.0000000028&amp;itemId=21381839&amp;q=%EC%A7%B1%EA%B5%AC%EC%A6%89%EC%84%9D%EB%96%A1%EB%B3%B6%EC%9D%B4&amp;srcid=21381839&amp;map_type=TYPE_MAP&amp;from=roughmap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="http://t1.daumcdn.net/roughmap/imgmap/9bb6fb4b84f16a6bfc9530dab70a715091db0bcd159cdb80ac3613432e1bbf39"
              alt="짱구즉석떡볶이 지도"
              className="w-full aspect-[16/9] border border-gray-300"
            />
          </a>
          <div className="flex flex-col sm:flex-row justify-between items-center px-3 py-2 bg-gray-100 border-t space-y-2 sm:space-y-0">
            <a href="https://map.kakao.com" target="_blank" rel="noopener noreferrer">
              <img
                src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                alt="카카오맵"
                width={72}
                height={16}
              />
            </a>
            <div className="text-xs space-x-3">
              <a
                href="https://map.kakao.com/?from=roughmap&amp;eName=%EC%A7%B1%EA%B5%AC%EC%A6%89%EC%84%9D%EB%96%A1%EB%B3%B6%EC%9D%B4&amp;eX=531496.0000000006&amp;eY=1097018.0000000028"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                길찾기
              </a>
              <a
                href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=21381839&amp;itemId=21381839&amp;q=%EC%A7%B1%EA%B5%AC%EC%A6%89%EC%84%9D%EB%96%A1%EB%B3%B6%EC%9D%B4&amp;urlX=531496.0000000006&amp;urlY=1097018.0000000028"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                지도 크게 보기
              </a>
            </div>
          </div>
        </div>

        <div className="my-16 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-4 text-gray-500 text-base sm:text-xl whitespace-nowrap">짱구즉석떡볶이 위례점</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>
          <p className="text-sm mt-2 text-right">주소: 경기 성남시 수정구 위례광장로 328 우성위례타워 117호</p>
          <a
            href="https://map.kakao.com/?urlX=531625&amp;urlY=1103325&amp;itemId=1038719211&amp;q=%EC%A7%B1%EA%B5%AC%EC%A6%89%EC%84%9D%EB%96%A1%EB%B3%B6%EC%9D%B4&amp;srcid=1038719211&amp;map_type=TYPE_MAP&amp;from=roughmap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="http://t1.daumcdn.net/roughmap/imgmap/f5f1542904ce4e89466d3b477f8ede5f9c2582833a8cdba49d36f65a283bfcb2"
              alt="짱구즉석떡볶이 위례점 지도"
              className="w-full aspect-[16/9] border border-gray-300"
            />
          </a>
          <div className="flex flex-col sm:flex-row justify-between items-center px-3 py-2 bg-gray-100 border-t space-y-2 sm:space-y-0">
            <a href="https://map.kakao.com" target="_blank" rel="noopener noreferrer">
              <img
                src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                alt="카카오맵"
                width={72}
                height={16}
              />
            </a>
            <div className="text-xs space-x-3">
              <a
                href="https://map.kakao.com/?from=roughmap&amp;eName=%EC%A7%B1%EA%B5%AC%EC%A6%89%EC%84%9D%EB%96%A1%EB%B3%B6%EC%9D%B4&amp;eX=531625&amp;eY=1103325"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                길찾기
              </a>
              <a
                href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=1038719211&amp;itemId=1038719211&amp;q=%EC%A7%B1%EA%B5%AC%EC%A6%89%EC%84%9D%EB%96%A1%EB%B3%B6%EC%9D%B4&amp;urlX=531625&amp;urlY=1103325"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                지도 크게 보기
              </a>
            </div>
          </div>
        </div>

        <div className="my-16 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-4 text-gray-500 text-base sm:text-xl whitespace-nowrap">짱구즉석떡볶이 태전점</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>
          <p className="text-sm mt-2 text-right">주소: 경기 광주시 태성로 130-1 한양프라자 B06호</p>
          <a
            href="https://map.kakao.com/?urlX=550426.9999999999&amp;urlY=1077377.0000000007&amp;itemId=1144064291&amp;q=%EC%A7%B1%EA%B5%AC%EC%A6%89%EC%84%9D%EB%96%A1%EB%B3%B6%EC%9D%B4&amp;srcid=1144064291&amp;map_type=TYPE_MAP&amp;from=roughmap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="http://t1.daumcdn.net/roughmap/imgmap/1fbb6f79c55081ef64e1e550f87ba9772281983b2fa8ff14601934dd3c2325ea"
              alt="짱구즉석떡볶이 태전점 지도"
              className="w-full aspect-[16/9] border border-gray-300"
            />
          </a>
          <div className="flex flex-col sm:flex-row justify-between items-center px-3 py-2 bg-gray-100 border-t space-y-2 sm:space-y-0">
            <a href="https://map.kakao.com" target="_blank" rel="noopener noreferrer">
              <img
                src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                alt="카카오맵"
                width={72}
                height={16}
              />
            </a>
            <div className="text-xs space-x-3">
              <a
                href="https://map.kakao.com/?from=roughmap&amp;eName=%EC%A7%B1%EA%B5%AC%EC%A6%89%EC%84%9D%EB%96%A1%EB%B3%B6%EC%9D%B4&amp;eX=550426.9999999999&amp;eY=1077377.0000000007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                길찾기
              </a>
              <a
                href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=1144064291&amp;itemId=1144064291&amp;q=%EC%A7%B1%EA%B5%AC%EC%A6%89%EC%84%9D%EB%96%A1%EB%B3%B6%EC%9D%B4&amp;urlX=550426.9999999999&amp;urlY=1077377.0000000007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                지도 크게 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}