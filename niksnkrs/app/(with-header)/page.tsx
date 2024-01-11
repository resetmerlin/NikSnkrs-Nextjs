import { getProducts } from '@/lib/actions/products.actions';
import {
  CardLists,
  CardListsSkeleton,
  ChildTemplate,
  Intro,
  ParentTemplate,
} from '../../components';

export default async function Page() {
  const products = await getProducts();

  const threeProducts = products && [...products]?.slice(0, 3);

  return (
    <ParentTemplate size="s">
      <ChildTemplate position="center" size="s">
        <Intro />
      </ChildTemplate>
      <ChildTemplate position="bottomRight" size="s">
        {!threeProducts ? (
          <CardListsSkeleton />
        ) : (
          <CardLists products={threeProducts} />
        )}
      </ChildTemplate>
    </ParentTemplate>
  );
}
