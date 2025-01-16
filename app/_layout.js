import "../global.css";
import React from 'react';
import { ClerkProvider } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';

export default function Layout() {
  return (
      <Slot />
      );
}
