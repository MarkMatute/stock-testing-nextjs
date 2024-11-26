/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { NewsTopics } from "../models/news";

interface ButtonNewsFilterProps {
  handleFilter: (params: { tickers: string, topics: string[] }) => void;
}

export default function ButtonNewsFilter(props: ButtonNewsFilterProps) {
  const { handleFilter } = props;

  const [tickers, setTickers] = useState<string>("");
  const [topics, setTopics] = useState<string[]>([]);

  function handleSubmit(e: any) {
    e.preventDefault();
    handleFilter({ tickers, topics });
    (document?.getElementById("close-filter-modal") as any)?.click();
  }

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() =>
          (document?.getElementById("my_modal_3") as any)?.showModal()
        }
      >
        Filter
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" id="close-filter-modal">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Filters</h3>

          <form onSubmit={handleSubmit}>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Tickers</span>
              </div>
              <input
                type="text"
                placeholder="AAPL, TSLA, AMZN"
                className="input input-bordered w-full max-w-xs"
                value={tickers}
                onChange={(e) => setTickers(e.target.value)}
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Topics</span>
              </div>
              <select
                className="select select-bordered w-full"
                multiple
                onChange={(e) =>
                  setTopics(
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  )
                }
                value={topics}
              >
                {NewsTopics.map((ticker) => (
                  <option key={ticker.value} value={ticker.value}>
                    {ticker.label}
                  </option>
                ))}
              </select>
            </label>

            <button className="btn btn-primary w-full mt-4" type="submit">
              Filter
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
