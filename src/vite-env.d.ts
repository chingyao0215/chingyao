/**
 * TypeScript Declaration File for Vite
 * 
 * This file helps TypeScript understand non-TypeScript files and Vite-specific features.
 * Without this file, TypeScript would raise errors when importing .vue files or using
 * Vite-specific APIs like import.meta.env.
 */

/// <reference types="vite/client" />
// This directive tells TypeScript to include Vite's client type definitions.
// It enables TypeScript to understand Vite-specific features like import.meta.env.

/**
 * Vue Component Type Declaration
 * 
 * This module declaration tells TypeScript how to handle .vue files when they're imported.
 * It declares that any file with a .vue extension exports a Vue component.
 * 
 * Without this declaration, TypeScript would raise errors like:
 * "Cannot find module './Component.vue' or its corresponding type declarations."
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // DefineComponent is a generic type that takes three type parameters:
  // 1. Props type (empty object here)
  // 2. Return type from setup function (empty object)
  // 3. Any additional options (set to 'any' for flexibility)
  const component: DefineComponent<{}, {}, any>
  export default component
}
