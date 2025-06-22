// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 max-w-5xl mx-auto">
      {/* Hero */}
<section className="relative h-[500px] flex items-center justify-center text-white">
  {/* 배경 이미지 */}
  <img
    src="/home2.png"
    alt="짱구즉석떡볶이"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* 내용 컨테이너 (max-w-5xl 고정) */}
  <div className="absolute inset-0 max-w-5xl mx-auto w-full flex z-10">
    <div className="w-1/2" /> {/* 왼쪽은 비워둠 */}
    <div className="w-1/2 bg-red-600/80" /> {/* 오른쪽만 색칠 */}
  </div>

  {/* 텍스트 콘텐츠 */}
  <div className="relative z-20 text-center px-4">
    <h1 className="text-4xl font-bold mb-4">짱구즉석떡볶이</h1>
    <p className="text-xl">즐겁게 매운맛, 짱구의 떡볶이</p>
  </div>
</section>

      
      {/* 대표 메뉴 섹션 */}
      <section className="px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">대표 메뉴</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: '기본즉석떡볶이',
              description: '떡+오뎅+쫄면+라면+양배추+콩나물+미더덕+마른새우',
              prices: [
                { size: '소', amount: '10,000원' },
                { size: '중', amount: '12,000원' },
                { size: '대', amount: '14,000원' }
              ],
              image: '/menu1.png'
            },
            {
              title: '차돌즉석떡볶이',
              description: '차돌+깻잎+떡+오뎅+쫄면+라면+양배추',
              prices: [
                { size: '소', amount: '13,000원' },
                { size: '중', amount: '15,000원' },
                { size: '대', amount: '17,000원' }
              ],
              image: '/menu2.png'
            },
            {
              title: '짜장즉석떡볶이 (매콤)',
              description: '짜장소스+떡+오뎅+쫄면+라면+양배추',
              prices: [
                { size: '소', amount: '11,000원' },
                { size: '중', amount: '13,000원' },
                { size: '대', amount: '15,000원' }
              ],
              image: '/menu3.png'
            }
          ].map((menu, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src={menu.image} alt={menu.title} className="w-full h-68 object-cover" />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">BEST</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-center">{menu.title}</h3>
                <p className="text-sm text-gray-600 mb-3 text-center">{menu.description}</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  {menu.prices.map((price, i) => (
                    <li key={i} className="text-center">
                      {price.size} : {price.amount}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* 맛있게 먹는 방법 */}
      <section className="px-4 py-12 text-gray-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* 이미지 왼쪽 */}
        <div>
          <img src="/home.png" alt="떡볶이 안내" className="w-full rounded-lg shadow" />
        </div>

        {/* 오른쪽 텍스트 */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">짱구즉석떡볶이 맛있게 먹는 법</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm md:text-base">
            <li>즉떡에 라면사리가 들어있어요. 주문시 참고!<br />(소: 라면반개, 중/대: 라면1개)</li>
            <li>면, 야채사리는 첫주문시 주문해주세요.</li>
            <li>약한불로 졸이면서 드시면 더 맛있어요.<br />(라면, 쫄면은 가급적 빨리드세요)</li>
            <li>‘야끼만두 또는 튀김’을 즉떡에 넣어드시면 더욱 맛있어요!</li>
            <li>볶음밥을 드실경우 국물을 조금 남겨주세요.<br />그래야 더욱 맛있는 볶음밥이 됩니다~</li>
          </ol>
        </div>
      </section>
    </main>
  );
}