import { useState } from "react";

// 1. TextUpdater Component
function TextUpdater() {
  const [text, setText] = useState("");
  return (
    <div className="p-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Type something..."
      />
      <p className="mt-2 text-lg">{text}</p>
    </div>
  );
}

// 2. Form Submission Component
function SimpleForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Enter text"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

// 3. UserCard Component
function UserCard({ name, email }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

// 4. Button Component
function CustomButton() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Click Me
    </button>
  );
}

// 5. LoginForm Component
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        placeholder="Enter email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        placeholder="Enter password"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
}

export default function App() {
  return (
    <div className="p-6 space-y-6 max-w-lg mx-auto">
      <TextUpdater />
      <SimpleForm />
      <UserCard name="John Doe" email="john@example.com" />
      <CustomButton />
      <LoginForm />
    </div>
  );
}
