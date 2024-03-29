import { DataPoint } from "../types";

interface DataTableProps {
  data: DataPoint[];
}

export const DataTable = ({ data }: DataTableProps) => {
  return (
    <table className="table-auto w-full shadow-md">
      <thead>
        <tr className="bg-gray-100 text-left text-sm font-medium">
          <th className="px-6 py-3">Text</th>
          <th className="px-6 py-3">Page Title</th>
          <th className="px-6 py-3">Page URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-b hover:bg-gray-200">
            <td className="px-6 py-4">{item.text}</td>
            <td className="px-6 py-4">{item.websiteTitle}</td>
            <td className="px-6 py-4">
              <a href={item.websiteUrl} className="text-blue-500 underline">
                {item.websiteUrl}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
