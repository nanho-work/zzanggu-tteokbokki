// components/menu.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';

interface MenuItem {
  title: string;
  description: string;
  prices: { size: string; amount: string }[];
  image: string;
}

const menuItems: MenuItem[] = [
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
  },
  {
    title: '비엔나즉석떡볶이',
    description: '비엔나소세지+떡+오뎅+쫄면+라면+양배추',
    prices: [
      { size: '소', amount: '12,000원' },
      { size: '중', amount: '14,000원' },
      { size: '대', amount: '16,000원' }
    ],
    image: '/menu4.png'
  },
  {
    title: '돈까스',
    description: '',
    prices: [
      { size: '', amount: '8,000원' }
    ],
    image: '/images/menu4.png'
  },
  {
    title: '쫄면',
    description: '',
    prices: [
      { size: '', amount: '7,000원' }
    ],
    image: '/images/menu14.jpg'
  },
  {
    title: '튀김 (2개)',
    description: '오징어, 김말이',
    prices: [
      { size: '', amount: '1,500원' }
    ],
    image: '/menu6.png'
  },
  {
    title: '쉬림프즉석떡볶이',
    description: '떡+오뎅+쫄면+라면+양배추+콩나물+미더덕+마른새우+새우',
    prices: [
      { size: '소', amount: '13,000원' },
      { size: '중', amount: '15,000원' },
      { size: '대', amount: '17,000원' }
    ],
    image: '/images/menu16.jpg'
  },
  {
    title: '라면사리',
    description: '',
    prices: [
      { size: '', amount: '2,000원' }
    ],
    image: '/images/menu17.jpg'
  },
  {
    title: '쫄면사리',
    description: '',
    prices: [
      { size: '', amount: '2,000원' }
    ],
    image: '/images/menu18.jpg'
  },
  {
    title: '떡사리',
    description: '',
    prices: [
      { size: '', amount: '2,000원' }
    ],
    image: '/images/menu19.jpg'
  },
  {
    title: '치즈떡사리',
    description: '',
    prices: [
      { size: '', amount: '2,000원' }
    ],
    image: '/images/menu20.jpg'
  },
  {
    title: '야채사리',
    description: '',
    prices: [
      { size: '', amount: '2,000원' }
    ],
    image: '/images/menu21.jpg'
  },
  {
    title: '오뎅사리',
    description: '',
    prices: [
      { size: '', amount: '2,000원' }
    ],
    image: '/images/menu22.jpg'
  },
  {
    title: '계란(간)',
    description: '',
    prices: [
      { size: '', amount: '1,000원' }
    ],
    image: '/images/menu23.jpg'
  },
  {
    title: '치즈사리',
    description: '',
    prices: [
      { size: '', amount: '2,000원' }
    ],
    image: '/images/menu24.jpg'
  },
  {
    title: '햄사리',
    description: '',
    prices: [
      { size: '', amount: '2,000원' }
    ],
    image: '/images/menu25.jpg'
  },
  {
    title: '차돌사리',
    description: '',
    prices: [
      { size: '', amount: '5,000원' }
    ],
    image: '/images/menu26.jpg'
  },
  {
    title: '아마이쯔케',
    description: '',
    prices: [
      { size: '', amount: '1,500원' }
    ],
    image: '/images/menu27.jpg'
  },
  {
    title: '김말이튀김',
    description: '',
    prices: [
      { size: '', amount: '1,500원' }
    ],
    image: '/menu6.png'
  },
  {
    title: '오징어튀김',
    description: '',
    prices: [
      { size: '', amount: '1,500원' }
    ],
    image: '/menu6.png'
  },
  {
    title: '기본볶음밥',
    description: '',
    prices: [
      { size: '', amount: '2,000원' }
    ],
    image: '/images/menu30.jpg'
  },
  {
    title: '치즈볶음밥',
    description: '',
    prices: [
      { size: '', amount: '4,000원' }
    ],
    image: '/images/menu31.jpg'
  },
  {
    title: '물냉면',
    description: '',
    prices: [
      { size: '', amount: '7,000원' }
    ],
    image: '/images/menu32.jpg'
  },
  {
    title: '비빔냉면',
    description: '',
    prices: [
      { size: '', amount: '7,000원' }
    ],
    image: '/images/menu33.jpg'
  },
  {
    title: '공기밥',
    description: '',
    prices: [
      { size: '', amount: '1,500원' }
    ],
    image: '/images/menu34.jpg'
  },
  {
    title: '콜라 (캔355ml)',
    description: '',
    prices: [
      { size: '', amount: '2,000원' }
    ],
    image: '/images/menu35.jpg'
  },
  {
    title: '사이다 (캔355ml)',
    description: '',
    prices: [
      { size: '', amount: '2,000원' }
    ],
    image: '/images/menu36.jpg'
  },
  {
    title: '쿨피스 (캔355ml)',
    description: '',
    prices: [
      { size: '', amount: '2,000원' }
    ],
    image: '/images/menu37.jpg'
  }
];

export default function MenuList() {
  const tteokRef = useRef(null);
  const sariRef = useRef(null);
  const sideRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('떡볶이');

  const tteokbokkiItems = menuItems.filter(item =>
    [
      '기본즉석떡볶이',
      '차돌즉석떡볶이',
      '짜장즉석떡볶이 (매콤)',
      '비엔나즉석떡볶이',
      '쉬림프즉석떡볶이'
    ].includes(item.title)
  );
  const sariItems = menuItems.filter(item =>
    [
      '튀김 (2개)', '라면사리', '쫄면사리', '떡사리', '치즈떡사리',
      '야채사리', '오뎅사리', '계란(간)', '치즈사리',
      '햄사리', '차돌사리', '아마이쯔케', '김말이튀김',
      '오징어튀김', '기본볶음밥', '치즈볶음밥'
    ].includes(item.title)
  );
  const sideItems = menuItems.filter(item =>
    [
      '돈까스', '쫄면', '물냉면', '비빔냉면', '공기밥',
      '콜라 (캔355ml)', '사이다 (캔355ml)', '쿨피스 (캔355ml)'
    ].includes(item.title)
  );

  const handleScrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const options = { root: null, rootMargin: '0px', threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) setActiveCategory(id);
        }
      });
    }, options);

    const sections = [tteokRef, sariRef, sideRef];
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const renderSection = (title: string, items: MenuItem[]) => (
    <div className="mb-10">
      <div className={`grid gap-6 ${
        title === '사리'
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          : title === '사이드메뉴'
            ? 'grid-cols-1 sm:grid-cols-2'
            : ''
      }`}>
        {items.map((item, idx) => (
          <div key={idx} className="border rounded-xl p-4 shadow-sm bg-white flex gap-4 items-center">
            {title !== '사리' && (
              <img src={item.image} alt={item.title} className="w-40 h-40 object-cover rounded-md" />
            )}
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              {item.description && (
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              )}
              {item.prices.length === 3 ? (
                <p className="mt-2 text-sm">
                  <span className="mr-2 font-medium">소</span><span className="font-bold">{item.prices[0].amount}</span>
                  <span className="ml-4 mr-2 font-medium">중</span><span className="font-bold">{item.prices[1].amount}</span>
                  <span className="ml-4 mr-2 font-medium">대</span><span className="font-bold">{item.prices[2].amount}</span>
                </p>
              ) : (
                <div className="mt-2 text-sm space-y-1">
                  {item.prices.map((p, i) => (
                    <p key={i}>
                      {p.size && <span className="font-medium mr-2">{p.size}</span>}
                      <span className="font-bold">{p.amount}</span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className="sticky top-0 z-10 bg-white border-b flex justify-around py-4 text-base font-bold">
        <button onClick={() => handleScrollTo(tteokRef)} className={activeCategory === '떡볶이' ? 'text-red-500' : 'text-gray-500'}>떡볶이</button>
        <button onClick={() => handleScrollTo(sariRef)} className={activeCategory === '사리' ? 'text-red-500' : 'text-gray-500'}>사리</button>
        <button onClick={() => handleScrollTo(sideRef)} className={activeCategory === '사이드메뉴' ? 'text-red-500' : 'text-gray-500'}>사이드메뉴</button>
      </div>
      <div id="떡볶이" ref={tteokRef}>
        {renderSection('떡볶이', tteokbokkiItems)}
      </div>
      <div className="relative flex items-center my-12">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-lg font-bold text-gray-500">사리 메뉴</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div id="사리" ref={sariRef}>
        {renderSection('사리', sariItems)}
      </div>
      <div className="relative flex items-center my-12">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-lg font-bold text-gray-500">사이드메뉴</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div id="사이드메뉴" ref={sideRef}>
        {renderSection('사이드메뉴', sideItems)}
      </div>
    </div>
  );
}