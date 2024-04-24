import { LuLoader2 } from "react-icons/lu";

export default function Home({ items, loading}) {


    return (
        <div>
            <div className={loading ? "flex gap-2 min-h-96 h-full overflow-auto p-2" : "grid grid-cols-3 gap-2 min-h-96  h-full overflow-auto p-2"}>
                {loading ? <LuLoader2 className="animate-spin" /> : items.map((item, index) => (
                    <div key={index} className="border-slate-600 border-[1px] p-4 rounded-[4px] hover:bg-slate-800 cursor-pointer h-full items-center justify-center flex">{item}</div>
                ))}
        
            </div>
        </div>
    );
}
