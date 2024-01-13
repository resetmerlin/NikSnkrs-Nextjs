import {
  AtomicTitle,
  ChildTemplate,
  ItemLists,
  ParentTemplate,
} from '@/components';
import { getProducts } from '@/lib/actions/products.actions';

export default async function Page() {
  const products = await getProducts();

  return (
    <ParentTemplate size="s">
      <ChildTemplate position="topLeft" size="s">
        <AtomicTitle size="xs">Latest Products</AtomicTitle>
      </ChildTemplate>
      <ChildTemplate position="bottomCenter" size="s">
        <ItemLists products={products} />
      </ChildTemplate>
    </ParentTemplate>
  );
}
