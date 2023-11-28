import { SkeletonCard } from '@/components';
import './CardLists.scss';

export default function CardListsSkeleton() {
  return (
    <div className='card-lists'>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
