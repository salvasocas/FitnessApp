import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/AppContext";
import type { FoodEntry, FormData } from "../types";
import Card from "../components/ui/Card";
import { quickActivitiesFoodLog } from "../assets/assets";
import Button from "../components/ui/Button";
import { PlusIcon, SparkleIcon } from "lucide-react";

const FoodLog = () => {
  const { allFoodLogs, setAllFoodLogs } = useAppContext();

  const [entries, setEntries] = useState<FoodEntry[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    calories: 0,
    mealType: "",
  });
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const today = new Date().toISOString().split("T")[0];

  const loadEntries = () => {
    const todayEntries = allFoodLogs.filter(
      (e: FoodEntry) => e.createdAt?.split("T")[0] === today,
    );
    setEntries(todayEntries);
  };

  const totalCalories = entries.reduce(
    (total, entry) => total + entry.calories,
    0,
  );

  const handleQuickAdd = (activityName: string) => {
    setFormData({ ...formData, mealType: activityName });
    setShowForm(true);
  };

  useEffect(() => {
    loadEntries();
  }, [allFoodLogs]);

  return (
    <div className="page-container">
      {/* Header */}
      <div className="page-header">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              Food Log
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              Track your daily intake
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500">Today's Total</p>
            <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
              {totalCalories} kcal
            </p>
          </div>
        </div>
      </div>

      <div className="page-content-grid">
        {/* Quick Add Section */}
        {!showForm && (
          <div className="space-y-4">
            <Card>
              <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">
                Quick Add
              </h3>
              <div className="flex flex-wrap gap-2">
                {quickActivitiesFoodLog.map((item) => (
                  <button
                    onClick={() => handleQuickAdd(item.name)}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors"
                    key={item.name}
                  >
                    {item.emoji} {item.name}
                  </button>
                ))}
              </div>
            </Card>

            <Button className="w-full" onClick={() => setShowForm(true)}>
              <PlusIcon className="size-5" />
              Add Food Entry
            </Button>

            <Button
              className="w-full"
              onClick={() => inputRef.current?.click()}
            >
              <SparkleIcon className="size-5" />
              AI Food Snap
            </Button>
            <input type="file" accept="image/*" hidden ref={inputRef} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodLog;
