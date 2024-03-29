import { DataPoint } from "../types";

interface DataTableProps {
  data: DataPoint[];
  onRemove: (id: string) => void;
}

export const DataTable = ({ data, onRemove }: DataTableProps) => {
  return (
    <table className="table-fixed w-full shadow-md">
      <thead>
        <tr className="bg-indigo-200 text-left text-sm font-medium">
          <th className="px-6 py-3 w-4/12">Text</th>
          <th className="px-6 py-3 w-3/12">Page Title</th>
          <th className="px-6 py-3 w-3/12">Page URL</th>
          <th className="px-6 py-3 w-2/12"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-b">
            <td className="px-6 py-4">{item.text}</td>
            <td className="px-6 py-4">{item.websiteTitle}</td>
            <td className="px-6 py-4">
              <a href={item.websiteUrl} className="text-blue-500 underline">
                {item.websiteUrl}
              </a>
            </td>
            <td className="px-6 py-4">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-3 rounded"
                onClick={() => onRemove(item.id)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
