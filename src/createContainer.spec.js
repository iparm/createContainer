import renderer from "react-test-renderer"
import React from "react"
import { createContainer } from "./createContainer"

test("error when called with empy args", () => {
  expect(() => createContainer()).toThrow(
    "createContainer should not be called with emtpy arguments",
  )
})

test("empty enhancers", () => {
  const MockComponent = () => <h1>hello</h1>
  const MockContainer = createContainer(MockComponent)
  const component = renderer.create(<MockContainer />)
  const tree = component.toJSON()
  expect(tree.children).toEqual(["hello"])
})

test("aplly enhancers to the wrapped component", () => {
  const MockComponent = ({ title }) => <h1>{title}</h1>
  const withTitle = c => () => <c title="Hello there" />
  const MockContainer = createContainer(withTitle, MockComponent)
  const component = renderer.create(<MockContainer />)
  const tree = component.toJSON()

  expect(tree.props.title).toEqual("Hello there")
})
