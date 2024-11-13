'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

export default function setting() {
    const router = useRouter()
  return (
    <> <h1>SETTING PAGE</h1> 
        <Suspense fallback={<p>Loading Button...</p>}>
        <button type="button" onClick={() => router.push('/home')}>
        home</button>
        </Suspense>
    </>
  )
}
