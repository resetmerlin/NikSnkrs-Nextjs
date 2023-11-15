import { AtomicCard } from '../../atoms';
import './CardLists.scss';

export default function CardListsSkeleton() {
  return (
    <div className="card-lists">
      <AtomicCard />
      <AtomicCard />
      <AtomicCard />
    </div>
  );
}
