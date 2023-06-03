
# Theme

Provider for `AmauiTheme` instance value.

### Use

- You can simply provide values as an object of `AmauiTheme` allowed values.
- If you want your own instance of `AmauiTheme`, you can provide it as a value to the provider.
- All of the `AmauiStyle` classes are also re-exported from this library, but you can import them directly from `@amaui/style` library as well.

```tsx
import { Theme, AmauiTheme } from '@amaui/style-react';

const App = () => {
  const value = React.useMemo(() => {
    return {
      palette: {
        light: true
      }
    };
  });

  return (
    <Theme
      value={value}
    >
      ...
    </Theme>
  );
};
```

or provide your own instance.

```tsx
import { Theme, AmauiTheme } from '@amaui/style-react';

const App = () => {
  const amauiTheme = React.useMemo(() => {
    const instance = new AmauiTheme({
      palette: {
        light: true
      }
    });

    return instance;
  });

  return (
    <Theme
      value={amauiTheme}
    >
      ...
    </Theme>
  );
};
```

### Update

- You can update the `AmauiTheme` by providing new values to it, but, updating it as an instance reference won't trigger the rerender.
- You can use new injected method `updateWithRerender` to update it, while triggering the rerender.
- On `updateWithRerender` new instance of `AmauiTheme` is made, and provided values in this method, are merged with values of the previous `AmauiTheme` instance, as new properties for the new instance.

```tsx
import { Theme, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

const Button = props => {
  // useAmauiTheme (useContext) retrieves
  // the nearest Theme value
  const amauiTheme = useAmauiTheme();

  const onSwitchLight = React.useCallback(() => {
    amauiTheme.updateWithRerender({
      palette: {
        light: !amauiTheme.palette.light
      }
    });
  }, []);

  return (
    <button
      onClick={onSwitchLight}

      {...props}
    >
      {!amauiTheme.palette.light ? 'Light' : 'Dark} theme
    </button>
  );
};

const App = () => {
  const value = React.useMemo(() => {
    return {
      palette: {
        light: true
      }
    };
  });

  return (
    <Theme
      value={value}
    >
      <Button />
    </Theme>
  );
};
```

### Other

#### addCssVariables

Adds all theme important properties as CSS variables into the DOM, by default it's true.

```tsx
import { Theme, AmauiTheme } from '@amaui/style-react';

const App = () => {
  const value = React.useMemo(() => {
    return {
      palette: {
        light: true
      }
    };
  });

  return (
    <Theme
      value={value}

      addCssVariables
    >
      ...
    </Theme>
  );
};
```

#### AmauiTheme values

```ts
{
  "element": ...,
  "subscriptions": ...,
  "direction": "ltr",
  "preference": {
    "background": {
      "default": "neutral"
    },
    "text": {
      "default": "neutral"
    },
    "shadow": {
      "default": "neutral"
    },
    "visual_contrast": {
      "default": "regular"
    }
  },
  "mode": "regular",
  "palette": {
    "light": true,
    "accessibility": "regular",
    "visual_contrast": {
      "low": {
        "opacity": {
          "primary": 0.77,
          "secondary": 0.44,
          "tertiary": 0.27,
          "quaternary": 0.14,
          "divider": 0.11,
          "active": 0.44,
          "disabled": 0.34,
          "drag": 0.27,
          "press": 0.21,
          "focus": 0.17,
          "selected": 0.14,
          "hover": 0.07
        },
        "contrast_threshold": 2.4
      },
      "regular": {
        "opacity": {
          "primary": 0.87,
          "secondary": 0.54,
          "tertiary": 0.37,
          "quaternary": 0.24,
          "divider": 0.14,
          "active": 0.54,
          "disabled": 0.37,
          "drag": 0.31,
          "press": 0.27,
          "focus": 0.21,
          "selected": 0.17,
          "hover": 0.1
        },
        "contrast_threshold": 3
      },
      "high": {
        "opacity": {
          "primary": 1,
          "secondary": 0.74,
          "tertiary": 0.57,
          "quaternary": 0.44,
          "divider": 0.24,
          "active": 0.74,
          "disabled": 0.57,
          "drag": 0.37,
          "press": 0.31,
          "focus": 0.24,
          "selected": 0.21,
          "hover": 0.14
        },
        "contrast_threshold": 4
      },
      "default": {
        "opacity": {
          "primary": 0.87,
          "secondary": 0.54,
          "tertiary": 0.37,
          "quaternary": 0.24,
          "divider": 0.14,
          "active": 0.54,
          "disabled": 0.37,
          "drag": 0.31,
          "press": 0.27,
          "focus": 0.21,
          "selected": 0.17,
          "hover": 0.1
        },
        "contrast_threshold": 3
      }
    },
    "color": {
      "primary": {
        "0": "rgb(0, 0, 0)",
        "1": "rgb(5, 5, 0)",
        "5": "rgb(26, 23, 0)",
        "10": "rgb(51, 46, 0)",
        "20": "rgb(102, 92, 0)",
        "30": "rgb(153, 138, 0)",
        "40": "rgb(204, 184, 0)",
        "50": "rgb(255, 230, 0)",
        "60": "rgb(255, 235, 51)",
        "70": "rgb(255, 240, 102)",
        "80": "rgb(255, 245, 153)",
        "90": "rgb(255, 250, 204)",
        "95": "rgb(255, 252, 229)",
        "99": "rgb(255, 254, 250)",
        "100": "rgb(255, 255, 255)",
        "main": "#FFEB3B",
        "light": "#FFF176",
        "dark": "#FBC02D"
      },
      "secondary": {
        "0": "rgb(0, 0, 0)",
        "1": "rgb(3, 4, 1)",
        "5": "rgb(13, 19, 6)",
        "10": "rgb(26, 38, 13)",
        "20": "rgb(53, 77, 26)",
        "30": "rgb(79, 115, 38)",
        "40": "rgb(105, 153, 51)",
        "50": "rgb(132, 191, 64)",
        "60": "rgb(156, 204, 102)",
        "70": "rgb(181, 217, 140)",
        "80": "rgb(206, 230, 179)",
        "90": "rgb(230, 242, 217)",
        "95": "rgb(243, 249, 236)",
        "99": "rgb(253, 254, 251)",
        "100": "rgb(255, 255, 255)",
        "main": "#8BC34A",
        "light": "#AED581",
        "dark": "#689F38"
      },
      "tertiary": {
        "0": "rgb(0, 0, 0)",
        "1": "rgb(5, 4, 0)",
        "5": "rgb(26, 19, 0)",
        "10": "rgb(51, 38, 0)",
        "20": "rgb(102, 77, 0)",
        "30": "rgb(153, 115, 0)",
        "40": "rgb(204, 153, 0)",
        "50": "rgb(255, 191, 0)",
        "60": "rgb(255, 204, 51)",
        "70": "rgb(255, 217, 102)",
        "80": "rgb(255, 230, 153)",
        "90": "rgb(255, 242, 204)",
        "95": "rgb(255, 249, 229)",
        "99": "rgb(255, 254, 250)",
        "100": "rgb(255, 255, 255)",
        "main": "#FFC107",
        "light": "#FFD54F",
        "dark": "#FFA000"
      },
      "quaternary": {
        "0": "rgb(0, 0, 0)",
        "1": "rgb(0, 5, 5)",
        "5": "rgb(0, 23, 26)",
        "10": "rgb(0, 45, 51)",
        "20": "rgb(0, 90, 102)",
        "30": "rgb(0, 135, 153)",
        "40": "rgb(0, 180, 204)",
        "50": "rgb(0, 225, 255)",
        "60": "rgb(51, 231, 255)",
        "70": "rgb(102, 237, 255)",
        "80": "rgb(153, 243, 255)",
        "90": "rgb(204, 249, 255)",
        "95": "rgb(229, 252, 255)",
        "99": "rgb(250, 254, 255)",
        "100": "rgb(255, 255, 255)",
        "main": "#00BCD4",
        "light": "#4DD0E1",
        "dark": "#0097A7"
      },
      "info": {
        "0": "rgb(0, 0, 0)",
        "1": "rgb(0, 3, 5)",
        "5": "rgb(0, 17, 25)",
        "10": "rgb(1, 35, 50)",
        "20": "rgb(1, 69, 101)",
        "30": "rgb(2, 104, 151)",
        "40": "rgb(2, 139, 202)",
        "50": "rgb(3, 173, 252)",
        "60": "rgb(53, 190, 253)",
        "70": "rgb(104, 206, 253)",
        "80": "rgb(154, 222, 254)",
        "90": "rgb(205, 239, 254)",
        "95": "rgb(230, 247, 255)",
        "99": "rgb(250, 253, 255)",
        "100": "rgb(255, 255, 255)",
        "main": "#03A9F4",
        "light": "#4FC3F7",
        "dark": "#0288D1"
      },
      "success": {
        "0": "rgb(0, 0, 0)",
        "1": "rgb(2, 4, 2)",
        "5": "rgb(8, 18, 8)",
        "10": "rgb(16, 35, 16)",
        "20": "rgb(31, 71, 32)",
        "30": "rgb(47, 106, 49)",
        "40": "rgb(62, 142, 65)",
        "50": "rgb(78, 177, 81)",
        "60": "rgb(113, 193, 116)",
        "70": "rgb(149, 208, 151)",
        "80": "rgb(184, 224, 185)",
        "90": "rgb(220, 239, 220)",
        "95": "rgb(237, 247, 238)",
        "99": "rgb(251, 253, 252)",
        "100": "rgb(255, 255, 255)",
        "main": "#4CAF50",
        "light": "#81C784",
        "dark": "#388E3C"
      },
      "warning": {
        "0": "rgb(0, 0, 0)",
        "1": "rgb(5, 3, 0)",
        "5": "rgb(26, 15, 0)",
        "10": "rgb(51, 31, 0)",
        "20": "rgb(102, 61, 0)",
        "30": "rgb(153, 92, 0)",
        "40": "rgb(204, 122, 0)",
        "50": "rgb(255, 153, 0)",
        "60": "rgb(255, 173, 51)",
        "70": "rgb(255, 194, 102)",
        "80": "rgb(255, 214, 153)",
        "90": "rgb(255, 235, 204)",
        "95": "rgb(255, 245, 229)",
        "99": "rgb(255, 253, 250)",
        "100": "rgb(255, 255, 255)",
        "main": "#FF9800",
        "light": "#FFB74D",
        "dark": "#F57C00"
      },
      "error": {
        "0": "rgb(0, 0, 0)",
        "1": "rgb(5, 1, 0)",
        "5": "rgb(26, 6, 0)",
        "10": "rgb(51, 12, 0)",
        "20": "rgb(102, 24, 0)",
        "30": "rgb(153, 36, 0)",
        "40": "rgb(204, 48, 0)",
        "50": "rgb(255, 60, 0)",
        "60": "rgb(255, 99, 51)",
        "70": "rgb(255, 138, 102)",
        "80": "rgb(255, 177, 153)",
        "90": "rgb(255, 216, 204)",
        "95": "rgb(255, 235, 229)",
        "99": "rgb(255, 251, 250)",
        "100": "rgb(255, 255, 255)",
        "main": "#FF5722",
        "light": "#FF8A65",
        "dark": "#E64A19"
      },
      "neutral": {
        "0": "rgb(0, 0, 0)",
        "1": "rgb(3, 3, 3)",
        "5": "rgb(13, 13, 13)",
        "10": "rgb(26, 26, 26)",
        "20": "rgb(51, 51, 51)",
        "30": "rgb(77, 77, 77)",
        "40": "rgb(102, 102, 102)",
        "50": "rgb(128, 128, 128)",
        "60": "rgb(153, 153, 153)",
        "70": "rgb(179, 179, 179)",
        "80": "rgb(204, 204, 204)",
        "90": "rgb(230, 230, 230)",
        "95": "rgb(242, 242, 242)",
        "99": "rgb(252, 252, 252)",
        "100": "rgb(255, 255, 255)",
        "main": "#000000",
        "light": "rgb(26, 26, 26)",
        "dark": "rgb(26, 26, 26)"
      }
    },
    "text": {
      "primary": {
        "primary": "rgba(153, 138, 0, 0.87)",
        "secondary": "rgba(153, 138, 0, 0.54)",
        "tertiary": "rgba(153, 138, 0, 0.37)",
        "quaternary": "rgba(153, 138, 0, 0.24)"
      },
      "secondary": {
        "primary": "rgba(79, 115, 38, 0.87)",
        "secondary": "rgba(79, 115, 38, 0.54)",
        "tertiary": "rgba(79, 115, 38, 0.37)",
        "quaternary": "rgba(79, 115, 38, 0.24)"
      },
      "tertiary": {
        "primary": "rgba(153, 115, 0, 0.87)",
        "secondary": "rgba(153, 115, 0, 0.54)",
        "tertiary": "rgba(153, 115, 0, 0.37)",
        "quaternary": "rgba(153, 115, 0, 0.24)"
      },
      "quaternary": {
        "primary": "rgba(0, 135, 153, 0.87)",
        "secondary": "rgba(0, 135, 153, 0.54)",
        "tertiary": "rgba(0, 135, 153, 0.37)",
        "quaternary": "rgba(0, 135, 153, 0.24)"
      },
      "info": {
        "primary": "rgba(2, 104, 151, 0.87)",
        "secondary": "rgba(2, 104, 151, 0.54)",
        "tertiary": "rgba(2, 104, 151, 0.37)",
        "quaternary": "rgba(2, 104, 151, 0.24)"
      },
      "success": {
        "primary": "rgba(47, 106, 49, 0.87)",
        "secondary": "rgba(47, 106, 49, 0.54)",
        "tertiary": "rgba(47, 106, 49, 0.37)",
        "quaternary": "rgba(47, 106, 49, 0.24)"
      },
      "warning": {
        "primary": "rgba(153, 92, 0, 0.87)",
        "secondary": "rgba(153, 92, 0, 0.54)",
        "tertiary": "rgba(153, 92, 0, 0.37)",
        "quaternary": "rgba(153, 92, 0, 0.24)"
      },
      "error": {
        "primary": "rgba(153, 36, 0, 0.87)",
        "secondary": "rgba(153, 36, 0, 0.54)",
        "tertiary": "rgba(153, 36, 0, 0.37)",
        "quaternary": "rgba(153, 36, 0, 0.24)"
      },
      "neutral": {
        "primary": "rgba(0, 0, 0, 0.87)",
        "secondary": "rgba(0, 0, 0, 0.54)",
        "tertiary": "rgba(0, 0, 0, 0.37)",
        "quaternary": "rgba(0, 0, 0, 0.24)"
      },
      "light": {
        "primary": "rgba(255, 255, 255, 0.87)",
        "secondary": "rgba(255, 255, 255, 0.54)",
        "tertiary": "rgba(255, 255, 255, 0.37)",
        "quaternary": "rgba(255, 255, 255, 0.24)"
      },
      "dark": {
        "primary": "rgba(0, 0, 0, 0.87)",
        "secondary": "rgba(0, 0, 0, 0.54)",
        "tertiary": "rgba(0, 0, 0, 0.37)",
        "quaternary": "rgba(0, 0, 0, 0.24)"
      },
      "default": {
        "primary": "rgba(0, 0, 0, 0.87)",
        "secondary": "rgba(0, 0, 0, 0.54)",
        "tertiary": "rgba(0, 0, 0, 0.37)",
        "quaternary": "rgba(0, 0, 0, 0.24)"
      },
      "divider": "rgba(0, 0, 0, 0.14)",
      "active": "rgba(0, 0, 0, 0.54)",
      "hover": "rgba(0, 0, 0, 0.1)",
      "selected": "rgba(0, 0, 0, 0.17)",
      "focus": "rgba(0, 0, 0, 0.21)",
      "disabled": "rgba(0, 0, 0, 0.37)"
    },
    "background": {
      "primary": {
        "primary": "rgb(255, 255, 255)",
        "secondary": "rgb(255, 254, 250)",
        "tertiary": "rgb(255, 252, 229)",
        "quaternary": "rgb(255, 250, 204)"
      },
      "secondary": {
        "primary": "rgb(255, 255, 255)",
        "secondary": "rgb(253, 254, 251)",
        "tertiary": "rgb(243, 249, 236)",
        "quaternary": "rgb(230, 242, 217)"
      },
      "tertiary": {
        "primary": "rgb(255, 255, 255)",
        "secondary": "rgb(255, 254, 250)",
        "tertiary": "rgb(255, 249, 229)",
        "quaternary": "rgb(255, 242, 204)"
      },
      "quaternary": {
        "primary": "rgb(255, 255, 255)",
        "secondary": "rgb(250, 254, 255)",
        "tertiary": "rgb(229, 252, 255)",
        "quaternary": "rgb(204, 249, 255)"
      },
      "info": {
        "primary": "rgb(255, 255, 255)",
        "secondary": "rgb(250, 253, 255)",
        "tertiary": "rgb(230, 247, 255)",
        "quaternary": "rgb(205, 239, 254)"
      },
      "success": {
        "primary": "rgb(255, 255, 255)",
        "secondary": "rgb(251, 253, 252)",
        "tertiary": "rgb(237, 247, 238)",
        "quaternary": "rgb(220, 239, 220)"
      },
      "warning": {
        "primary": "rgb(255, 255, 255)",
        "secondary": "rgb(255, 253, 250)",
        "tertiary": "rgb(255, 245, 229)",
        "quaternary": "rgb(255, 235, 204)"
      },
      "error": {
        "primary": "rgb(255, 255, 255)",
        "secondary": "rgb(255, 251, 250)",
        "tertiary": "rgb(255, 235, 229)",
        "quaternary": "rgb(255, 216, 204)"
      },
      "neutral": {
        "primary": "rgb(255, 255, 255)",
        "secondary": "rgb(252, 252, 252)",
        "tertiary": "rgb(242, 242, 242)",
        "quaternary": "rgb(230, 230, 230)"
      },
      "light": {
        "primary": "rgb(255, 255, 255)",
        "secondary": "rgb(252, 252, 252)",
        "tertiary": "rgb(242, 242, 242)",
        "quaternary": "rgb(230, 230, 230)"
      },
      "dark": {
        "primary": "rgb(0, 0, 0)",
        "secondary": "rgb(3, 3, 3)",
        "tertiary": "rgb(13, 13, 13)",
        "quaternary": "rgb(26, 26, 26)"
      },
      "default": {
        "primary": "rgb(255, 255, 255)",
        "secondary": "rgb(252, 252, 252)",
        "tertiary": "rgb(242, 242, 242)",
        "quaternary": "rgb(230, 230, 230)"
      }
    }
  },
  "shape": {
    "radius": {
      "values": {
        "xxs": 0.25,
        "xs": 0.5,
        "sm": 1,
        "rg": 2,
        "md": 3,
        "lg": 4,
        "xl": 5,
        "xxl": 7
      },
      "unit": 8
    }
  },
  "breakpoints": {
    "values": {
      "xs": 0,
      "sm": 600,
      "md": 1240,
      "lg": 1440,
      "xl": 1920
    },
    "media": {
      "xs": "(max-width: 599px)",
      "sm": "(min-width: 600px) and (max-width: 1239px)",
      "md": "(min-width: 1240px) and (max-width: 1439px)",
      "lg": "(min-width: 1440px) and (max-width: 1919px)",
      "xl": "(min-width: 1920px)"
    },
    "unit": "px"
  },
  "space": {
    "values": {
      "xxs": 0.25,
      "xs": 0.5,
      "sm": 1,
      "rg": 2,
      "md": 3,
      "lg": 4,
      "xl": 5,
      "xxl": 6,
      "xxxl": 7
    },
    "unit": 8
  },
  "shadows": {
    "values": {
      "primary": {
        "0": "none",
        "1": "0px 1px 1px 0px rgba(255, 235, 59, 0.04), 0px 2px 1px -1px rgba(255, 235, 59, 0.01), 0px 1px 3px 0px rgba(255, 235, 59, 0.07)",
        "2": "0px 2px 2px 0px rgba(255, 235, 59, 0.04), 0px 3px 3px -2px rgba(255, 235, 59, 0.01), 0px 1px 8px 0px rgba(255, 235, 59, 0.07)",
        "3": "0px 3px 4px 0px rgba(255, 235, 59, 0.04), 0px 3px 3px -2px rgba(255, 235, 59, 0.01), 0px 1px 8px 0px rgba(255, 235, 59, 0.07)",
        "4": "0px 4px 5px 0px rgba(255, 235, 59, 0.04), 0px 1px 10px 0px rgba(255, 235, 59, 0.01), 0px 2px 4px -1px rgba(255, 235, 59, 0.07)",
        "6": "0px 6px 10px 0px rgba(255, 235, 59, 0.04), 0px 1px 18px 0px rgba(255, 235, 59, 0.01), 0px 3px 5px -1px rgba(255, 235, 59, 0.07)",
        "8": "0px 8px 10px 1px rgba(255, 235, 59, 0.04), 0px 3px 14px 2px rgba(255, 235, 59, 0.01), 0px 5px 5px -3px rgba(255, 235, 59, 0.07)",
        "9": "0px 9px 12px 1px rgba(255, 235, 59, 0.04), 0px 3px 16px 2px rgba(255, 235, 59, 0.01), 0px 5px 6px -3px rgba(255, 235, 59, 0.07)",
        "12": "0px 12px 17px 2px rgba(255, 235, 59, 0.04), 0px 5px 22px 4px rgba(255, 235, 59, 0.01), 0px 7px 7px -4px rgba(255, 235, 59, 0.07)",
        "16": "0px 16px 24px 2px rgba(255, 235, 59, 0.04), 0px 6px 30px 5px rgba(255, 235, 59, 0.01), 0px 8px 10px -5px rgba(255, 235, 59, 0.07)",
        "24": "0px 24px 37px 3px rgba(255, 235, 59, 0.04), 0px 9px 46px 8px rgba(255, 235, 59, 0.01), 0px 11px 15px -7px rgba(255, 235, 59, 0.07)"
      },
      "secondary": {
        "0": "none",
        "1": "0px 1px 1px 0px rgba(139, 195, 74, 0.04), 0px 2px 1px -1px rgba(139, 195, 74, 0.01), 0px 1px 3px 0px rgba(139, 195, 74, 0.07)",
        "2": "0px 2px 2px 0px rgba(139, 195, 74, 0.04), 0px 3px 3px -2px rgba(139, 195, 74, 0.01), 0px 1px 8px 0px rgba(139, 195, 74, 0.07)",
        "3": "0px 3px 4px 0px rgba(139, 195, 74, 0.04), 0px 3px 3px -2px rgba(139, 195, 74, 0.01), 0px 1px 8px 0px rgba(139, 195, 74, 0.07)",
        "4": "0px 4px 5px 0px rgba(139, 195, 74, 0.04), 0px 1px 10px 0px rgba(139, 195, 74, 0.01), 0px 2px 4px -1px rgba(139, 195, 74, 0.07)",
        "6": "0px 6px 10px 0px rgba(139, 195, 74, 0.04), 0px 1px 18px 0px rgba(139, 195, 74, 0.01), 0px 3px 5px -1px rgba(139, 195, 74, 0.07)",
        "8": "0px 8px 10px 1px rgba(139, 195, 74, 0.04), 0px 3px 14px 2px rgba(139, 195, 74, 0.01), 0px 5px 5px -3px rgba(139, 195, 74, 0.07)",
        "9": "0px 9px 12px 1px rgba(139, 195, 74, 0.04), 0px 3px 16px 2px rgba(139, 195, 74, 0.01), 0px 5px 6px -3px rgba(139, 195, 74, 0.07)",
        "12": "0px 12px 17px 2px rgba(139, 195, 74, 0.04), 0px 5px 22px 4px rgba(139, 195, 74, 0.01), 0px 7px 7px -4px rgba(139, 195, 74, 0.07)",
        "16": "0px 16px 24px 2px rgba(139, 195, 74, 0.04), 0px 6px 30px 5px rgba(139, 195, 74, 0.01), 0px 8px 10px -5px rgba(139, 195, 74, 0.07)",
        "24": "0px 24px 37px 3px rgba(139, 195, 74, 0.04), 0px 9px 46px 8px rgba(139, 195, 74, 0.01), 0px 11px 15px -7px rgba(139, 195, 74, 0.07)"
      },
      "tertiary": {
        "0": "none",
        "1": "0px 1px 1px 0px rgba(255, 193, 7, 0.04), 0px 2px 1px -1px rgba(255, 193, 7, 0.01), 0px 1px 3px 0px rgba(255, 193, 7, 0.07)",
        "2": "0px 2px 2px 0px rgba(255, 193, 7, 0.04), 0px 3px 3px -2px rgba(255, 193, 7, 0.01), 0px 1px 8px 0px rgba(255, 193, 7, 0.07)",
        "3": "0px 3px 4px 0px rgba(255, 193, 7, 0.04), 0px 3px 3px -2px rgba(255, 193, 7, 0.01), 0px 1px 8px 0px rgba(255, 193, 7, 0.07)",
        "4": "0px 4px 5px 0px rgba(255, 193, 7, 0.04), 0px 1px 10px 0px rgba(255, 193, 7, 0.01), 0px 2px 4px -1px rgba(255, 193, 7, 0.07)",
        "6": "0px 6px 10px 0px rgba(255, 193, 7, 0.04), 0px 1px 18px 0px rgba(255, 193, 7, 0.01), 0px 3px 5px -1px rgba(255, 193, 7, 0.07)",
        "8": "0px 8px 10px 1px rgba(255, 193, 7, 0.04), 0px 3px 14px 2px rgba(255, 193, 7, 0.01), 0px 5px 5px -3px rgba(255, 193, 7, 0.07)",
        "9": "0px 9px 12px 1px rgba(255, 193, 7, 0.04), 0px 3px 16px 2px rgba(255, 193, 7, 0.01), 0px 5px 6px -3px rgba(255, 193, 7, 0.07)",
        "12": "0px 12px 17px 2px rgba(255, 193, 7, 0.04), 0px 5px 22px 4px rgba(255, 193, 7, 0.01), 0px 7px 7px -4px rgba(255, 193, 7, 0.07)",
        "16": "0px 16px 24px 2px rgba(255, 193, 7, 0.04), 0px 6px 30px 5px rgba(255, 193, 7, 0.01), 0px 8px 10px -5px rgba(255, 193, 7, 0.07)",
        "24": "0px 24px 37px 3px rgba(255, 193, 7, 0.04), 0px 9px 46px 8px rgba(255, 193, 7, 0.01), 0px 11px 15px -7px rgba(255, 193, 7, 0.07)"
      },
      "quaternary": {
        "0": "none",
        "1": "0px 1px 1px 0px rgba(0, 188, 212, 0.04), 0px 2px 1px -1px rgba(0, 188, 212, 0.01), 0px 1px 3px 0px rgba(0, 188, 212, 0.07)",
        "2": "0px 2px 2px 0px rgba(0, 188, 212, 0.04), 0px 3px 3px -2px rgba(0, 188, 212, 0.01), 0px 1px 8px 0px rgba(0, 188, 212, 0.07)",
        "3": "0px 3px 4px 0px rgba(0, 188, 212, 0.04), 0px 3px 3px -2px rgba(0, 188, 212, 0.01), 0px 1px 8px 0px rgba(0, 188, 212, 0.07)",
        "4": "0px 4px 5px 0px rgba(0, 188, 212, 0.04), 0px 1px 10px 0px rgba(0, 188, 212, 0.01), 0px 2px 4px -1px rgba(0, 188, 212, 0.07)",
        "6": "0px 6px 10px 0px rgba(0, 188, 212, 0.04), 0px 1px 18px 0px rgba(0, 188, 212, 0.01), 0px 3px 5px -1px rgba(0, 188, 212, 0.07)",
        "8": "0px 8px 10px 1px rgba(0, 188, 212, 0.04), 0px 3px 14px 2px rgba(0, 188, 212, 0.01), 0px 5px 5px -3px rgba(0, 188, 212, 0.07)",
        "9": "0px 9px 12px 1px rgba(0, 188, 212, 0.04), 0px 3px 16px 2px rgba(0, 188, 212, 0.01), 0px 5px 6px -3px rgba(0, 188, 212, 0.07)",
        "12": "0px 12px 17px 2px rgba(0, 188, 212, 0.04), 0px 5px 22px 4px rgba(0, 188, 212, 0.01), 0px 7px 7px -4px rgba(0, 188, 212, 0.07)",
        "16": "0px 16px 24px 2px rgba(0, 188, 212, 0.04), 0px 6px 30px 5px rgba(0, 188, 212, 0.01), 0px 8px 10px -5px rgba(0, 188, 212, 0.07)",
        "24": "0px 24px 37px 3px rgba(0, 188, 212, 0.04), 0px 9px 46px 8px rgba(0, 188, 212, 0.01), 0px 11px 15px -7px rgba(0, 188, 212, 0.07)"
      },
      "info": {
        "0": "none",
        "1": "0px 1px 1px 0px rgba(3, 169, 244, 0.04), 0px 2px 1px -1px rgba(3, 169, 244, 0.01), 0px 1px 3px 0px rgba(3, 169, 244, 0.07)",
        "2": "0px 2px 2px 0px rgba(3, 169, 244, 0.04), 0px 3px 3px -2px rgba(3, 169, 244, 0.01), 0px 1px 8px 0px rgba(3, 169, 244, 0.07)",
        "3": "0px 3px 4px 0px rgba(3, 169, 244, 0.04), 0px 3px 3px -2px rgba(3, 169, 244, 0.01), 0px 1px 8px 0px rgba(3, 169, 244, 0.07)",
        "4": "0px 4px 5px 0px rgba(3, 169, 244, 0.04), 0px 1px 10px 0px rgba(3, 169, 244, 0.01), 0px 2px 4px -1px rgba(3, 169, 244, 0.07)",
        "6": "0px 6px 10px 0px rgba(3, 169, 244, 0.04), 0px 1px 18px 0px rgba(3, 169, 244, 0.01), 0px 3px 5px -1px rgba(3, 169, 244, 0.07)",
        "8": "0px 8px 10px 1px rgba(3, 169, 244, 0.04), 0px 3px 14px 2px rgba(3, 169, 244, 0.01), 0px 5px 5px -3px rgba(3, 169, 244, 0.07)",
        "9": "0px 9px 12px 1px rgba(3, 169, 244, 0.04), 0px 3px 16px 2px rgba(3, 169, 244, 0.01), 0px 5px 6px -3px rgba(3, 169, 244, 0.07)",
        "12": "0px 12px 17px 2px rgba(3, 169, 244, 0.04), 0px 5px 22px 4px rgba(3, 169, 244, 0.01), 0px 7px 7px -4px rgba(3, 169, 244, 0.07)",
        "16": "0px 16px 24px 2px rgba(3, 169, 244, 0.04), 0px 6px 30px 5px rgba(3, 169, 244, 0.01), 0px 8px 10px -5px rgba(3, 169, 244, 0.07)",
        "24": "0px 24px 37px 3px rgba(3, 169, 244, 0.04), 0px 9px 46px 8px rgba(3, 169, 244, 0.01), 0px 11px 15px -7px rgba(3, 169, 244, 0.07)"
      },
      "success": {
        "0": "none",
        "1": "0px 1px 1px 0px rgba(76, 175, 80, 0.04), 0px 2px 1px -1px rgba(76, 175, 80, 0.01), 0px 1px 3px 0px rgba(76, 175, 80, 0.07)",
        "2": "0px 2px 2px 0px rgba(76, 175, 80, 0.04), 0px 3px 3px -2px rgba(76, 175, 80, 0.01), 0px 1px 8px 0px rgba(76, 175, 80, 0.07)",
        "3": "0px 3px 4px 0px rgba(76, 175, 80, 0.04), 0px 3px 3px -2px rgba(76, 175, 80, 0.01), 0px 1px 8px 0px rgba(76, 175, 80, 0.07)",
        "4": "0px 4px 5px 0px rgba(76, 175, 80, 0.04), 0px 1px 10px 0px rgba(76, 175, 80, 0.01), 0px 2px 4px -1px rgba(76, 175, 80, 0.07)",
        "6": "0px 6px 10px 0px rgba(76, 175, 80, 0.04), 0px 1px 18px 0px rgba(76, 175, 80, 0.01), 0px 3px 5px -1px rgba(76, 175, 80, 0.07)",
        "8": "0px 8px 10px 1px rgba(76, 175, 80, 0.04), 0px 3px 14px 2px rgba(76, 175, 80, 0.01), 0px 5px 5px -3px rgba(76, 175, 80, 0.07)",
        "9": "0px 9px 12px 1px rgba(76, 175, 80, 0.04), 0px 3px 16px 2px rgba(76, 175, 80, 0.01), 0px 5px 6px -3px rgba(76, 175, 80, 0.07)",
        "12": "0px 12px 17px 2px rgba(76, 175, 80, 0.04), 0px 5px 22px 4px rgba(76, 175, 80, 0.01), 0px 7px 7px -4px rgba(76, 175, 80, 0.07)",
        "16": "0px 16px 24px 2px rgba(76, 175, 80, 0.04), 0px 6px 30px 5px rgba(76, 175, 80, 0.01), 0px 8px 10px -5px rgba(76, 175, 80, 0.07)",
        "24": "0px 24px 37px 3px rgba(76, 175, 80, 0.04), 0px 9px 46px 8px rgba(76, 175, 80, 0.01), 0px 11px 15px -7px rgba(76, 175, 80, 0.07)"
      },
      "warning": {
        "0": "none",
        "1": "0px 1px 1px 0px rgba(255, 152, 0, 0.04), 0px 2px 1px -1px rgba(255, 152, 0, 0.01), 0px 1px 3px 0px rgba(255, 152, 0, 0.07)",
        "2": "0px 2px 2px 0px rgba(255, 152, 0, 0.04), 0px 3px 3px -2px rgba(255, 152, 0, 0.01), 0px 1px 8px 0px rgba(255, 152, 0, 0.07)",
        "3": "0px 3px 4px 0px rgba(255, 152, 0, 0.04), 0px 3px 3px -2px rgba(255, 152, 0, 0.01), 0px 1px 8px 0px rgba(255, 152, 0, 0.07)",
        "4": "0px 4px 5px 0px rgba(255, 152, 0, 0.04), 0px 1px 10px 0px rgba(255, 152, 0, 0.01), 0px 2px 4px -1px rgba(255, 152, 0, 0.07)",
        "6": "0px 6px 10px 0px rgba(255, 152, 0, 0.04), 0px 1px 18px 0px rgba(255, 152, 0, 0.01), 0px 3px 5px -1px rgba(255, 152, 0, 0.07)",
        "8": "0px 8px 10px 1px rgba(255, 152, 0, 0.04), 0px 3px 14px 2px rgba(255, 152, 0, 0.01), 0px 5px 5px -3px rgba(255, 152, 0, 0.07)",
        "9": "0px 9px 12px 1px rgba(255, 152, 0, 0.04), 0px 3px 16px 2px rgba(255, 152, 0, 0.01), 0px 5px 6px -3px rgba(255, 152, 0, 0.07)",
        "12": "0px 12px 17px 2px rgba(255, 152, 0, 0.04), 0px 5px 22px 4px rgba(255, 152, 0, 0.01), 0px 7px 7px -4px rgba(255, 152, 0, 0.07)",
        "16": "0px 16px 24px 2px rgba(255, 152, 0, 0.04), 0px 6px 30px 5px rgba(255, 152, 0, 0.01), 0px 8px 10px -5px rgba(255, 152, 0, 0.07)",
        "24": "0px 24px 37px 3px rgba(255, 152, 0, 0.04), 0px 9px 46px 8px rgba(255, 152, 0, 0.01), 0px 11px 15px -7px rgba(255, 152, 0, 0.07)"
      },
      "error": {
        "0": "none",
        "1": "0px 1px 1px 0px rgba(255, 87, 34, 0.04), 0px 2px 1px -1px rgba(255, 87, 34, 0.01), 0px 1px 3px 0px rgba(255, 87, 34, 0.07)",
        "2": "0px 2px 2px 0px rgba(255, 87, 34, 0.04), 0px 3px 3px -2px rgba(255, 87, 34, 0.01), 0px 1px 8px 0px rgba(255, 87, 34, 0.07)",
        "3": "0px 3px 4px 0px rgba(255, 87, 34, 0.04), 0px 3px 3px -2px rgba(255, 87, 34, 0.01), 0px 1px 8px 0px rgba(255, 87, 34, 0.07)",
        "4": "0px 4px 5px 0px rgba(255, 87, 34, 0.04), 0px 1px 10px 0px rgba(255, 87, 34, 0.01), 0px 2px 4px -1px rgba(255, 87, 34, 0.07)",
        "6": "0px 6px 10px 0px rgba(255, 87, 34, 0.04), 0px 1px 18px 0px rgba(255, 87, 34, 0.01), 0px 3px 5px -1px rgba(255, 87, 34, 0.07)",
        "8": "0px 8px 10px 1px rgba(255, 87, 34, 0.04), 0px 3px 14px 2px rgba(255, 87, 34, 0.01), 0px 5px 5px -3px rgba(255, 87, 34, 0.07)",
        "9": "0px 9px 12px 1px rgba(255, 87, 34, 0.04), 0px 3px 16px 2px rgba(255, 87, 34, 0.01), 0px 5px 6px -3px rgba(255, 87, 34, 0.07)",
        "12": "0px 12px 17px 2px rgba(255, 87, 34, 0.04), 0px 5px 22px 4px rgba(255, 87, 34, 0.01), 0px 7px 7px -4px rgba(255, 87, 34, 0.07)",
        "16": "0px 16px 24px 2px rgba(255, 87, 34, 0.04), 0px 6px 30px 5px rgba(255, 87, 34, 0.01), 0px 8px 10px -5px rgba(255, 87, 34, 0.07)",
        "24": "0px 24px 37px 3px rgba(255, 87, 34, 0.04), 0px 9px 46px 8px rgba(255, 87, 34, 0.01), 0px 11px 15px -7px rgba(255, 87, 34, 0.07)"
      },
      "neutral": {
        "0": "none",
        "1": "0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 1px -1px rgba(0, 0, 0, 0.01), 0px 1px 3px 0px rgba(0, 0, 0, 0.07)",
        "2": "0px 2px 2px 0px rgba(0, 0, 0, 0.04), 0px 3px 3px -2px rgba(0, 0, 0, 0.01), 0px 1px 8px 0px rgba(0, 0, 0, 0.07)",
        "3": "0px 3px 4px 0px rgba(0, 0, 0, 0.04), 0px 3px 3px -2px rgba(0, 0, 0, 0.01), 0px 1px 8px 0px rgba(0, 0, 0, 0.07)",
        "4": "0px 4px 5px 0px rgba(0, 0, 0, 0.04), 0px 1px 10px 0px rgba(0, 0, 0, 0.01), 0px 2px 4px -1px rgba(0, 0, 0, 0.07)",
        "6": "0px 6px 10px 0px rgba(0, 0, 0, 0.04), 0px 1px 18px 0px rgba(0, 0, 0, 0.01), 0px 3px 5px -1px rgba(0, 0, 0, 0.07)",
        "8": "0px 8px 10px 1px rgba(0, 0, 0, 0.04), 0px 3px 14px 2px rgba(0, 0, 0, 0.01), 0px 5px 5px -3px rgba(0, 0, 0, 0.07)",
        "9": "0px 9px 12px 1px rgba(0, 0, 0, 0.04), 0px 3px 16px 2px rgba(0, 0, 0, 0.01), 0px 5px 6px -3px rgba(0, 0, 0, 0.07)",
        "12": "0px 12px 17px 2px rgba(0, 0, 0, 0.04), 0px 5px 22px 4px rgba(0, 0, 0, 0.01), 0px 7px 7px -4px rgba(0, 0, 0, 0.07)",
        "16": "0px 16px 24px 2px rgba(0, 0, 0, 0.04), 0px 6px 30px 5px rgba(0, 0, 0, 0.01), 0px 8px 10px -5px rgba(0, 0, 0, 0.07)",
        "24": "0px 24px 37px 3px rgba(0, 0, 0, 0.04), 0px 9px 46px 8px rgba(0, 0, 0, 0.01), 0px 11px 15px -7px rgba(0, 0, 0, 0.07)"
      },
      "default": {
        "0": "none",
        "1": "0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 1px -1px rgba(0, 0, 0, 0.01), 0px 1px 3px 0px rgba(0, 0, 0, 0.07)",
        "2": "0px 2px 2px 0px rgba(0, 0, 0, 0.04), 0px 3px 3px -2px rgba(0, 0, 0, 0.01), 0px 1px 8px 0px rgba(0, 0, 0, 0.07)",
        "3": "0px 3px 4px 0px rgba(0, 0, 0, 0.04), 0px 3px 3px -2px rgba(0, 0, 0, 0.01), 0px 1px 8px 0px rgba(0, 0, 0, 0.07)",
        "4": "0px 4px 5px 0px rgba(0, 0, 0, 0.04), 0px 1px 10px 0px rgba(0, 0, 0, 0.01), 0px 2px 4px -1px rgba(0, 0, 0, 0.07)",
        "6": "0px 6px 10px 0px rgba(0, 0, 0, 0.04), 0px 1px 18px 0px rgba(0, 0, 0, 0.01), 0px 3px 5px -1px rgba(0, 0, 0, 0.07)",
        "8": "0px 8px 10px 1px rgba(0, 0, 0, 0.04), 0px 3px 14px 2px rgba(0, 0, 0, 0.01), 0px 5px 5px -3px rgba(0, 0, 0, 0.07)",
        "9": "0px 9px 12px 1px rgba(0, 0, 0, 0.04), 0px 3px 16px 2px rgba(0, 0, 0, 0.01), 0px 5px 6px -3px rgba(0, 0, 0, 0.07)",
        "12": "0px 12px 17px 2px rgba(0, 0, 0, 0.04), 0px 5px 22px 4px rgba(0, 0, 0, 0.01), 0px 7px 7px -4px rgba(0, 0, 0, 0.07)",
        "16": "0px 16px 24px 2px rgba(0, 0, 0, 0.04), 0px 6px 30px 5px rgba(0, 0, 0, 0.01), 0px 8px 10px -5px rgba(0, 0, 0, 0.07)",
        "24": "0px 24px 37px 3px rgba(0, 0, 0, 0.04), 0px 9px 46px 8px rgba(0, 0, 0, 0.01), 0px 11px 15px -7px rgba(0, 0, 0, 0.07)"
      }
    },
    "opacities": [
      0.04,
      0.01,
      0.07
    ]
  },
  "typography": {
    "font_family": {
      "primary": "Montserrat, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
      "secondary": "DM Sans, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      "tertiary": "Roboto Mono, monospace"
    },
    "values": {
      "d1": {
        "fontFamily": "Montserrat, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
        "fontSize": "3.5625rem",
        "fontWeight": 400,
        "lineHeight": 1.1228070175438596,
        "letterSpacing": "0px"
      },
      "d2": {
        "fontFamily": "Montserrat, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
        "fontSize": "2.8125rem",
        "fontWeight": 400,
        "lineHeight": 1.1555555555555554,
        "letterSpacing": "0px"
      },
      "d3": {
        "fontFamily": "Montserrat, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
        "fontSize": "2.1875rem",
        "fontWeight": 400,
        "lineHeight": 1.2571428571428571,
        "letterSpacing": "0px"
      },
      "h1": {
        "fontFamily": "Montserrat, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
        "fontSize": "2rem",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0px"
      },
      "h2": {
        "fontFamily": "Montserrat, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
        "fontSize": "1.6875rem",
        "fontWeight": 400,
        "lineHeight": 1.2962962962962963,
        "letterSpacing": "0px"
      },
      "h3": {
        "fontFamily": "Montserrat, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
        "fontSize": "1.5rem",
        "fontWeight": 400,
        "lineHeight": 1.3333333333333333,
        "letterSpacing": "0px"
      },
      "t1": {
        "fontFamily": "Montserrat, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
        "fontSize": "1.3125rem",
        "fontWeight": 400,
        "lineHeight": 1.3333333333333333,
        "letterSpacing": "0px"
      },
      "t2": {
        "fontFamily": "Montserrat, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
        "fontSize": "1rem",
        "fontWeight": 500,
        "lineHeight": 1.5,
        "letterSpacing": ".15px"
      },
      "t3": {
        "fontFamily": "Montserrat, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
        "fontSize": "0.875rem",
        "fontWeight": 500,
        "lineHeight": 1.4285714285714286,
        "letterSpacing": ".1px"
      },
      "l1": {
        "fontFamily": "DM Sans, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        "fontWeight": 700,
        "fontSize": "1rem",
        "lineHeight": 1.4285714285714286,
        "letterSpacing": ".5px"
      },
      "l2": {
        "fontFamily": "DM Sans, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        "fontWeight": 700,
        "fontSize": "0.875rem",
        "lineHeight": 1.25,
        "letterSpacing": ".25px"
      },
      "l3": {
        "fontFamily": "DM Sans, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        "fontWeight": 700,
        "fontSize": "0.6875rem",
        "lineHeight": 1.3636363636363635,
        "letterSpacing": ".4px"
      },
      "b1": {
        "fontFamily": "DM Sans, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        "fontSize": "1rem",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": ".5px"
      },
      "b2": {
        "fontFamily": "DM Sans, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        "fontSize": "0.875rem",
        "fontWeight": 400,
        "lineHeight": 1.4285714285714286,
        "letterSpacing": ".25px"
      },
      "b3": {
        "fontFamily": "DM Sans, Helvetica, Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        "fontSize": "0.6875rem",
        "fontWeight": 400,
        "lineHeight": 1.3636363636363635,
        "letterSpacing": ".4px"
      },
      "m1": {
        "fontFamily": "Roboto Mono, monospace",
        "fontSize": "1rem",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": ".5px"
      },
      "m2": {
        "fontFamily": "Roboto Mono, monospace",
        "fontSize": "0.875rem",
        "fontWeight": 400,
        "lineHeight": 1.4285714285714286,
        "letterSpacing": ".25px"
      },
      "m3": {
        "fontFamily": "Roboto Mono, monospace",
        "fontSize": "0.6875rem",
        "fontWeight": 400,
        "lineHeight": 1.3636363636363635,
        "letterSpacing": ".4px"
      }
    },
    "unit": "px",
    "font_size": {
      "html": 16
    }
  },
  "transitions": {
    "timing_function": {
      "standard": "cubic-bezier(.4, 0, .2, 1)",
      "emphasized": "cubic-bezier(.4, 0, .6, 1)",
      "decelerated": "cubic-bezier(0, 0, .2, 1)",
      "accelerated": "cubic-bezier(.4, 0, 1, 1)"
    },
    "duration": {
      "xxs": 100,
      "xs": 200,
      "sm": 250,
      "rg": 300,
      "enter": 250,
      "leave": 200,
      "complex": 500
    }
  },
  "z_index": {
    "tooltip": 1700,
    "modal": 1500,
    "menu_modal": 1400,
    "menu": 1300,
    "button_float": 1200,
    "app_bar": 1100,
    "main": 1000,
    "text": 0
  },
  "methods": ...,
  "ui": {
    "className": {
      "static": true
    }
  },
  "options": {
    "rule": {
      "sort": true,
      "prefix": true,
      "rtl": false
    }
  },
  "id": "11898-1685698893027"
}
```

#### Nested themes

If you have `Theme` as a child element of another `Theme`, the child `Theme` will inherit the `AmauiTheme` instance, and add onto it it's own values.

```tsx
import { Theme, useAmauiTheme } from '@amaui/style-react';

const Button = () => {
  const amauiTheme = useAmauiTheme();

  console.log(amauiTheme.palette.color.primary.main, amauiTheme.palette.color.secondary.main);

  // '#ff0' '#ffa'

  return (
    <button>
      My button
    </button>
  );
};

const NestedTheme = () => {
  const amauiTheme = React.useMemo(() => {
    return {
      palette: {
        color: {
          secondary: {
            main: '#ffa'
          }
        }
      }
    };
  });

  return (
    <Theme
      value={amauiTheme}
    >
      ...
    </Theme>
  );
};

const App = () => {
  const value = React.useMemo(() => {
    return {
      palette: {
        light: true,

        color: {
          primary: {
            main: '#ff0'
          }
        }
      }
    };
  });

  return (
    <Theme
      value={value}
    >
      <NestedTheme>
        <Button />
      </NestedTheme>
    </Theme>
  );
};
```

#### useAmauiTheme

- Using `useAmauiTheme` without the `Theme` as a parent returns default `ThemeContext` value, which is `AmauiTheme` instance with the default options.


## API

#### IThemeValue

```ts
interface IThemeValue extends AmauiThemeRequired {
    updateWithRerender: (value: IAmauiTheme) => AmauiThemeRequired;
}
```

#### ITheme

```ts
interface ITheme extends React.HTMLAttributes<any> {
    root?: boolean;
    value?: IAmauiTheme;
    addCssVariables?: boolean;
    children?: any;
}
```

#### Theme

```ts
const Theme: React.ForwardRefExoticComponent<ITheme & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style react: Theme",
      "to": "/dev/style-react/use/Theme"
    },
    "next": {
      "label": "Style react: className",
      "to": "/dev/style-react/use/className"
    }
  }
}~
