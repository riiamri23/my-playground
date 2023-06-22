import { FaTrash } from 'react-icons/fa';

import { db, collectionVar } from '../utils/firebase';
import { deleteDoc, doc } from 'firebase/firestore';

const Todo = ({todo = [], index}) => {
console.log(todo);
    return (
      <div className="flex items-center space-x-3">
        <div className="text-sm leading-6">
          <label htmlFor="comments" className="font-medium text-gray-900">{`${todo?.date?.toDate()?.toDateString()}`}</label>
          <p className="text-gray-500">{todo?.value}</p>
        </div>
        {/* <FaTrash className="text-red-500"  /> */}
        <FaTrash className="text-red-500" onClick={()=>deleteDoc(doc(db, collectionVar, todo.id))} />

      </div>
    );
}

export default Todo;