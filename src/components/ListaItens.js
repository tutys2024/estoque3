import React, { useEffect, useState } from "react";
import { fetchItensEstoque } from "../fetch-items";

export default function ListaItens() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    fetchItensEstoque().then(setItens);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Itens do Estoque</h2>
      <ul>
        {itens.map(item => (
          <li key={item.id} className="p-2 border-b">
            {item.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}
