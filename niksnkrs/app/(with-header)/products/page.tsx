"use client";

import {
  AtomicTitle,
  ChildTemplate,
  ItemLists,
  ParentTemplate,
} from "@/components";
import { useProductsPage } from "./page.hook";

export default function Page() {
  const [products, isLoading] = useProductsPage();

  return (
    <ParentTemplate size="s">
      <ChildTemplate position="topLeft" size="s">
        <AtomicTitle size="xs">Latest Products</AtomicTitle>
      </ChildTemplate>
      <ChildTemplate position="bottomCenter" size="s">
        <ItemLists products={products} isLoading={isLoading} />
      </ChildTemplate>
    </ParentTemplate>
  );
}
