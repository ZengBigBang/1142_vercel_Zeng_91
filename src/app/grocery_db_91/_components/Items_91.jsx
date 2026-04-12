import SingleItem_91 from './SingleItem_91';
import { fetchGrocery } from '@/actions/grocery.action_91';

const Items_91 = async () => {
  const items = await fetchGrocery();
  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem_91 key={item.id} item={item}/>;
      })}
    </div>
  );
};
export default Items_91;
