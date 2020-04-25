var root = document.body

const probgen = () => {
  let ans = Math.floor(Math.random() * 10) + 1
  let a = Math.floor(Math.random() * (ans + 1))
  return {a: a, b: ans - a, ans: ans}
}

var prob = probgen()
var msg = ""
var dis = []

const numclick = (num, ans) => {
  if (num == ans) {
    prob = probgen()
    msg = msg == "☹️" ? "😃" : msg + "😃"
    dis = []
  } else {
    msg = "☹️"
    dis.push(num)
  }
}

var Game = {
  view: () => {
    return m("div", [
      m("p", {class: "text-5xl font-bold my-4"}, prob.a + " + " + prob.b + " = __"),
      m("table", {class: "self-center mx-auto my-4"},  
        [0,1].map(row => m("tr",
          [0,1,2,3,4].map(col => m("td",  {class: "p-1"}, m("button", {onclick: () => numclick(row*5 + col + 1, prob.ans), class: dis.includes(row*5 + col + 1) ? "bg-red-500 hover:bg-red-700 text-white font-bold text-3xl w-16 h-12 rounded" : "bg-blue-500 hover:bg-blue-700 text-white font-bold text-3xl w-16 h-12 rounded"}, dis.includes(row*5 + col + 1) ? "X" : row*5 + col + 1)))
        ))
      ),
      m("p", {class: "text-6xl"}, msg)
    ])
  }
}

m.mount(root, Game)