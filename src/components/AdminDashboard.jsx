import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/admin/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-red-500">
        Admin Dashboard – Messages
      </h1>

      {messages.length === 0 ? (
        <p className="text-gray-500">No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white p-4 rounded-lg shadow"
            >
              <div className="flex justify-between">
                <h2 className="font-semibold">{msg.name}</h2>
                <span className="text-sm text-gray-400">
                  {msg.created_at}
                </span>
              </div>

              <p className="text-sm text-gray-500">{msg.email}</p>
              <p className="mt-2">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}