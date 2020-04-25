var root = document.body

m.render(root, [
m("h1", "1 + 2 ="),
m("table", 
  Array(2).fill(m("tr",
    Array(5).fill(m("td",  {class: "p-1"}, m("button", {class: "bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-3 px-5 rounded"}, "2")))
  ))
)])