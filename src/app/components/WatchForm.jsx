import { addWatch } from "../server-actions/addWatch";

export default function WatchForm() {
  return (
    <form action={addWatch} className="mb-6">
      <div className="mb-4">
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          id="brand"
          name="brand"
          required
          className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="model">Model</label>
        <input
          type="text"
          id="model"
          name="model"
          required
          className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="referenceNumber">Reference Number</label>
        <input
          type="text"
          id="referenceNumber"
          name="referenceNumber"
          required
          className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-gray-600 hover-bg-gray-300 text-white hover:text-black rounded w-full"
      >
        Add Watch
      </button>
    </form>
  );
}
