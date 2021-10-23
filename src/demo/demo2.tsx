import React from "react"


const store = {}

const com = {}


const setInitValue = (value) => {
  Object.entries(value).forEach(([k, val]) => {
    store[k] = val
  })
}
const setValue = (name, value) => {
  store[name] = value
}

const Warp = (props) => {
  const { name } = props
  const [state, setState] = React.useState(store[name]);
  const warpRef = React.useRef({})

  const onChange = (e) => {
    const va = e.target.value;
    console.log(2222)
    setValue(name, va)
    setState(va)
  }
  warpRef.current["onVerification"] = () => {
    console.log(name, "必填", state)
  }

  React.useEffect(() => {
    com[name] = warpRef.current
  }, [])

  return (<div>
    <input value={state || ""} onChange={onChange} />
  </div>)
}



export default () => {
  console.log("最外层")
  setInitValue({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  })
  const onOk = () => {
    Object.entries(com).forEach(([key, item]) => {
      console.log(key, store[key], typeof store[key])
      if (store[key] === undefined || store[key] === null || store[key] === "") {
        if (item && typeof item["onVerification"] === "function") {
          item.onVerification();
        }
      }
    })
  }



  return <React.Fragment>
    <Warp name="a" />
    <Warp name="b" />
    <Warp name="c" />
    <Warp name="d" />
    <Warp name="e" />
    <button onClick={onOk} >校验</button>
  </React.Fragment>
}


