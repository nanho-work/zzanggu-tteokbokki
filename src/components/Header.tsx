'use client';

import Image from 'next/image';
import Link from 'next/link';

const prefix = process.env.NODE_ENV === 'production' ? '/zzanggu-tteokbokki' : '';

export default function Header() {
  return (
    <header className="bg-white py-3 px-6 max-w-5xl mx-auto">
      <div className="mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src={`${prefix}/logo.png`} // public 폴더에 저장한 PNG 파일
            alt="짱구즉석떡볶이 로고"
            width={160}
            height={50}
            className="object-contain"
            priority
          />
        </Link>
        {/* 메뉴 추가할 수 있음 */}
        <nav className="text-black font-semibold space-x-4">
          <Link href="/menu">메뉴</Link>
          <Link href="/locations">지점 안내</Link>
        </nav>
      </div>
    </header>
  );
}