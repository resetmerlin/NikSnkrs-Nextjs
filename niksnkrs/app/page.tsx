'use client';

import {
  CardLists,
  CardListsSkeleton,
  ChildTemplate,
  HeaderLayout,
  Intro,
  ParentTemplate,
} from '../components';

export default function Home() {
  const isLoading = null;
  const userInfo = null;
  const logOutHandler = () => console.log('touched');
  const threeProducts = [1, 2, 3];
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
