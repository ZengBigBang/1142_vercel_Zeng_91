import { createGrocery } from "@/actions/grocery.action_91";
const Form_91 = () => {

  return (
    <form action={createGrocery}>
      <h4>grocery bud (db)</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          name = 'name'
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
};
export default Form_91;
