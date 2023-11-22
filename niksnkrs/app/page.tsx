import { getProducts } from '@/lib/actions/products.actions';
import {
  CardLists,
  CardListsSkeleton,
  ChildTemplate,
  HeaderLayout,
  Intro,
  ParentTemplate,
} from '../components';

async function Home() {
  const isLoading = null;
  const userInfo = null;
  const products = await getProducts();

  const logOutHandler = () => console.log('touched');
  const threeProducts = products && [...products]?.slice(0, 3);

  return (
    <HeaderLayout userInfo={userInfo} logOut={logOutHandler}>
      <ParentTemplate size='s'>
        <ChildTemplate position='center' size='s'>
          <Intro />
        </ChildTemplate>
        <ChildTemplate position='bottomRight' size='s'>
          {isLoading ? (
            <CardListsSkeleton />
          ) : (
            <CardLists products={threeProducts} />
          )}
        </ChildTemplate>
      </ParentTemplate>
    </HeaderLayout>
  );
}

export default Home;
