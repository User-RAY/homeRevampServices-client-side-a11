import CardTodo from "../../components/CardTodo/CardTodo";


const ToDo = () => {
    return (
        <div className="mt-8 mb-6 w-11/12 mx-auto">

            <h1 className="text-4xl my-4 hidden"> Currently Nobody has Booked Any of your Service </h1>

            <CardTodo></CardTodo>
            <CardTodo></CardTodo>
            
        </div>
    );
};

export default ToDo;