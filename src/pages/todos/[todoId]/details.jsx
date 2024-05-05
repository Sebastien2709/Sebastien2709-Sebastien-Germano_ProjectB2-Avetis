import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/src/components/Button";

const Details = () => {
  const router = useRouter();
  const { todoId } = router.query;
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const { data } = await axios.get(`/api/todos/${todoId}`);
        setTodo(data);
      } catch (error) {
        console.error("Error fetching todo:", error);
        setError(
          "Une erreur s'est produite lors du chargement des détails de la boutique."
        );
      } finally {
        setLoading(false);
      }
    };

    if (todoId) {
      fetchTodo();
    }
  }, [todoId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/todos/${todoId}`);
      router.push("/todos");
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container error">{error}</div>;
  }

  return (
    <div className="container">
      <h1>{todo.TypeDeLieu}</h1>
      <p>Nom du lieu: {todo.NomDuLieu}</p>
      <p>Adresse: {todo.Adresse}</p>
      <p>Ville: {todo.Ville}</p>
      <p>Code postal: {todo.CodePostal}</p>
      <p>Pays: {todo.Pays}</p>
      {/* Ajoutez ici d'autres informations de la boutique si nécessaire */}

      <div className="button-group">
        <Button onClick={handleDelete}>Delete</Button>
        <Link href={`/todos/${todoId}/edit`}>
          <Button>Edit</Button>
        </Link>
      </div>

      <button className="back-button" onClick={() => router.push("/todos")}>
        Retour à la liste
      </button>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
        }

        .error {
          color: red;
        }

        h1 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        p {
          margin-bottom: 5px;
        }

        .button-group {
          margin-bottom: 20px;
        }

        .button-group > :global(button) {
          margin-right: 10px;
        }

        .back-button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .back-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Details;
