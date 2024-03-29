import { useEffect, useState } from "react";
import { DataPoint } from "./types";
import { DataTable } from "./components/data-table";
import { ErrorMessage } from "./components/error-message";

function App() {
  const [data, setData] = useState<DataPoint[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const getData = async () => {
      const { selections } = await chrome.storage.local.get("selections");
      setData(selections || []);
    };
    getData().catch(() =>
      setError(
        "There was an error while trying to read data from the chrome local storage. Make sure you are running this app as a chrome extension with storage permissions."
      )
    );
  }, []);

  return (
    <div className="font-sans">
      <header className="bg-gray-800 text-white flex justify-center items-center h-16 px-4">
        <h1 className="text-xl font-bold">Your Highlights</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        {error ? <ErrorMessage message={error} /> : <DataTable data={data} />}
      </main>
    </div>
  );
}

export default App;
