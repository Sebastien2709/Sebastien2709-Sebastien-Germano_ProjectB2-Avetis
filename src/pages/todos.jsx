import { Button } from "@/src/components/Button";
import axios from "axios";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export const getServerSideProps = async () => {
  const { data: todos } = await axios("http://localhost:3000/api/todos");

  return {
    props: {
      todos,
    },
  };
};

const TableCell = ({ className, ...otherProps }) => (
  <td className={clsx("p-3", className)} {...otherProps} />
);

const TodosPage = ({ todos: initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [filters, setFilters] = useState({
    typeDeLieu: "",
    typeDeCuisine: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filters.typeDeLieu && todo.TypeDeLieu !== filters.typeDeLieu) {
      return false;
    }

    if (
      filters.typeDeLieu === "restaurant" &&
      filters.typeDeCuisine &&
      todo.TypeDeCuisine !== filters.typeDeCuisine
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="container">
      <h1 className="title">Liste des Boutiques :</h1>
      <div className="filter">
        <label htmlFor="typeDeLieu">Rechercher par Type de Lieu:</label>
        <select
          id="typeDeLieu"
          name="typeDeLieu"
          value={filters.typeDeLieu}
          onChange={handleFilterChange}
        >
          <option value="">Tous</option>
          <option value="restaurant">Restaurant</option>
          <option value="musee">Musée</option>
          <option value="bar">Bar</option>
          <option value="parc">Parc</option>
        </select>
      </div>

      <table className="table">
        <tbody>
          {filteredTodos.map((todo, index) => (
            <tr key={todo._id} className={index % 2 === 0 ? "even" : "odd"}>
              <TableCell>{todo.TypeDeLieu}</TableCell>
              <TableCell>{todo.NomDuLieu}</TableCell>
              <TableCell>{todo.Adresse}</TableCell>
              <TableCell>{todo.Ville}</TableCell>
              <TableCell>{todo.CodePostal}</TableCell>
              <TableCell>{todo.Pays}</TableCell>
              <TableCell className="description">{todo.description}</TableCell>
              <TableCell>
                <Link href={`/todos/${todo._id}/details`}>
                  <Button>En savoir plus</Button>
                </Link>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        .title {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .table td,
        .table th {
          padding: 10px;
          border: 1px solid #ddd;
        }

        .odd {
          background-color: #f8f8f8;
        }

        .even {
          background-color: #ffffff;
        }

        .description {
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .filter {
          margin-bottom: 20px;
        }

        .filter label {
          margin-right: 10px;
        }

        .filter select {
          padding: 5px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default TodosPage;
