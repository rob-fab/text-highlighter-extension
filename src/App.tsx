import { useCallback, useEffect, useState } from "react";
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

  const onRemove = useCallback(
    async (id: string) => {
      try {
        const newData = data.filter((item) => item.id !== id);
        await chrome.storage.local.set({ selections: newData });
        setData(newData);
      } catch (e) {
        setError("An error occured while trying to remove this highlight");
      }
    },
    [data]
  );

  return (
    <div className="font-sans">
      <header className="bg-indigo-600 text-white flex justify-center items-center h-16 px-4 shadow-md">
        <h1 className="text-xl font-bold">Your Highlights</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        {error && <ErrorMessage message={error} className="mb-6" />}
        {data.length > 0 ? (
          <DataTable data={data} onRemove={onRemove} />
        ) : (
          <p className="text-gray-500 text-center mt-8">
            There are no saved highlights
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
