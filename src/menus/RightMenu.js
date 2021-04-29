import React, { useState } from "react"
import { 
    IconButton, 
    SwipeableDrawer, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText 
} from "@material-ui/core"
import { Language } from "@material-ui/icons"
import FlagIcon from "../lang/FlagIcon"

function RightMenu(props) {

    const anchor = "right"
    const t = props.useTranslation()
    const languages = Object.keys(props.languages)
    const currentLanguage = props.currentLanguage

    const [ state, setState ] = useState({
        right: false
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                { languages.map((code) => {
                        const languageTranslation = t("languages." + code)
                        const flagCode = props.languages[code]["code"]
                        return (
                            <ListItem 
                                button 
                                selected={ currentLanguage === code }
                                onClick={ () => { props.setLanguage(code) } }
                            >
                                <ListItemIcon><FlagIcon code={ flagCode } /></ListItemIcon>
                                <ListItemText primary={ languageTranslation } />
                            </ListItem>
                        )
                }) }
            </List>
        </div>
      );

    return (
        <React.Fragment>
            <IconButton onClick={toggleDrawer(anchor, true)}>
                <Language />
            </IconButton>
            <SwipeableDrawer
                anchor={ anchor }
                open={ state[anchor] }
                onClose={ toggleDrawer(anchor, false) }
                onOpen={ toggleDrawer(anchor, true) }
            >
                { list }
            </SwipeableDrawer>
        </React.Fragment>
    )
}

export default RightMenu