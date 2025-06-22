// src/app/menu/page.tsx
import React from 'react';
import MenuList from '@/components/menu';

export default function MenuPage() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">짱구즉석떡볶이 메뉴</h1>
      <MenuList />
    </main>
  );
}