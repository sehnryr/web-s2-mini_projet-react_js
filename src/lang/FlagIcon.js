import * as React from "react"
import { CustomFlagIconFactory } from "react-flag-icon-css"
import { codes } from './custom-flags'

const options = { useCssModules: false, customCodes: codes }
const FlagIcon = CustomFlagIconFactory(React, options)

export default FlagIcon