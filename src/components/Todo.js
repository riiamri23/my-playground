

const Todo = ({todo = [], index}) => {

    return (
        <div className="text-sm leading-6">
          <label htmlFor="comments" className="font-medium text-gray-900">{`to-do ${index+1}`}</label>
          <p className="text-gray-500">{todo}</p>
        </div>
    );
}

export default Todo;