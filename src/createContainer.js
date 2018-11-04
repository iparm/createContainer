import { compose, wrapDisplayName } from "recompose"
import invariant from "invariant"

export const createContainer = (...args) => {
  invariant(
    args.length !== 0,
    "createContainer should not be called with emtpy arguments",
  )

  const enhancers = args.length > 1 ? args.slice(0, -1) : []
  const component = args[args.length - 1]
  const withEnhancers = compose(...enhancers)
  const container = withEnhancers(component)
  const displayName = `${component.displayName || component.name}Container`
  container.displayName = wrapDisplayName(container, displayName)
  return container
}
