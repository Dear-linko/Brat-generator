'use client';
import { useEffect } from 'react';
import clarity from '@microsoft/clarity';

export default function ClarityAnalytics() {
  useEffect(() => {
    clarity.init(process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID);
  }, []);

  return null;
}