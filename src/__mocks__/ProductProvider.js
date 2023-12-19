import React from "react";

export const useProduct = jest.fn();

export const {ProductProvider} = jest.requireActual('src/providers/product.js');