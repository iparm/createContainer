import {
  compose,
  setPropTypes,
  mapProps,
  withHandlers,
  withState,
} from "recompose"
import PropTypes from "prop-types"

import { Button } from "./Button"
import { createContainer } from "../../../../src/createContainer"

const withClickCounter = compose(
  withState("counter", "increment", 0),
  withHandlers({
    onClick: props => event => {
      props.increment(props.counter + 1)
    },
  }),
)

const mapCounterToLabel = compose(
  setPropTypes({ counter: PropTypes.number.isRequired }),
  mapProps(({ counter, ...rest }) => ({
    ...rest,
    label: `You have clicked me ${counter} times `,
  })),
)
export const ButtonContainer = createContainer(
  withClickCounter,
  mapCounterToLabel,
  Button,
)
