import { supabase } from "./supabase";

export async function getIncomes() {
  const { data, error } = await supabase.from("Incomes").select("*");
  if (error) {
    throw new Error("Incomes could not be found");
  }
  return data;
}

export async function getExpenses() {
  const { data, error } = await supabase.from("Expenses").select("*");
  if (error) {
    throw new Error("Expenses could not be found");
  }
  return data;
}

export async function insertIncome(income) {
  const data = await supabase.from("Incomes").insert([income]);
  console.log(data);
  return data;
}

export async function insertExpense(expense) {
  const data = await supabase.from("Expenses").insert([expense]);
  console.log(data);
  return data;
}

export async function deleteIncome(id) {
  const { error, data } = await supabase.from("Incomes").delete().eq("id", id);
  if (error) {
    throw new Error("Unable to delete Income Row");
  }
  return data;
}

export async function deleteExpense(id) {
  const { error, data } = await supabase.from("Expenses").delete().eq("id", id);
  if (error) {
    throw new Error("Unable to delete Expense Row");
  }
  return data;
}
