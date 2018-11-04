import { Title } from "./Title"
import { createContainer } from "../../../../src/createContainer"
import { withProps } from "recompose"

const withText = withProps({ text: "Hello container" })

export const TitleContainer = createContainer(withText, Title)
