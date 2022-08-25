import React from 'react';

import { countries } from '@amaui/utils';
import { AmauiTheme, AmauiThemeProvider, classNames, style, sy, useAmauiTheme } from '@amaui/style-react';
import { Button, Modal, Expand, Fab, Fade, Focus, Grow, IconButton, Interaction, LinearProgress, Link, Portal, Reset, RoundProgress, ButtonGroup, Slide, Surface, Transition, Transitions, Type, Zoom, ModalHeader, ModalMain, ModalFooter, ModalTitle, ModalText, ModalIcon, Divider, Badge, Avatar, AvatarGroup, ClickListener, Chip, ChipGroup, Backdrop, Checkbox, Radio, Keyframes, Switch, TextField, List, ListItem, ListSubheader, Append, Tooltip, Menu, Select, AutoComplete, Rating, Box, Container, Line, Grid, Banner, Slider } from '@amaui/ui-react';

import IconMaterial10kRounded from '@amaui/icons-material-react/build/IconMaterial10kRounded';
import IconMaterialAddRounded from '@amaui/icons-material-react/build/IconMaterialAddRounded';
import IconMaterialPottedPlantRounded from '@amaui/icons-material-react/build/IconMaterialPottedPlantRounded';
import IconMaterialPottedPlantRoundedFilled from '@amaui/icons-material-react/build/IconMaterialPottedPlantRoundedFilled';
import IconMaterialCheckRounded from '@amaui/icons-material-react/build/IconMaterialCheckRounded';
import IconMaterialCloseRounded from '@amaui/icons-material-react/build/IconMaterialCloseRounded';
import IconMaterialLightModeRounded from '@amaui/icons-material-react/build/IconMaterialLightModeRounded';
import IconMaterialDarkModeRounded from '@amaui/icons-material-react/build/IconMaterialDarkModeRounded';
import IconMaterialUndoRounded from '@amaui/icons-material-react/build/IconMaterialUndoRounded';
import IconMaterialCutRounded from '@amaui/icons-material-react/build/IconMaterialCutRounded';
import IconMaterialContentCopyRounded from '@amaui/icons-material-react/build/IconMaterialContentCopyRounded';
import IconMaterialContentPasteRounded from '@amaui/icons-material-react/build/IconMaterialContentPasteRounded';
import IconMaterialCloudRounded from '@amaui/icons-material-react/build/IconMaterialCloudRounded';
import IconMaterialArrowRightRounded from '@amaui/icons-material-react/build/IconMaterialArrowRightRounded';
import IconMaterialSentimentDissatisfiedRounded from '@amaui/icons-material-react/build/IconMaterialSentimentDissatisfiedRounded';
import IconMaterialSentimentNeutralRounded from '@amaui/icons-material-react/build/IconMaterialSentimentNeutralRounded';
import IconMaterialSentimentSatisfiedRounded from '@amaui/icons-material-react/build/IconMaterialSentimentSatisfiedRounded';

const useStyleA = style(theme => ({
  a: {
    '&.a-enter': {
      opacity: 0,
    },

    '&.a-entering': {
      opacity: 1,
      transition: theme?.methods.transitions.make(['opacity'], { duration: 'rg', timing_function: 'standard' }),
    },

    '&.a-exiting': {
      opacity: 0,
      transition: theme?.methods.transitions.make(['opacity'], { duration: 'rg', timing_function: 'standard' }),
    },

    '&.a-exited': {
      opacity: 0,
      transition: theme?.methods.transitions.make(['opacity'], { duration: 'rg', timing_function: 'standard' }),
    },
  }
}), { name: 'A' });

const A = (props: any) => {
  const { classes } = useStyleA(props);

  return (
    <Transition in={props.in} prefix='a-' className>
      <a href='https://google.com' className={classes.a}>
        {props.children}
      </a>
    </Transition>
  );
};

const useStyle = style(theme => ({
  body: {
    '@p': true,

    color: theme?.palette.text?.default?.primary,
    background: theme?.palette.background?.default?.secondary
  },

  '@pure': {
    div: {
      position: 'relative'
    }
  },

  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 40,
    padding: '14vw',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  h1: {
    fontSize: 15,
    fontWeight: 300,
    color: theme?.palette.text?.default?.primary,
    cursor: 'pointer',
    margin: 0,
    userSelect: 'none'
  },
  auto: {
    height: 'auto !important'
  },
  item: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 24,
    gap: 24
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    gap: 24
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    gap: 24
  },
  center: {
    alignItems: 'center'
  },
  btn: {
    transition: 'transform .4s ease !important',

    '&:active': {
      transform: 'scale(0.91)'
    }
  },
  div: {
    width: 140,
    height: 140,
    background: '#fff5dc'
  },
  a: {
    position: 'relative',
    width: '90px',
    height: '37px',
    background: 'white',
    color: 'green',
  },
  a1: {
    '&.enter': {
      opacity: '0',
      transform: 'translateX(-100%)',
    },

    '&.entering': {
      opacity: '1',
      transform: 'translateX(0%)',
      transition: theme?.methods.transitions.make(['opacity', 'transform'], { duration: 'rg', timing_function: 'standard' }),
    },

    '&.exit': {
      opacity: '1',
      transform: 'translateX(0%)',
    },

    '&.exiting': {
      opacity: '0',
      transform: 'translateX(100%)',
      transition: theme?.methods.transitions.make(['opacity', 'transform'], { duration: 'rg', timing_function: 'standard' }),
    },
  },
  a14: {
    '&.enter': {
      opacity: '0',
      transform: 'translateX(-100%)',
    },

    '&.entering': {
      opacity: '1',
      transition: theme?.methods.transitions.make(['opacity', 'transform'], { duration: 'rg', timing_function: 'standard' }),
    },

    '&.exit': {
      opacity: '1',
      transform: 'translateX(0%)',
    },

    '&.exiting': {
      opacity: '0',
      transform: 'translateX(100%)',
      transition: theme?.methods.transitions.make(['opacity', 'transform'], { duration: 'rg', timing_function: 'standard' }),
    },
  },
  pathBackground: {
    stroke: [theme?.palette?.text?.selected, '!important']
  },

  group: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  },

  tooltip: {
    display: 'inline-flex',
    padding: '4px 24px',
    borderRadius: '8px',
    background: 'hsl(106deg 67% 70%)',
    color: 'white'
  }
}), { name: 'App' });

const Accordion = (props: any) => {
  const { classes } = useStyle();
  const [open, setOpen] = React.useState(props.open);

  return (
    <div className={classes.section}>
      <h1 className={classes.h1} onClick={() => setOpen(!open)}>{props.label}</h1>

      {open && (
        <section className={classNames([classes.item, props.className])}>
          {props.children}
        </section>
      )}
    </div>
  );
};

const styled = {
  Banner: sy(Banner)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Grid: sy(Grid)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Line: sy(Line)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Container: sy(Container)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Box: sy(Box)((theme: AmauiTheme) => ({
    root: {
      color: theme.palette?.color?.primary?.main
    }
  })),
  Rating: sy(Rating)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  AutoComplete: sy(AutoComplete)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Select: sy(Select)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Tooltip: sy(Tooltip)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  ListItem: sy(ListItem)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  List: sy(List)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  TextField: sy(TextField)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Switch: sy(Switch)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Radio: sy(Radio)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Checkbox: sy(Checkbox)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  ChipGroup: sy(ChipGroup)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Chip: sy(Chip)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Avatar: sy(Avatar)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  AvatarGroup: sy(AvatarGroup)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Badge: sy(Badge)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Divider: sy(Divider)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Modal: sy(Modal)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Surface: sy(Surface)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Link: sy(Link)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Type: sy(Type)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Fab: sy(Fab)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  IconButton: sy(IconButton)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  LinearProgress: sy(LinearProgress)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  RoundProgress: sy(RoundProgress)((theme: AmauiTheme) => ({
    root: {
      pointerEvents: 'all',

      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  ButtonGroup: sy(ButtonGroup)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  Button: sy(Button)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
  IconMaterialPottedPlantRounded: sy(IconMaterialPottedPlantRounded)((theme: AmauiTheme) => ({
    root: {
      '&:hover': {
        opacity: 0.4
      }
    }
  })),
};

const Box14 = () => (
  <Box
    styles={(theme: AmauiTheme) => ({
      root: {
        width: '100%',
        height: '140px',
        backgroundColor: 'beige'
      }
    })}
  >
    Value
  </Box>
);

const Box1 = () => (
  <Box
    styles={(theme: AmauiTheme) => ({
      root: {
        width: '140px',
        height: '140px',
        color: theme.palette?.color?.secondary?.main,
        backgroundColor: 'beige',
        transition: 'opacity .4s',

        '&:hover': {
          opacity: 0.4
        }
      }
    })}
  >
    Value
  </Box>
);

const BoxStyled = () => (
  <styled.Box
    styles={(theme: AmauiTheme) => ({
      root: {
        width: '140px',
        height: '140px',
        color: theme.palette?.color?.secondary?.main,
        backgroundColor: 'beige',
        transition: 'opacity .4s',

        '&:hover': {
          opacity: 0.4
        }
      }
    })}
  >
    Value
  </styled.Box>
);

const Item = sy(Surface)((theme) => ({

}));

function App() {
  const [a, setA] = React.useState<any>({
    a: true,
    transitions: true,
    pulse: true,
    fade: true,
    grow: true,
    zoom: true,
    expand: true,
    slide: true,
    slideRef: true,
    loading: true,
    portal: false,
    modal: false
  });
  const [init, setInit] = React.useState(false);
  const [anchor, setAnchor] = React.useState<any>();
  const [selected, setSelected] = React.useState<any>([]);
  // eslint-disable-next-line
  const [progress, setProgress] = React.useState(0);
  const [items, setItems] = React.useState([0]);
  const [space, setSpace] = React.useState(8);
  const [radius, setRadius] = React.useState(8);
  const [rtl, setRtl] = React.useState(false);
  const [rootFontSize, setRootFontSize] = React.useState(16);
  const { classes } = useStyle();
  const refs = {
    transitions: React.useRef<any>(),
    slides: {
      up: React.useRef<any>(),
      left: React.useRef<any>(),
      right: React.useRef<any>(),
      down: React.useRef<any>()
    },
    menu: {
      1: React.useRef<any>(),
      2: React.useRef<any>(),
      3: React.useRef<any>(),
      4: React.useRef<any>(),
      5: React.useRef<any>(),
      7: React.useRef<any>(),
      14: React.useRef<any>(),
      114: React.useRef<any>()
    }
  };

  const theme = useAmauiTheme();

  const updateLight = () => theme.updateWithRerender({
    palette: {
      light: !theme.palette.light
    }
  });

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init) {
      window.document.body.dir = !rtl ? 'ltr' : 'rtl';

      theme.updateWithRerender({
        space: {
          unit: space
        },

        shape: {
          radius: {
            unit: radius
          }
        }
      });
    }
    // eslint-disable-next-line
  }, [space, radius, rtl]);

  React.useEffect(() => {
    if (init) window.document.documentElement.style.fontSize = `${rootFontSize}px`;
    // eslint-disable-next-line
  }, [rootFontSize]);

  const update = (item: any) => {
    setA((values: any) => {
      const newValues = { ...values };

      newValues[item] = !newValues[item];

      return newValues;
    });
  };

  const updateValue = (item?: any, property: string = 'modal') => {
    setA((values: any) => {
      const newValues = { ...values };

      if (!newValues[property]) newValues[property] = item;
      else newValues[property] = false;

      return newValues;
    });
  };

  const updatePure = (item?: any, property: string = '') => {
    setA((values: any) => {
      const newValues = { ...values };

      newValues[property] = item;

      return newValues;
    });
  };

  // React.useEffect(() => {
  //   const id = setInterval(() => setProgress(item => item >= 100 ? 0 : item + 10), 1000);

  //   return () => {
  //     clearInterval(id);
  //   }
  // }, []);

  // React.useEffect(() => {
  //   const rect = refs.transitions.current.getBoundingClientRect();

  //   window.scrollBy(0, Math.abs(window.innerHeight - rect.y - rect.height) * 2);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [items.length]);

  const keyframes: any = {
    appended: {
      opacity: 0
    },

    add: {
      opacity: 0
    },
    adding: {
      transition: 'opacity .3s',
      opacity: 1
    },
    added: {},

    grow: {
      transition: 'all .4s',
      borderRadius: '50%',
      transform: 'scale(1.4)'
    },
    move: {
      transition: 'all .4s',
      borderRadius: '50%',
      transform: 'scale(1.4) translateX(440px)'
    },
    shrink: {
      transition: 'all 1.1s',
      borderRadius: '0',
      transform: 'scale(1) translateX(440px)'
    },

    exited: {
      borderRadius: '0',
      transform: 'scale(1) translateX(440px)'
    }
  };

  const onMouseUp = () => {
    const selection = window.getSelection();

    if (!selection || selection.anchorOffset === selection.focusOffset) return;

    setAnchor(selection.getRangeAt(0).getBoundingClientRect());
  };

  const onMouseMove = (event: MouseEvent) => {
    setAnchor({
      x: event.clientX,
      y: event.clientY,
      width: 10,
      height: 20
    });
  };

  const onOpen = () => {
    setA((values_: any) => ({ ...values_, tooltip: true }));
  };

  const onClose = () => {
    setA((values_: any) => ({ ...values_, tooltip: false }));
  };

  return (
    <div className={classes.root}>
      {/* Reset */}
      <Reset />

      <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
        <Button size='small' color='secondary' className={classes.btn} onClick={() => updateLight()}>{theme.palette.light ? 'dark' : 'light'}</Button>

        <Button size='small' color='secondary' className={classes.btn} onClick={() => setSpace(item => ++item)}>add space ({space})</Button>
        <Button size='small' color='secondary' className={classes.btn} onClick={() => setSpace(item => --item)}>remove space ({space})</Button>

        <Button size='small' color='secondary' className={classes.btn} onClick={() => setRadius(item => ++item)}>add radius ({radius})</Button>
        <Button size='small' color='secondary' className={classes.btn} onClick={() => setRadius(item => --item)}>remove radius ({radius})</Button>

        <Button size='small' color='secondary' className={classes.btn} onClick={() => setRootFontSize(item => ++item)}>add root font size ({rootFontSize})</Button>
        <Button size='small' color='secondary' className={classes.btn} onClick={() => setRootFontSize(item => --item)}>remove root font size ({rootFontSize})</Button>

        <Button size='small' color='secondary' className={classes.btn} onClick={() => setRtl(item => !item)}>rtl {rtl ? ' on' : ''}</Button>
      </div>

      <Accordion label='All'>
        <div className={classNames([classes.column])}>
          <Banner
            primary={`Your password was updated on your other device.
Please sign in again.`}

            startAlign='center'

            start={(
              <IconButton color='secondary' version='filled'>
                <IconMaterialPottedPlantRounded />
              </IconButton>
            )}

            end={(
              <Button>
                Active
              </Button>
            )}
          />

          <Grid gap={2} line>
            <Grid values={{ xs: 8, sm: 4 }}>
              <Item elevation={1} style={{ width: '100%' }}>Item 1</Item>
            </Grid>

            <Grid values={{ xs: 2, sm: 6 }}>
              <Item elevation={1} style={{ width: '100%' }}>Item 2</Item>
            </Grid>

            <Grid values={{ xs: 3, sm: 3.5 }}>
              <Item elevation={1} style={{ width: '100%' }}>Item 3</Item>
            </Grid>

            <Grid values={{ xs: 7, sm: 6.5 }}>
              <Item elevation={1} style={{ width: '100%' }}>Item 4</Item>
            </Grid>
          </Grid>

          <Line>
            <Item size='small' elevation={1}>Item 1</Item>
            <Item size='regular' elevation={1}>Item 114</Item>
            <Item size='large' elevation={1}>Item 1114</Item>
          </Line>

          <Container>
            <Box14 />
          </Container>

          <Box1 />

          <Rating />

          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name }))}

            color='secondary'
          />

          <Select
            label='Items'

            color='secondary'
          >
            {[1, 3, 4].map(item => (
              <ListItem
                button

                primary={`Item ${item}`}

                value={item}

                key={item}
              />
            ))}
          </Select>

          <Button
            ref={refs.menu['14']}

            onClick={() => update('menu_14')}

            color='secondary'
          >
            Menu
          </Button>

          <Menu
            open={a.menu_14}

            onClose={() => setA((items: any) => ({ ...items, menu_14: false }))}

            anchorElement={refs.menu['14'].current}
          >
            {[0, 1, 3, 4].map(item => (
              <ListItem
                button

                primary={`Item ${item + 1}`}

                key={item}
              />
            ))}
          </Menu>

          <Tooltip
            label='Label'
          >
            <Button color='secondary'>Append</Button>
          </Tooltip>

          <Append position='bottom' alignment='end'
            element={(
              <span className={classes.tooltip}>a</span>
            )}

            open
          >
            <Button color='secondary'>Append</Button>
          </Append>

          <List>
            <ListItem
              primary='Primary text'
              secondary='Secondary text'
              tertiary='Tertiary text'

              start={(
                <IconButton color='secondary'>
                  <IconMaterialPottedPlantRounded />
                </IconButton>
              )}

              end={(
                <IconButton color='secondary'>
                  <IconMaterialPottedPlantRounded />
                </IconButton>
              )}
            />
            <ListItem
              primary='Primary text'
              secondary='Secondary text'
              tertiary='Tertiary text'

              start={(
                <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
              )}

              end={(
                <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
              )}
            />
            <ListItem
              primary='Primary text'
              secondary='Secondary text'
              tertiary='Tertiary text'

              start={(
                <Avatar version='filled' color='secondary'>
                  Aa
                </Avatar>
              )}

              end={(
                <Avatar version='filled' color='secondary'>
                  Aa
                </Avatar>
              )}
            />
            <ListItem
              primary='Primary text'
              secondary='Secondary text'
              tertiary='Tertiary text'

              start={(
                <Avatar version='filled' color='secondary'>
                  <IconMaterialPottedPlantRounded />
                </Avatar>
              )}

              end={(
                <Avatar version='filled' color='secondary'>
                  <IconMaterialPottedPlantRounded />
                </Avatar>
              )}
            />
            <ListItem
              primary='Primary text'
              secondary='Secondary text'
              tertiary='Tertiary text'

              start={(
                <IconMaterialPottedPlantRounded color='secondary' />
              )}

              end={(
                <IconMaterialPottedPlantRounded color='secondary' />
              )}
            />
          </List>

          <TextField color='secondary' label='Filled text' placeholder='Filled text' />

          <Switch color='secondary' />

          <Radio color='secondary' />

          <Checkbox color='secondary' />

          <Chip color='secondary'>Enabled</Chip>

          <Avatar color='secondary'>a</Avatar>

          <Badge color='secondary' indicator tonal={false}>
            <IconMaterialPottedPlantRounded />
          </Badge>

          <Badge color='secondary' value='1114' tonal={false}>
            <IconMaterialPottedPlantRounded />
          </Badge>

          <Divider color='secondary' />

          <Surface color='secondary' tonal={false}>Surface</Surface>

          <Link href='https://google.com' target='_blank' color='secondary'>Link</Link>

          <Type>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.
          </Type>

          <Fab color='secondary' tonal={false}><IconMaterialPottedPlantRounded /> Filled</Fab>

          <IconButton color='secondary' version='outlined'>
            <IconMaterialPottedPlantRounded />
          </IconButton>

          <LinearProgress color='secondary' />

          <RoundProgress color='secondary' />

          <Button version='filled' color='secondary' size='regular'>Filled</Button>

          <IconMaterialPottedPlantRounded color='secondary' />
        </div>
      </Accordion>

      <Accordion label='Slider'>
        <Accordion label='Slider' open>
          <Slider
            color='secondary'

            style={{
              width: 140
            }}
          />
        </Accordion>

        <Accordion label='Slider size' open>
          <Line gap={5}>
            <Slider
              size='small'

              color='secondary'

              style={{
                width: 140
              }}
            />

            <Slider
              size='regular'

              color='secondary'

              style={{
                width: 140
              }}
            />

            <Slider
              size='large'

              color='secondary'

              style={{
                width: 140
              }}
            />
          </Line>
        </Accordion>

        <Accordion label='Slider color' open>
          <Line gap={5}>
            <Slider
              valueDefault={40}

              color='default'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              color='primary'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              color='secondary'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              color='tertiary'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              color='quaternary'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              color='info'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              color='success'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              color='warning'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              color='error'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              color='neutral'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              color='#f5d758'

              style={{
                width: 140
              }}
            />
          </Line>
        </Accordion>

        <Accordion label='Slider tonal' open>
          <Line gap={5}>
            <Slider
              valueDefault={40}

              tonal

              color='primary'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              tonal

              color='secondary'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              tonal

              color='tertiary'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              tonal

              color='quaternary'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              tonal

              color='info'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              tonal

              color='success'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              tonal

              color='warning'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              tonal

              color='error'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              tonal

              color='neutral'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              tonal

              color='#f5d758'

              style={{
                width: 140
              }}
            />
          </Line>
        </Accordion>

        <Accordion label='Slider precision' open>
          <Line gap={5}>
            <Slider
              color='secondary'

              precision={1}

              style={{
                width: 140
              }}
            />

            <Slider
              color='secondary'

              precision={10}

              style={{
                width: 140
              }}
            />

            <Slider
              color='secondary'

              precision={20}

              style={{
                width: 140
              }}
            />

            <Slider
              color='secondary'

              precision={25}

              style={{
                width: 140
              }}
            />

            <Slider
              color='secondary'

              precision={50}

              style={{
                width: 140
              }}
            />

            <Slider
              color='secondary'

              precision={75}

              style={{
                width: 140
              }}
            />

            <Slider
              color='secondary'

              precision={100}

              style={{
                width: 140
              }}
            />
          </Line>
        </Accordion>

        <Accordion label='Slider marks' open>
          <Line gap={5}>
            <Slider
              marks

              color='secondary'

              style={{
                width: 140
              }}
            />

            <Slider
              marks

              color='secondary'

              precision={1}

              style={{
                width: 140
              }}
            />

            <Slider
              marks

              color='secondary'

              precision={10}

              style={{
                width: 140
              }}
            />

            <Slider
              marks

              color='secondary'

              precision={20}

              style={{
                width: 140
              }}
            />

            <Slider
              marks

              color='secondary'

              precision={25}

              style={{
                width: 140
              }}
            />

            <Slider
              marks

              color='secondary'

              precision={50}

              style={{
                width: 140
              }}
            />

            <Slider
              marks

              color='secondary'

              precision={75}

              style={{
                width: 140
              }}
            />

            <Slider
              marks

              color='secondary'

              precision={100}

              style={{
                width: 140
              }}
            />
          </Line>
        </Accordion>

        <Accordion label='Slider vertical' open>
          <Line gap={5} align='flex-start'>
            <Slider
              valueDefault={40}

              orientation='vertical'

              marks

              color='secondary'

              style={{
                height: 140
              }}
            />

            <Slider
              valueDefault={40}

              orientation='vertical'

              marks

              color='secondary'

              precision={1}

              style={{
                height: 140
              }}
            />

            <Slider
              valueDefault={40}

              orientation='vertical'

              marks

              color='secondary'

              precision={10}

              style={{
                height: 140
              }}
            />

            <Slider
              valueDefault={40}

              orientation='vertical'

              marks

              color='secondary'

              precision={20}

              style={{
                height: 140
              }}
            />

            <Slider
              valueDefault={40}

              orientation='vertical'

              marks

              color='secondary'

              precision={25}

              style={{
                height: 140
              }}
            />

            <Slider
              valueDefault={40}

              orientation='vertical'

              marks

              color='secondary'

              precision={50}

              style={{
                height: 140
              }}
            />

            <Slider
              valueDefault={40}

              orientation='vertical'

              marks

              color='secondary'

              precision={75}

              style={{
                height: 140
              }}
            />

            <Slider
              valueDefault={40}

              orientation='vertical'

              marks

              color='secondary'

              precision={100}

              style={{
                height: 140
              }}
            />
          </Line>
        </Accordion>

        <Accordion label='Slider noButton' open>
          <Line gap={5} align='flex-start'>
            <Slider
              valueDefault={40}

              noButton

              marks

              color='secondary'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={40}

              noButton

              orientation='vertical'

              marks

              color='secondary'

              style={{
                height: 140
              }}
            />
          </Line>
        </Accordion>

        <Accordion label='Slider smallest values' open>
          <Line gap={5} align='flex-start'>
            <Slider
              valueDefault={0}

              precision={0.1}

              min={-0.5}

              max={1}

              marks

              color='secondary'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={0.00000005}

              precision={0.00000001}

              min={-0.00000005}

              max={0.0000001}

              marks

              color='secondary'

              style={{
                width: 140
              }}
            />

            <Slider
              valueDefault={0.00000005}

              precision={0.00000001}

              min={-0.00000005}

              max={0.0000001}

              orientation='vertical'

              marks

              color='secondary'

              style={{
                height: 140
              }}
            />
          </Line>
        </Accordion>
      </Accordion>

      <Accordion label='Banner'>
        <Accordion label='Banner' open>
          <Banner
            primary={`Your password was updated on your other device.
Please sign in again.`}

            startAlign='center'

            start={(
              <IconButton color='secondary' version='filled'>
                <IconMaterialPottedPlantRounded />
              </IconButton>
            )}

            end={(
              <Button>
                Active
              </Button>
            )}
          />
        </Accordion>

        <Accordion label='Banner size' open>
          <Banner
            size='small'

            primary={`Your password was updated on your other device.
Please sign in again.`}

            startAlign='center'

            start={(
              <IconButton color='secondary' version='filled'>
                <IconMaterialPottedPlantRounded />
              </IconButton>
            )}

            end={(
              <Button>
                Active
              </Button>
            )}
          />

          <Banner
            size='regular'

            primary={`Your password was updated on your other device.
Please sign in again.`}

            startAlign='center'

            start={(
              <IconButton color='secondary' version='filled'>
                <IconMaterialPottedPlantRounded />
              </IconButton>
            )}

            end={(
              <Button>
                Active
              </Button>
            )}
          />

          <Banner
            size='large'

            primary={`Your password was updated on your other device.
Please sign in again.`}

            startAlign='center'

            start={(
              <IconButton color='secondary' version='filled'>
                <IconMaterialPottedPlantRounded />
              </IconButton>
            )}

            end={(
              <Button>
                Active
              </Button>
            )}
          />
        </Accordion>

        <Accordion label='Banner actions' open>
          <Banner
            primary={`Your password was updated on your other device.
Please sign in again.`}

            actions={[
              <Button color='secondary' version='text'>Sign in</Button>,

              <Button color='secondary' version='text'>Open</Button>
            ]}

            startAlign='center'

            start={(
              <IconButton color='secondary' version='filled'>
                <IconMaterialPottedPlantRounded />
              </IconButton>
            )}
          />

          <Banner
            primary='Your password was updated on your other device. Please sign in again.'

            actions={[
              <Button color='secondary' version='text'>Sign in</Button>,

              <Button color='secondary' version='text'>Open</Button>
            ]}
          />
        </Accordion>

        <Accordion label='Banner actions' open>
          <Banner
            maxWidth='lg'

            primary={`Your password was updated on your other device.
Please sign in again.`}

            actions={[
              <Button color='secondary' version='text'>Sign in</Button>,

              <Button color='secondary' version='text'>Open</Button>
            ]}

            startAlign='center'

            start={(
              <IconButton color='secondary' version='filled'>
                <IconMaterialPottedPlantRounded />
              </IconButton>
            )}
          />
        </Accordion>

        <Accordion label='AmauiTheme'>
          <div className={classNames([classes.column])}>
            <Banner
              primary={`Your password was updated on your other device.
Please sign in again.`}

              startAlign='center'

              start={(
                <IconButton color='secondary' version='filled'>
                  <IconMaterialPottedPlantRounded />
                </IconButton>
              )}

              end={(
                <Button>
                  Active
                </Button>
              )}
            />

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Banner
                  primary={`Your password was updated on your other device.
Please sign in again.`}

                  startAlign='center'

                  start={(
                    <IconButton color='secondary' version='filled'>
                      <IconMaterialPottedPlantRounded />
                    </IconButton>
                  )}

                  end={(
                    <Button>
                      Active
                    </Button>
                  )}
                />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiBanner: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: '0.4'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Banner
                  primary={`Your password was updated on your other device.
Please sign in again.`}

                  startAlign='center'

                  start={(
                    <IconButton color='secondary' version='filled'>
                      <IconMaterialPottedPlantRounded />
                    </IconButton>
                  )}

                  end={(
                    <Button>
                      Active
                    </Button>
                  )}
                />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiBanner: {
                        style: {
                          override: {
                            root: {
                              display: 'flex',
                              width: '100%',
                              cursor: 'pointer'
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Banner
                  primary={`Your password was updated on your other device.
Please sign in again.`}

                  startAlign='center'

                  start={(
                    <IconButton color='secondary' version='filled'>
                      <IconMaterialPottedPlantRounded />
                    </IconButton>
                  )}

                  end={(
                    <Button>
                      Active
                    </Button>
                  )}
                />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiBanner: {
                        props: {
                          default: {
                            maxWidth: 'lg'
                          }
                        }
                      }
                    }
                  }
                }}

                style={{ width: '100%' }}
              >
                <Banner
                  primary={`Your password was updated on your other device.
Please sign in again.`}

                  startAlign='center'

                  start={(
                    <IconButton color='secondary' version='filled'>
                      <IconMaterialPottedPlantRounded />
                    </IconButton>
                  )}

                  end={(
                    <Button>
                      Active
                    </Button>
                  )}
                />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Banner
                primary={`Your password was updated on your other device.
Please sign in again.`}

                startAlign='center'

                start={(
                  <IconButton color='secondary' version='filled'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <Button>
                    Active
                  </Button>
                )}
              />
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Grid'>
        <Accordion label='Grid' open>
          <div className={classNames([classes.column])} style={{ bacground: '#f7f7f7' }}>
            <Grid gap={2} line>
              <Grid values={{ xs: 8, sm: 4 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 1</Item>
              </Grid>

              <Grid values={{ xs: 2, sm: 6 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 2</Item>
              </Grid>

              <Grid values={{ xs: 3, sm: 3.5 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 3</Item>
              </Grid>

              <Grid values={{ xs: 7, sm: 6.5 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 4</Item>
              </Grid>
            </Grid>
          </div>
        </Accordion>

        <Accordion label='Grid offset' open>
          <div className={classNames([classes.column])} style={{ bacground: '#f7f7f7' }}>
            <Grid gap={2} line>
              <Grid values={{ xs: 8, sm: 4 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 1</Item>
              </Grid>

              <Grid values={{ xs: 2, sm: 4 }} offsets={{ sm: 2 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 2</Item>
              </Grid>

              <Grid values={{ xs: 3, sm: 3.5 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 3</Item>
              </Grid>

              <Grid values={{ xs: 7, sm: 6.5 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 4</Item>
              </Grid>
            </Grid>
          </div>
        </Accordion>

        <Accordion label='Grid gap' open>
          <div className={classNames([classes.column])} style={{ bacground: '#f7f7f7' }}>
            <Grid gap={4} line>
              <Grid values={{ xs: 8, sm: 4 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 1</Item>
              </Grid>

              <Grid values={{ xs: 2, sm: 6 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 2</Item>
              </Grid>

              <Grid values={{ xs: 3, sm: 3.5 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 3</Item>
              </Grid>

              <Grid values={{ xs: 7, sm: 6.5 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 4</Item>
              </Grid>
            </Grid>
          </div>
        </Accordion>

        <Accordion label='Grid rowGap' open>
          <div className={classNames([classes.column])} style={{ bacground: '#f7f7f7' }}>
            <Grid gap={2} rowGap={4} line>
              <Grid values={{ xs: 8, sm: 4 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 1</Item>
              </Grid>

              <Grid values={{ xs: 2, sm: 6 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 2</Item>
              </Grid>

              <Grid values={{ xs: 3, sm: 3.5 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 3</Item>
              </Grid>

              <Grid values={{ xs: 7, sm: 6.5 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 4</Item>
              </Grid>
            </Grid>
          </div>
        </Accordion>

        <Accordion label='Grid auto' open>
          <div className={classNames([classes.column])} style={{ bacground: '#f7f7f7' }}>
            <Grid gap={2} line>
              <Grid auto>
                <Item elevation={1} style={{ width: '100%' }}>Item 1</Item>
              </Grid>

              <Grid values={{ xs: 2, sm: 6 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 2</Item>
              </Grid>
            </Grid>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme'>
          <div className={classNames([classes.column])}>
            <Grid line>
              <Grid values={{ xs: 8, sm: 4 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 1</Item>
              </Grid>

              <Grid values={{ xs: 2, sm: 6 }}>
                <Item elevation={1} style={{ width: '100%' }}>Item 2</Item>
              </Grid>
            </Grid>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Grid line>
                  <Grid values={{ xs: 8, sm: 4 }}>
                    <Item elevation={1} style={{ width: '100%' }}>Item 1</Item>
                  </Grid>

                  <Grid values={{ xs: 2, sm: 6 }}>
                    <Item elevation={1} style={{ width: '100%' }}>Item 2</Item>
                  </Grid>
                </Grid>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiGrid: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: '0.4'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Grid line>
                  <Grid values={{ xs: 8, sm: 4 }}>
                    <Item elevation={1} style={{ width: '100%' }}>Item 1</Item>
                  </Grid>

                  <Grid values={{ xs: 2, sm: 6 }}>
                    <Item elevation={1} style={{ width: '100%' }}>Item 2</Item>
                  </Grid>
                </Grid>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiGrid: {
                        style: {
                          override: {
                            root: {
                              display: 'flex',
                              width: '100%',
                              cursor: 'pointer',
                              background: '#f7f7f7'
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Grid line>
                  <Grid values={{ xs: 8, sm: 4 }}>
                    <Item elevation={1} style={{ width: '100%' }}>Item 1</Item>
                  </Grid>

                  <Grid values={{ xs: 2, sm: 6 }}>
                    <Item elevation={1} style={{ width: '100%' }}>Item 2</Item>
                  </Grid>
                </Grid>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiGrid: {
                        props: {
                          default: {
                            gap: 4
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Grid line>
                  <Grid values={{ xs: 8, sm: 4 }}>
                    <Item elevation={1} style={{ width: '100%' }}>Item 1</Item>
                  </Grid>

                  <Grid values={{ xs: 2, sm: 6 }}>
                    <Item elevation={1} style={{ width: '100%' }}>Item 2</Item>
                  </Grid>
                </Grid>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Grid line>
                <Grid values={{ xs: 8, sm: 4 }}>
                  <Item elevation={1} style={{ width: '100%' }}>Item 1</Item>
                </Grid>

                <Grid values={{ xs: 2, sm: 6 }}>
                  <Item elevation={1} style={{ width: '100%' }}>Item 2</Item>
                </Grid>
              </styled.Grid>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Line'>
        <Accordion label='Line' open>
          <div className={classNames([classes.column])}>
            <Line>
              <Item size='small' elevation={1}>Item 1</Item>
              <Item size='regular' elevation={1}>Item 114</Item>
              <Item size='large' elevation={1}>Item 1114</Item>
            </Line>
          </div>
        </Accordion>

        <Accordion label='Line divider' open>
          <div className={classNames([classes.column])}>
            <Line direction='row' divider>
              <Item size='small' elevation={1}>Item 1</Item>
              <Item size='regular' elevation={1}>Item 114</Item>
              <Item size='large' elevation={1}>Item 1114</Item>
            </Line>

            <Line direction='column' divider>
              <Item size='small' elevation={1}>Item 1</Item>
              <Item size='regular' elevation={1}>Item 114</Item>
              <Item size='large' elevation={1}>Item 1114</Item>
            </Line>
          </div>
        </Accordion>

        <Accordion label='Line direction' open>
          <div className={classNames([classes.column])}>
            <Line direction='row'>
              <Item size='small' elevation={1}>Item 1</Item>
              <Item size='regular' elevation={1}>Item 114</Item>
              <Item size='large' elevation={1}>Item 1114</Item>
            </Line>

            <Line direction='row-reverse'>
              <Item size='small' elevation={1}>Item 1</Item>
              <Item size='regular' elevation={1}>Item 114</Item>
              <Item size='large' elevation={1}>Item 1114</Item>
            </Line>

            <Line direction='column'>
              <Item size='small' elevation={1}>Item 1</Item>
              <Item size='regular' elevation={1}>Item 114</Item>
              <Item size='large' elevation={1}>Item 1114</Item>
            </Line>

            <Line direction='column-reverse'>
              <Item size='small' elevation={1}>Item 1</Item>
              <Item size='regular' elevation={1}>Item 114</Item>
              <Item size='large' elevation={1}>Item 1114</Item>
            </Line>
          </div>
        </Accordion>

        <Accordion label='Line align' open>
          <Accordion label='Line align row' open>
            <div className={classNames([classes.column])}>
              <Line direction='row' align='flex-start'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' align='center'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' align='flex-end'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' align='baseline'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' align='stretch'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>
            </div>
          </Accordion>

          <Accordion label='Line align column' open>
            <div className={classNames([classes.column])}>
              <Line direction='column' align='flex-start'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' align='center'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' align='flex-end'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' align='baseline'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' align='stretch'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>
            </div>
          </Accordion>
        </Accordion>

        <Accordion label='Line justify' open>
          <Accordion label='Line justify row' open>
            <div className={classNames([classes.column])}>
              <Line direction='row' justify='flex-start'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' justify='center'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' justify='flex-end'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' justify='space-around'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' justify='space-between'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' justify='space-evenly'>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>
            </div>
          </Accordion>

          <Accordion label='Line justify column' open>
            <div className={classNames([classes.column])}>
              <Line direction='column' justify='flex-start' style={{ height: 400, background: '#fafafa' }}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' justify='center' style={{ height: 400, background: '#fafafa' }}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' justify='flex-end' style={{ height: 400, background: '#fafafa' }}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' justify='space-around' style={{ height: 400, background: '#fafafa' }}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' justify='space-between' style={{ height: 400, background: '#fafafa' }}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' justify='space-evenly' style={{ height: 400, background: '#fafafa' }}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>
            </div>
          </Accordion>
        </Accordion>

        <Accordion label='Line gap' open>
          <Accordion label='Line gap row' open>
            <div className={classNames([classes.column])}>
              <Line direction='row' gap={0}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' gap={0.5}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' gap={1}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' gap={2}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' gap={3}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' gap={4}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' gap={8}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' gap={12}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' gap={16}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' gap={17}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>
            </div>
          </Accordion>

          <Accordion label='Line gap column' open>
            <div className={classNames([classes.column])}>
              <Line direction='column' gap={0}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' gap={0.5}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' gap={1}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' gap={2}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' gap={3}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' gap={4}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' gap={8}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' gap={12}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' gap={16}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' gap={17}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>
            </div>
          </Accordion>
        </Accordion>

        <Accordion label='Line rowGap' open>
          <Accordion label='Line rowGap row' open>
            <div className={classNames([classes.column])}>
              <Line direction='row' rowGap={0}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' rowGap={0.5}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' rowGap={1}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' rowGap={2}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' rowGap={3}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' rowGap={4}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' rowGap={8}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' rowGap={12}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' rowGap={16}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' rowGap={17}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>
            </div>
          </Accordion>

          <Accordion label='Line rowGap column' open>
            <div className={classNames([classes.column])}>
              <Line direction='column' rowGap={0}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' rowGap={0.5}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' rowGap={1}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' rowGap={2}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' rowGap={3}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' rowGap={4}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' rowGap={8}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' rowGap={12}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' rowGap={16}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' rowGap={17}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>
            </div>
          </Accordion>
        </Accordion>

        <Accordion label='Line columnGap' open>
          <Accordion label='Line columnGap row' open>
            <div className={classNames([classes.column])}>
              <Line direction='row' columnGap={0}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' columnGap={0.5}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' columnGap={1}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' columnGap={2}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' columnGap={3}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' columnGap={4}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' columnGap={8}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' columnGap={12}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' columnGap={16}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='row' columnGap={17}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>
            </div>
          </Accordion>

          <Accordion label='Line columnGap column' open>
            <div className={classNames([classes.column])}>
              <Line direction='column' columnGap={0}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' columnGap={0.5}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' columnGap={1}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' columnGap={2}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' columnGap={3}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' columnGap={4}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' columnGap={8}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' columnGap={12}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' columnGap={16}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>

              <Line direction='column' columnGap={17}>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </Line>
            </div>
          </Accordion>
        </Accordion>

        <Accordion label='Line values per breakpoint value' open>
          <div className={classNames([classes.column])}>
            <Line align={{ sm: 'center', lg: 'flex-end' }}>
              <Item size='small' elevation={1}>Item 1</Item>
              <Item size='regular' elevation={1}>Item 114</Item>
              <Item size='large' elevation={1}>Item 1114</Item>
            </Line>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme'>
          <div className={classNames([classes.column])}>
            <Line>
              <Item size='small' elevation={1}>Item 1</Item>
              <Item size='regular' elevation={1}>Item 114</Item>
              <Item size='large' elevation={1}>Item 1114</Item>
            </Line>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Line>
                  <Item size='small' elevation={1}>Item 1</Item>
                  <Item size='regular' elevation={1}>Item 114</Item>
                  <Item size='large' elevation={1}>Item 1114</Item>
                </Line>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiLine: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: '0.4'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Line>
                  <Item size='small' elevation={1}>Item 1</Item>
                  <Item size='regular' elevation={1}>Item 114</Item>
                  <Item size='large' elevation={1}>Item 1114</Item>
                </Line>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiLine: {
                        style: {
                          override: {
                            root: {
                              display: 'flex',
                              width: '100%',
                              cursor: 'pointer',
                              background: '#f7f7f7'
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Line>
                  <Item size='small' elevation={1}>Item 1</Item>
                  <Item size='regular' elevation={1}>Item 114</Item>
                  <Item size='large' elevation={1}>Item 1114</Item>
                </Line>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiLine: {
                        props: {
                          default: {
                            gap: 4
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Line>
                  <Item size='small' elevation={1}>Item 1</Item>
                  <Item size='regular' elevation={1}>Item 114</Item>
                  <Item size='large' elevation={1}>Item 1114</Item>
                </Line>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Line>
                <Item size='small' elevation={1}>Item 1</Item>
                <Item size='regular' elevation={1}>Item 114</Item>
                <Item size='large' elevation={1}>Item 1114</Item>
              </styled.Line>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Container'>
        <Accordion label='Container' open>
          <div className={classNames([classes.column])}>
            <Container>
              <Box14 />
            </Container>
          </div>
        </Accordion>

        <Accordion label='Container alignment' open>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Container alignment='start'>
              <Box14 />
            </Container>

            <Container alignment='center'>
              <Box14 />
            </Container>

            <Container alignment='end'>
              <Box14 />
            </Container>
          </div>
        </Accordion>

        <Accordion label='Container fullWidth' open>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Container fullWidth>
              <Box14 />
            </Container>
          </div>
        </Accordion>

        <Accordion label='Container paddingHorizontal' open>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Container paddingHorizontal='both'>
              <Box14 />
            </Container>

            <Container paddingHorizontal='start'>
              <Box14 />
            </Container>

            <Container paddingHorizontal='end'>
              <Box14 />
            </Container>

            <Container paddingHorizontal='none'>
              <Box14 />
            </Container>
          </div>
        </Accordion>

        <Accordion label='Container paddingVertical' open>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Container paddingVertical='both'>
              <Box14 />
            </Container>

            <Container paddingVertical='start'>
              <Box14 />
            </Container>

            <Container paddingVertical='end'>
              <Box14 />
            </Container>

            <Container paddingVertical='none'>
              <Box14 />
            </Container>
          </div>
        </Accordion>

        <Accordion label='Container maxWidth' open>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Container maxWidth='xxs'>
              <Box14 />
            </Container>

            <Container maxWidth='xs'>
              <Box14 />
            </Container>

            <Container maxWidth='sm'>
              <Box14 />
            </Container>

            <Container maxWidth='rg'>
              <Box14 />
            </Container>

            <Container maxWidth='lg'>
              <Box14 />
            </Container>

            <Container maxWidth='xl'>
              <Box14 />
            </Container>

            <Container maxWidth='xxl'>
              <Box14 />
            </Container>

            <Container maxWidth='unset'>
              <Box14 />
            </Container>

            <Container maxWidth='440px'>
              <Box14 />
            </Container>
          </div>
        </Accordion>

        <Accordion label='Container values per breakpoint value' open>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Container maxWidth={{ sm: 'sm', lg: 'lg' }}>
              <Box14 />
            </Container>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme'>
          <div className={classNames([classes.column])}>
            <Container>
              <Box14 />
            </Container>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Container>
                  <Box14 />
                </Container>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiContainer: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: '0.4'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Container>
                  <Box14 />
                </Container>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiContainer: {
                        style: {
                          override: {
                            root: {
                              display: 'flex',
                              width: '100%',
                              cursor: 'pointer',
                              background: '#f7f7f7'
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Container>
                  <Box14 />
                </Container>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiContainer: {
                        props: {
                          default: {
                            Component: 'main'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Container>
                  <Box14 />
                </Container>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Container>
                <Box14 />
              </styled.Container>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Box'>
        <Accordion label='Box' open>
          <div className={classNames([classes.column])}>
            <Box1 />
          </div>
        </Accordion>

        <Accordion label='Box multiple' open>
          <div className={classNames([classes.row])} style={{ gap: 14 }}>
            <Box1 />

            <Box1 />

            <Box1 />
          </div>
        </Accordion>

        <Accordion label='AmauiTheme'>
          <div className={classNames([classes.column])}>
            <Box1 />

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Box1 />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiBox: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: '0.7 !important'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Box1 />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiBox: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              cursor: 'pointer',
                              padding: '4px 7px',
                              background: '#f7f7f7'
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Box1 />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiBox: {
                        props: {
                          default: {
                            Component: 'main'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Box1 />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <BoxStyled />
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Rating'>
        <Accordion label='Rating' open>
          <div className={classNames([classes.column])}>
            <Rating />
          </div>
        </Accordion>

        <Accordion label='Rating values' open>
          <div className={classNames([classes.column])}>
            <Rating values={7} />
          </div>
        </Accordion>

        <Accordion label='Rating precision' open>
          <div className={classNames([classes.column])}>
            <Rating precision={0.25} />
            <Rating precision={0.5} />
            <Rating precision={0.75} />
            <Rating precision={1} />
          </div>
        </Accordion>

        <Accordion label='Rating sizes' open>
          <div className={classNames([classes.column])} style={{ gap: 14 }}>
            <Rating size='small' />
            <Rating size='regular' />
            <Rating size='large' />
          </div>
        </Accordion>

        <Accordion label='Rating colorInactive' open>
          <div className={classNames([classes.column])}>
            <Rating colorInactive='default' valueDefault={3} />
            <Rating colorInactive='primary' valueDefault={3} />
            <Rating colorInactive='secondary' valueDefault={3} />
            <Rating colorInactive='tertiary' valueDefault={3} />
            <Rating colorInactive='quaternary' valueDefault={3} />
            <Rating colorInactive='info' valueDefault={3} />
            <Rating colorInactive='success' valueDefault={3} />
            <Rating colorInactive='error' valueDefault={3} />
            <Rating colorInactive='warning' valueDefault={3} />
            <Rating colorInactive='neutral' valueDefault={3} />
            <Rating colorInactive='#f5d758' valueDefault={3} />
          </div>
        </Accordion>

        <Accordion label='Rating color' open>
          <div className={classNames([classes.column])}>
            <Rating color='default' valueDefault={3} />
            <Rating color='primary' valueDefault={3} />
            <Rating color='secondary' valueDefault={3} />
            <Rating color='tertiary' valueDefault={3} />
            <Rating color='quaternary' valueDefault={3} />
            <Rating color='info' valueDefault={3} />
            <Rating color='success' valueDefault={3} />
            <Rating color='error' valueDefault={3} />
            <Rating color='warning' valueDefault={3} />
            <Rating color='neutral' valueDefault={3} />
            <Rating color='#f5d758' valueDefault={3} />
          </div>
        </Accordion>

        <Accordion label='Rating color tonal' open>
          <div className={classNames([classes.column])}>
            <Rating tonal color='primary' valueDefault={3} />
            <Rating tonal color='secondary' valueDefault={3} />
            <Rating tonal color='tertiary' valueDefault={3} />
            <Rating tonal color='quaternary' valueDefault={3} />
            <Rating tonal color='info' valueDefault={3} />
            <Rating tonal color='success' valueDefault={3} />
            <Rating tonal color='error' valueDefault={3} />
            <Rating tonal color='warning' valueDefault={3} />
            <Rating tonal color='neutral' valueDefault={3} />
            <Rating tonal color='#f5d758' valueDefault={3} />
          </div>
        </Accordion>

        <Accordion label='Rating valueDefault' open>
          <div className={classNames([classes.column])}>
            <Rating color='secondary' valueDefault={3} />
          </div>
        </Accordion>

        <Accordion label='Rating controlled value' open>
          <div className={classNames([classes.column])}>
            <Rating
              onChange={(value: number) => updatePure(value, 'rating')}

              value={a.rating}
            />
          </div>
        </Accordion>

        <Accordion label='Rating custom icons' open>
          <div className={classNames([classes.column])}>
            <Rating
              icons={{
                1: { icon: <IconMaterialSentimentDissatisfiedRounded color='warning' /> },
                2: { icon: <IconMaterialSentimentNeutralRounded color='default' /> },
                3: { icon: <IconMaterialSentimentSatisfiedRounded color='success' /> }
              }}

              values={3}

              onlyValue
            />
          </div>
        </Accordion>

        <Accordion label='Rating onlyValue' open>
          <div className={classNames([classes.column])}>
            <Rating valueDefault={3} onlyValue />

            <Rating precision={0.5} valueDefault={3} onlyValue />
          </div>
        </Accordion>

        <Accordion label='Rating readOnly' open>
          <div className={classNames([classes.column])}>
            <Rating valueDefault={3} readOnly />
          </div>
        </Accordion>

        <Accordion label='Rating disabled' open>
          <div className={classNames([classes.column])}>
            <Rating valueDefault={3} disabled />
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <Rating color='secondary' />

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Rating color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiRating: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Rating color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiRating: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              cursor: 'pointer',
                              padding: '4px 7px',
                              background: '#f7f7f7'
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Rating color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiRating: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Rating />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Rating />
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='AutoComplete'>
        <Accordion label='AutoComplete' open>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name }))}

            color='secondary'
          />
        </Accordion>

        <Accordion label='AutoComplete multiple' open>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name }))}

            color='secondary'

            multiple
          />
        </Accordion>

        <Accordion label='AutoComplete multiple chip' open>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name }))}

            color='secondary'

            chip

            multiple
          />
        </Accordion>

        <Accordion label='AutoComplete multiple limit' open>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name }))}

            color='secondary'

            limit={4}

            chip

            multiple
          />
        </Accordion>

        <Accordion label='AutoComplete groupBy' open>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name, letter: item.name.charAt(0) }))}

            groupBy={(item: any) => item?.letter}

            color='secondary'
          />
        </Accordion>

        <Accordion label='AutoComplete filterOutSelectedOptions' open>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name }))}

            color='secondary'

            multiple

            filterOutSelectedOptions
          />
        </Accordion>

        <Accordion label='AutoComplete loading' open>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name }))}

            color='secondary'

            loading
          />
        </Accordion>

        <Accordion label='AutoComplete autoSelectOnBlur' open>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name }))}

            color='secondary'

            autoSelectOnBlur
          />
        </Accordion>

        <Accordion label='AutoComplete noOptions' open>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name }))}

            color='secondary'

            noOptions={false}
          />
        </Accordion>

        <Accordion label='AutoComplete blurOnSelect' open>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name }))}

            color='secondary'

            blurOnSelect
          />
        </Accordion>

        <Accordion label='AutoComplete clearOnEscape' open>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name }))}

            color='secondary'

            clearOnEscape
          />
        </Accordion>

        <Accordion label='AutoComplete closeOnSelect' open>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name }))}

            color='secondary'

            closeOnSelect={false}
          />
        </Accordion>

        <Accordion label='AutoComplete openOnFocus' open>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name }))}

            color='secondary'

            openOnFocus={false}
          />
        </Accordion>

        <Accordion label='AutoComplete clearOnBlur' open>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name }))}

            color='secondary'

            clearOnBlur
          />
        </Accordion>

        <Accordion label='AutoComplete selectOnFocus' open>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name }))}

            color='secondary'

            selectOnFocus
          />
        </Accordion>

        <Accordion label='AutoComplete countries'>
          <AutoComplete
            label='Items'

            options={countries.map(item => ({ label: item.name, flag: item.flag }))}

            renderOption={(item: any, index: number, props: any) => (
              <ListItem
                key={index}

                start={item.flag}

                startAlign='center'

                {...props}
              />
            )}

            color='secondary'
          />
        </Accordion>

        <Accordion label='AutoComplete versions'>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <AutoComplete
              label='Items'

              version='text'

              color='secondary'

              options={countries.map(item => ({ label: item.name }))}
            />

            <AutoComplete
              label='Items'

              version='filled'

              color='secondary'

              options={countries.map(item => ({ label: item.name }))}
            />

            <AutoComplete
              label='Items'

              version='outlined'

              color='secondary'

              options={countries.map(item => ({ label: item.name }))}
            />
          </div>
        </Accordion>

        <Accordion label='AutoComplete sizes'>
          <Accordion label='AutoComplete small' open>
            <div className={classNames([classes.column])} style={{ gap: 24 }}>
              <AutoComplete
                size='small'

                label='Items'

                version='text'

                color='secondary'

                options={countries.map(item => ({ label: item.name }))}
              />

              <AutoComplete
                size='small'

                label='Items'

                version='filled'

                color='secondary'

                options={countries.map(item => ({ label: item.name }))}
              />

              <AutoComplete
                size='small'

                label='Items'

                version='outlined'

                color='secondary'

                options={countries.map(item => ({ label: item.name }))}
              />
            </div>
          </Accordion>

          <Accordion label='AutoComplete regular' open>
            <div className={classNames([classes.column])} style={{ gap: 24 }}>
              <AutoComplete
                size='regular'

                label='Items'

                version='text'

                color='secondary'

                options={countries.map(item => ({ label: item.name }))}
              />

              <AutoComplete
                size='regular'

                label='Items'

                version='filled'

                color='secondary'

                options={countries.map(item => ({ label: item.name }))}
              />

              <AutoComplete
                size='regular'

                label='Items'

                version='outlined'

                color='secondary'

                options={countries.map(item => ({ label: item.name }))}
              />
            </div>
          </Accordion>

          <Accordion label='AutoComplete large' open>
            <div className={classNames([classes.column])} style={{ gap: 24 }}>
              <AutoComplete
                size='large'

                label='Items'

                version='text'

                color='secondary'

                options={countries.map(item => ({ label: item.name }))}
              />

              <AutoComplete
                size='large'

                label='Items'

                version='filled'

                color='secondary'

                options={countries.map(item => ({ label: item.name }))}
              />

              <AutoComplete
                size='large'

                label='Items'

                version='outlined'

                color='secondary'

                options={countries.map(item => ({ label: item.name }))}
              />
            </div>
          </Accordion>
        </Accordion>

        <Accordion label='AutoComplete helper text'>
          <AutoComplete
            label='Items'

            helperText='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more of it.'

            color='secondary'

            options={countries.map(item => ({ label: item.name }))}
          />
        </Accordion>

        <Accordion label='AutoComplete with start and end icons'>
          <AutoComplete
            label='Items'

            version='text'

            startIcon={<IconMaterialCheckRounded />}

            endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>}

            color='secondary'

            options={countries.map(item => ({ label: item.name }))}
          />

          <AutoComplete
            label='Items'

            version='filled'

            startIcon={<IconMaterialCheckRounded />}

            endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>}

            color='secondary'

            options={countries.map(item => ({ label: item.name }))}
          />

          <AutoComplete
            label='Items'

            version='outlined'

            startIcon={<IconMaterialCheckRounded />}

            endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>}

            color='secondary'

            options={countries.map(item => ({ label: item.name }))}
          />
        </Accordion>

        <Accordion label='AutoComplete with prefix and sufix'>
          <AutoComplete
            label='Items'

            version='text'

            prefix='mm'

            sufix='lbs'

            color='secondary'

            options={countries.map(item => ({ label: item.name }))}
          />

          <AutoComplete
            label='Items'

            version='filled'

            prefix='mm'

            sufix='lbs'

            color='secondary'

            options={countries.map(item => ({ label: item.name }))}
          />

          <AutoComplete
            label='Items'

            version='outlined'

            prefix='mm'

            sufix='lbs'

            color='secondary'

            options={countries.map(item => ({ label: item.name }))}
          />
        </Accordion>

        <Accordion label='AutoComplete readOnly'>
          <AutoComplete
            label='Items'

            valueDefault='Item 1'

            color='secondary'

            readOnly

            options={countries.map(item => ({ label: item.name }))}
          />
        </Accordion>

        <Accordion label='AutoComplete disabled'>
          <AutoComplete
            label='Items'

            valueDefault='Item 1'

            color='secondary'

            disabled

            options={countries.map(item => ({ label: item.name }))}
          />
        </Accordion>

        <Accordion label='AutoComplete controlled'>
          <AutoComplete
            label='Items'

            valueDefault='Item 1'

            value={a.autocomplete}

            onChange={(value: any) => setA((items: any) => ({ ...items, autocomplete: value }))}

            color='secondary'

            options={countries.map(item => ({ label: item.name }))}
          />
        </Accordion>

        <Accordion label='AmauiTheme'>
          <div
            className={classNames([classes.column])}

            style={{
              width: '100%'
            }}
          >
            <AutoComplete
              label='Items'

              options={countries.map(item => ({ label: item.name }))}

              color='secondary'
            />

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <AutoComplete
                  label='Items'

                  options={countries.map(item => ({ label: item.name }))}

                  color='secondary'
                />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiAutoComplete: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <AutoComplete
                  label='Items'

                  options={countries.map(item => ({ label: item.name }))}

                  color='secondary'
                />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiAutoComplete: {
                        style: {
                          override: {
                            root: {
                              width: '100%',
                              flex: 'unset',
                              height: 44
                            }
                          }
                        }
                      }
                    }
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <AutoComplete
                  label='Items'

                  options={countries.map(item => ({ label: item.name }))}

                  color='secondary'
                />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiAutoComplete: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <AutoComplete
                  label='Items'

                  options={countries.map(item => ({ label: item.name }))}
                />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.AutoComplete
                label='Items'

                options={countries.map(item => ({ label: item.name }))}
              />
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Select'>
        <Accordion label='Select' open>
          <Select
            label='Items'

            color='secondary'
          >
            {[1, 3, 4].map(item => (
              <ListItem
                button

                primary={`Item ${item}`}

                value={item}

                key={item}
              />
            ))}
          </Select>
        </Accordion>

        <Accordion label='Select multiple' open>
          <Select
            label='Items'

            color='secondary'

            multiple
          >
            {[1, 3, 4].map(item => (
              <ListItem
                button

                primary={`Item ${item}`}

                value={item}

                key={item}
              />
            ))}
          </Select>
        </Accordion>

        <Accordion label='Select multiple chip' open>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Select
              label='Items'

              color='secondary'

              version='text'

              multiple

              chip
            >
              {[1, 3, 4, 5, 7].map(item => (
                <ListItem
                  button

                  primary={`Item ${item}`}

                  value={item}

                  key={item}
                />
              ))}
            </Select>

            <Select
              label='Items'

              color='secondary'

              version='filled'

              multiple

              chip
            >
              {[1, 3, 4, 5, 7].map(item => (
                <ListItem
                  button

                  primary={`Item ${item}`}

                  value={item}

                  key={item}
                />
              ))}
            </Select>

            <Select
              label='Items'

              color='secondary'

              version='outlined'

              multiple

              chip
            >
              {[1, 3, 4, 5, 7].map(item => (
                <ListItem
                  button

                  primary={`Item ${item}`}

                  value={item}

                  key={item}
                />
              ))}
            </Select>
          </div>
        </Accordion>

        <Accordion label='Select multiple checkboxes' open>
          <Select
            label='Items'

            color='secondary'

            value={selected}

            onChange={(value_: any) => setSelected(value_)}

            multiple
          >
            {[1, 3, 4].map((item: any) => (
              <ListItem
                button

                primary={`Item ${item}`}

                start={(
                  <Checkbox value={selected.includes(item)} />
                )}

                value={item}

                key={item}
              />
            ))}
          </Select>
        </Accordion>

        <Accordion label='Select versions'>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Select
              label='Items'

              version='text'

              color='secondary'
            >
              {[1, 3, 4].map(item => (
                <ListItem
                  button

                  primary={`Item ${item}`}

                  value={item}

                  key={item}
                />
              ))}
            </Select>

            <Select
              label='Items'

              version='filled'

              color='secondary'
            >
              {[1, 3, 4].map(item => (
                <ListItem
                  button

                  primary={`Item ${item}`}

                  value={item}

                  key={item}
                />
              ))}
            </Select>

            <Select
              label='Items'

              version='outlined'

              color='secondary'
            >
              {[1, 3, 4].map(item => (
                <ListItem
                  button

                  primary={`Item ${item}`}

                  value={item}

                  key={item}
                />
              ))}
            </Select>
          </div>
        </Accordion>

        <Accordion label='Select sizes'>
          <Accordion label='Select small' open>
            <div className={classNames([classes.column])} style={{ gap: 24 }}>
              <Select
                size='small'

                label='Items'

                version='text'

                color='secondary'
              >
                {[1, 3, 4].map(item => (
                  <ListItem
                    button

                    primary={`Item ${item}`}

                    value={item}

                    key={item}
                  />
                ))}
              </Select>

              <Select
                size='small'

                label='Items'

                version='filled'

                color='secondary'
              >
                {[1, 3, 4].map(item => (
                  <ListItem
                    button

                    primary={`Item ${item}`}

                    value={item}

                    key={item}
                  />
                ))}
              </Select>

              <Select
                size='small'

                label='Items'

                version='outlined'

                color='secondary'
              >
                {[1, 3, 4].map(item => (
                  <ListItem
                    button

                    primary={`Item ${item}`}

                    value={item}

                    key={item}
                  />
                ))}
              </Select>
            </div>
          </Accordion>

          <Accordion label='Select regular' open>
            <div className={classNames([classes.column])} style={{ gap: 24 }}>
              <Select
                size='regular'

                label='Items'

                version='text'

                color='secondary'
              >
                {[1, 3, 4].map(item => (
                  <ListItem
                    button

                    primary={`Item ${item}`}

                    value={item}

                    key={item}
                  />
                ))}
              </Select>

              <Select
                size='regular'

                label='Items'

                version='filled'

                color='secondary'
              >
                {[1, 3, 4].map(item => (
                  <ListItem
                    button

                    primary={`Item ${item}`}

                    value={item}

                    key={item}
                  />
                ))}
              </Select>

              <Select
                size='regular'

                label='Items'

                version='outlined'

                color='secondary'
              >
                {[1, 3, 4].map(item => (
                  <ListItem
                    button

                    primary={`Item ${item}`}

                    value={item}

                    key={item}
                  />
                ))}
              </Select>
            </div>
          </Accordion>

          <Accordion label='Select large' open>
            <div className={classNames([classes.column])} style={{ gap: 24 }}>
              <Select
                size='large'

                label='Items'

                version='text'

                color='secondary'
              >
                {[1, 3, 4].map(item => (
                  <ListItem
                    button

                    primary={`Item ${item}`}

                    value={item}

                    key={item}
                  />
                ))}
              </Select>

              <Select
                size='large'

                label='Items'

                version='filled'

                color='secondary'
              >
                {[1, 3, 4].map(item => (
                  <ListItem
                    button

                    primary={`Item ${item}`}

                    value={item}

                    key={item}
                  />
                ))}
              </Select>

              <Select
                size='large'

                label='Items'

                version='outlined'

                color='secondary'
              >
                {[1, 3, 4].map(item => (
                  <ListItem
                    button

                    primary={`Item ${item}`}

                    value={item}

                    key={item}
                  />
                ))}
              </Select>
            </div>
          </Accordion>
        </Accordion>

        <Accordion label='Select helper text' open>
          <Select
            label='Items'

            helperText='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more of it.'

            color='secondary'
          >
            {[1, 3, 4].map(item => (
              <ListItem
                button

                primary={`Item ${item}`}

                value={item}

                key={item}
              />
            ))}
          </Select>
        </Accordion>

        <Accordion label='Select with start and end icons' open>
          <Select
            label='Items'

            version='text'

            startIcon={<IconMaterialCheckRounded />}

            endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>}

            color='secondary'
          >
            {[1, 3, 4].map(item => (
              <ListItem
                button

                primary={`Item ${item}`}

                value={item}

                key={item}
              />
            ))}
          </Select>

          <Select
            label='Items'

            version='filled'

            startIcon={<IconMaterialCheckRounded />}

            endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>}

            color='secondary'
          >
            {[1, 3, 4].map(item => (
              <ListItem
                button

                primary={`Item ${item}`}

                value={item}

                key={item}
              />
            ))}
          </Select>

          <Select
            label='Items'

            version='outlined'

            startIcon={<IconMaterialCheckRounded />}

            endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>}

            color='secondary'
          >
            {[1, 3, 4].map(item => (
              <ListItem
                button

                primary={`Item ${item}`}

                value={item}

                key={item}
              />
            ))}
          </Select>
        </Accordion>

        <Accordion label='Select with prefix and sufix' open>
          <Select
            label='Items'

            version='text'

            prefix='mm'

            sufix='lbs'

            color='secondary'
          >
            {[1, 3, 4].map(item => (
              <ListItem
                button

                primary={`Item ${item}`}

                value={item}

                key={item}
              />
            ))}
          </Select>

          <Select
            label='Items'

            version='filled'

            prefix='mm'

            sufix='lbs'

            color='secondary'
          >
            {[1, 3, 4].map(item => (
              <ListItem
                button

                primary={`Item ${item}`}

                value={item}

                key={item}
              />
            ))}
          </Select>

          <Select
            label='Items'

            version='outlined'

            prefix='mm'

            sufix='lbs'

            color='secondary'
          >
            {[1, 3, 4].map(item => (
              <ListItem
                button

                primary={`Item ${item}`}

                value={item}

                key={item}
              />
            ))}
          </Select>
        </Accordion>

        <Accordion label='Select readOnly' open>
          <Select
            label='Items'

            valueDefault='Item 1'

            color='secondary'

            readOnly
          >
            {[1, 3, 4].map(item => (
              <ListItem
                button

                primary={`Item ${item}`}

                value={item}

                key={item}
              />
            ))}
          </Select>
        </Accordion>

        <Accordion label='Select disabled' open>
          <Select
            label='Items'

            valueDefault='Item 1'

            color='secondary'

            disabled
          >
            {[1, 3, 4].map(item => (
              <ListItem
                button

                primary={`Item ${item}`}

                value={item}

                key={item}
              />
            ))}
          </Select>
        </Accordion>

        <Accordion label='Select controlled' open>
          <Select
            label='Items'

            valueDefault='Item 1'

            value={a.select}

            onChange={(value: any) => setA((items: any) => ({ ...items, select: value }))}

            color='secondary'
          >
            {[1, 3, 4].map(item => (
              <ListItem
                button

                primary={`Item ${item}`}

                value={item}

                key={item}
              />
            ))}
          </Select>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div
            className={classNames([classes.column])}

            style={{
              width: '100%'
            }}
          >
            <Select
              label='Items'

              color='secondary'
            >
              {[1, 3, 4].map(item => (
                <ListItem
                  button

                  primary={`Item ${item}`}

                  value={item}

                  key={item}
                />
              ))}
            </Select>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <Select
                  label='Items'

                  color='secondary'
                >
                  {[1, 3, 4].map(item => (
                    <ListItem
                      button

                      primary={`Item ${item}`}

                      value={item}

                      key={item}
                    />
                  ))}
                </Select>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiSelect: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <Select
                  label='Items'

                  color='secondary'
                >
                  {[1, 3, 4].map(item => (
                    <ListItem
                      button

                      primary={`Item ${item}`}

                      value={item}

                      key={item}
                    />
                  ))}
                </Select>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiSelect: {
                        style: {
                          override: {
                            root: {
                              width: '100%',
                              flex: 'unset',
                              height: 44
                            }
                          }
                        }
                      }
                    }
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <Select
                  label='Items'

                  color='secondary'
                >
                  {[1, 3, 4].map(item => (
                    <ListItem
                      button

                      primary={`Item ${item}`}

                      value={item}

                      key={item}
                    />
                  ))}
                </Select>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiSelect: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <Select
                  label='Items'
                >
                  {[1, 3, 4].map(item => (
                    <ListItem
                      button

                      primary={`Item ${item}`}

                      value={item}

                      key={item}
                    />
                  ))}
                </Select>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Select
                label='Items'
              >
                {[1, 3, 4].map(item => (
                  <ListItem
                    button

                    primary={`Item ${item}`}

                    value={item}

                    key={item}
                  />
                ))}
              </styled.Select>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Menu'>
        <Accordion label='Menu'>
          <div className={classNames([classes.column])}>
            <Button
              ref={refs.menu['1']}

              onClick={() => update('menu_1')}

              color='secondary'
            >
              Menu
            </Button>

            <Menu
              open={a.menu_1}

              onClose={() => setA((items: any) => ({ ...items, menu_1: false }))}

              anchorElement={refs.menu['1'].current}

              resetKeyboardNavigation
            >
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  button

                  primary={`Item ${item + 1}`}

                  disabled={item === 3}

                  key={item}
                />
              ))}
            </Menu>
          </div>
        </Accordion>

        <Accordion label='Menu position, alignment, transformOrigin and inset'>
          <div className={classNames([classes.column])}>
            <Button
              ref={refs.menu['2']}

              onClick={() => update('menu_2')}

              color='secondary'
            >
              Menu
            </Button>

            <Menu
              open={a.menu_2}

              onClose={() => setA((items: any) => ({ ...items, menu_2: false }))}

              anchorElement={refs.menu['2'].current}

              transformOrigin='top right'

              position='top'

              alignment='end'

              inset
            >
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  button

                  primary={`Item ${item + 1}`}

                  key={item}
                />
              ))}
            </Menu>
          </div>
        </Accordion>

        <Accordion label='Menu maxHeight'>
          <div className={classNames([classes.column])}>
            <Button
              ref={refs.menu['3']}

              onClick={() => update('menu_3')}

              color='secondary'
            >
              Menu
            </Button>

            <Menu
              open={a.menu_3}

              onClose={() => setA((items: any) => ({ ...items, menu_3: false }))}

              anchorElement={refs.menu['3'].current}

              transformOrigin='top right'

              ListProps={{
                style: {
                  maxHeight: 140,
                  overflow: 'auto'
                }
              }}
            >
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  button

                  primary={`Item ${item + 1}`}

                  key={item}
                />
              ))}
            </Menu>
          </div>
        </Accordion>

        <Accordion label='Menu with arrow'>
          <div className={classNames([classes.column])}>
            <Button
              ref={refs.menu['4']}

              onClick={() => update('menu_4')}

              color='secondary'
            >
              Menu
            </Button>

            <Menu
              open={a.menu_4}

              onClose={() => setA((items: any) => ({ ...items, menu_4: false }))}

              anchorElement={refs.menu['4'].current}

              transformOrigin='top right'

              position='bottom'

              alignment='end'

              arrow
            >
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  button

                  primary={`Item ${item + 1}`}

                  key={item}
                />
              ))}
            </Menu>
          </div>
        </Accordion>

        <Accordion label='Menu additional menu'>
          <div className={classNames([classes.column])}>
            <Button
              ref={refs.menu['5']}

              onClick={() => update('menu_5')}

              color='secondary'
            >
              View
            </Button>

            <Menu
              open={a.menu_5}

              onClose={() => setA((items: any) => ({ ...items, menu_5: false }))}

              anchorElement={refs.menu['5'].current}

              transformOrigin='left top'

              transformOriginSwitch='left bottom'

              transformOriginRtl='right top'

              transformOriginRtlSwitch='right bottom'

              position='bottom'

              alignment='start'

              ListProps={{
                color: 'secondary',

                style: {
                  minWidth: 320
                }
              }}
            >
              <ListItem
                button

                primary='Bold'

                end={(
                  <Type version='b2' color='secondary'>
                    ⌘B
                  </Type>
                )}
              />

              <ListItem
                button

                primary='Italic'

                end={(
                  <Type version='b2' color='secondary'>
                    ⌘I
                  </Type>
                )}
              />

              <ListItem
                button

                primary='Underline'

                end={(
                  <Type version='b2' color='secondary'>
                    ⌘U
                  </Type>
                )}
              />

              <ListItem
                button

                primary='Strikethrough'

                end={(
                  <Type version='b2' color='secondary'>
                    ⌘+Shift+X
                  </Type>
                )}
              />

              <ListItem
                button

                primary='Superscript'

                end={(
                  <Type version='b2' color='secondary'>
                    ⌘.
                  </Type>
                )}
              />

              <ListItem
                button

                primary='Subscript'

                end={(
                  <Type version='b2' color='secondary'>
                    ⌘,
                  </Type>
                )}

                menuCloseOnClick
              />

              <Divider
                Component='li'
              />

              <ListItem
                button

                primary='Paragraph styles'
              />

              <ListItem
                button

                primary='Align'
              />

              <ListItem
                button

                primary='Line spacing'

                MenuProps={{
                  ListProps: {
                    color: 'secondary',

                    style: {
                      minWidth: 320
                    }
                  }
                }}

                menu={[
                  <ListItem
                    inset

                    button

                    primary='Single'
                  />,

                  <ListItem
                    inset

                    button

                    primary='1.15'

                    menuCloseOnClick
                  />,

                  <ListItem
                    inset

                    button

                    primary='Double'
                  />,

                  <ListItem
                    button

                    primary='Custom: 1.2'

                    start={(
                      <IconMaterialCheckRounded />
                    )}
                  />,

                  <Divider
                    Component='li'
                  />,

                  <ListItem
                    button

                    primary='Add space before paragraph'
                  />,

                  <ListItem
                    button

                    primary='Add space after paragraph'
                  />,

                  <Divider
                    Component='li'
                  />,

                  <ListItem
                    button

                    primary='Custom spacing...'
                  />
                ]}
              />

              <ListItem
                button

                primary='Numbered lists'
              />

              <ListItem
                button

                primary='List options'
              />

              <Divider
                Component='li'
              />

              <ListItem
                button

                primary='Clear formating'

                end={(
                  <Type version='b2' color='secondary'>
                    ⌘/
                  </Type>
                )}
              />
            </Menu>
          </div>
        </Accordion>

        <Accordion label='Menu ListItem menuCloseOnClick'>
          <div className={classNames([classes.column])}>
            <Button
              ref={refs.menu['114']}

              onClick={() => update('menu_114')}

              color='secondary'
            >
              Menu
            </Button>

            <Menu
              open={a.menu_114}

              onClose={() => setA((items: any) => ({ ...items, menu_114: false }))}

              anchorElement={refs.menu['114'].current}
            >
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  key={item}

                  button

                  primary={`Item ${item + 1}`}

                  menuCloseOnClick={item === 3}
                />
              ))}
            </Menu>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Tooltip'>
        <Accordion label='Tooltip' open>
          <div className={classNames([classes.column])}>
            <Tooltip
              label='Label'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
          </div>
        </Accordion>

        <Accordion label='Tooltip positions and alignments'>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Tooltip
              label='Label'

              position='top'
              alignment='start'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              position='top'
              alignment='center'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              position='top'
              alignment='end'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              position='bottom'
              alignment='start'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              position='bottom'
              alignment='center'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              position='bottom'
              alignment='end'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              position='left'
              alignment='start'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              position='left'
              alignment='center'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              position='left'
              alignment='end'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              position='right'
              alignment='start'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              position='right'
              alignment='center'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              position='right'
              alignment='end'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
          </div>
        </Accordion>

        <Accordion label='Tooltip colors'>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Tooltip
              label='Label'

              color='default'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              color='primary'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              color='secondary'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              color='tertiary'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              color='quaternary'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              color='info'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              color='success'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              color='warning'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              color='error'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              color='neutral'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label='Label'

              color='#f5d758'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
          </div>
        </Accordion>

        <Accordion label='Tooltip tonal'>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Tooltip
              tonal

              label='Label'

              color='primary'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              tonal

              label='Label'

              color='secondary'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              tonal

              label='Label'

              color='tertiary'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              tonal

              label='Label'

              color='quaternary'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              tonal

              label='Label'

              color='info'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              tonal

              label='Label'

              color='success'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              tonal

              label='Label'

              color='warning'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              tonal

              label='Label'

              color='error'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              tonal

              label='Label'

              color='neutral'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              tonal

              label='Label'

              color='#f5d758'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
          </div>
        </Accordion>

        <Accordion label='Tooltip transitions' open>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Tooltip
              label='Label'

              TransitionComponent={Fade}
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>

            <Tooltip
              label='Label'

              TransitionComponent={Grow}
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>

            <Tooltip
              label='Label'

              TransitionComponent={Zoom}
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>

            <Tooltip
              label='Label'

              TransitionComponent={Slide}
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
          </div>
        </Accordion>

        <Accordion label='Tooltip arrow'>
          <div className={classNames([classes.column])}>
            <Tooltip
              arrow

              label='Label'

              position='top'
              alignment='start'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              arrow

              label='Label'

              position='top'
              alignment='center'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              arrow

              label='Label'

              position='top'
              alignment='end'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              arrow

              label='Label'

              position='bottom'
              alignment='start'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              arrow

              label='Label'

              position='bottom'
              alignment='center'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              arrow

              label='Label'

              position='bottom'
              alignment='end'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              arrow

              label='Label'

              position='left'
              alignment='start'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              arrow

              label='Label'

              position='left'
              alignment='center'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              arrow

              label='Label'

              position='left'
              alignment='end'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              arrow

              label='Label'

              position='right'
              alignment='start'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              arrow

              label='Label'

              position='right'
              alignment='center'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              arrow

              label='Label'

              position='right'
              alignment='end'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
          </div>
        </Accordion>

        <Accordion label='Tooltip follow' open>
          <div className={classNames([classes.column])}>
            <Tooltip
              label='Label'

              follow
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
          </div>
        </Accordion>

        <Accordion label='Tooltip disableInteractive' open>
          <div className={classNames([classes.column])}>
            <Tooltip
              label='Label'

              disableInteractive
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
          </div>
        </Accordion>

        <Accordion label='Tooltip maxWidth' open>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Tooltip
              label={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}

              position='bottom'
              alignment='center'

              maxWidth='xxs'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}

              position='bottom'
              alignment='center'

              maxWidth='xs'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}

              position='bottom'
              alignment='center'

              maxWidth='sm'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}

              position='bottom'
              alignment='center'

              maxWidth='rg'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}

              position='bottom'
              alignment='center'

              maxWidth='lg'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}

              position='bottom'
              alignment='center'

              maxWidth='xl'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
            <Tooltip
              label={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}

              position='bottom'
              alignment='center'

              maxWidth='xxl'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
          </div>
        </Accordion>

        <Accordion label='Tooltip fullWidth' open>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Tooltip
              label={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}

              position='bottom'
              alignment='center'

              fullWidth
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
          </div>
        </Accordion>

        <Accordion label='Tooltip controlled' open>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Button onClick={() => update('tooltip')} version='outlined' color='secondary'>a</Button>

            <Tooltip
              label='Label'

              open={a.tooltip}

              onOpen={onOpen}
              onClose={onClose}
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
          </div>
        </Accordion>

        <Accordion label='Tooltip label element value y' open>
          <div className={classNames([classes.column])}>
            <Tooltip
              label={(
                <p
                  style={{
                    padding: '4px 8px',
                    color: 'darkgreen',
                    background: '#fafafa',
                    borderRadius: 4,
                    boxShadow: '0px 3px 7px 0px #ddd',
                    fontSize: 11.4
                  }}
                >
                  Label
                </p>
              )}
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <Tooltip
              label='Label'

              color='secondary'
            >
              <Button color='secondary'>Append</Button>
            </Tooltip>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Tooltip
                  label='Label'

                  color='secondary'
                >
                  <Button color='secondary'>Append</Button>
                </Tooltip>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiTooltip: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Tooltip
                  label='Label'

                  color='secondary'
                >
                  <Button color='secondary'>Append</Button>
                </Tooltip>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiTooltip: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 37
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Tooltip
                  label='Label'

                  color='secondary'
                >
                  <Button color='secondary'>Append</Button>
                </Tooltip>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiTooltip: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Tooltip
                  label='Label'
                >
                  <Button color='secondary'>Append</Button>
                </Tooltip>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Tooltip
                label='Label'
              >
                <Button color='secondary'>Append</Button>
              </styled.Tooltip>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Append'>
        <div className={classNames([classes.column])} style={{ gap: 44 }}>
          <Accordion label='Append'>
            <div className={classNames([classes.column])}>
              <Accordion label='Append inset'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <Append position='bottom' alignment='start' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <Append position='bottom' alignment='start'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append portal'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <Append position='bottom' alignment='start' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append scroll container'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top'
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left'
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right'
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom'
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append scroll container portal'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' portal
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' portal
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' portal
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' portal
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append unfollow'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <Append position='bottom' alignment='start' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append unfollow portal'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <Append position='bottom' alignment='start' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append unfollow scroll container'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append unfollow scroll container portal'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' portal unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' portal unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' portal unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' portal unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
          </Accordion>

          <Accordion label='Append with offset and padding'>
            <div className={classNames([classes.column])}>
              <Accordion label='Append inset'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <Append position='bottom' alignment='start' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <Append position='bottom' alignment='start' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append portal'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <Append position='bottom' alignment='start' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append scroll container'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' alignment='start' offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' alignment='start' offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' alignment='start' offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' alignment='start' offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append scroll container portal'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' portal offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' portal offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' portal offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' portal offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append unfollow'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <Append position='bottom' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append unfollow portal'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <Append position='bottom' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append unfollow scroll container'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append unfollow scroll container portal'>
                <div className={classNames([classes.column])} style={{ gap: 74 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' portal unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' portal unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' portal unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' portal unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
          </Accordion>

          <Accordion label='Append with container padding'>
            <div className={classNames([classes.column])}>
              <Accordion label='Append inset'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append position='bottom' alignment='start' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' inset
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append position='bottom' alignment='start'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end'
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append portal'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append position='bottom' alignment='start' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' portal
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append scroll container'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top'
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left'
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right'
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom'
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append scroll container portal'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' portal
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' portal
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' portal
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' portal
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append unfollow'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append position='bottom' alignment='start' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append unfollow portal'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append position='bottom' alignment='start' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' portal unfollow
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append unfollow scroll container'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append unfollow scroll container portal'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' portal unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' portal unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' portal unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' portal unfollow
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
          </Accordion>

          <Accordion label='Append with container padding and with offset and padding'>
            <div className={classNames([classes.column])}>
              <Accordion label='Append inset'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append position='bottom' alignment='start' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append position='bottom' alignment='start' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append portal'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append position='bottom' alignment='start' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append scroll container'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append scroll container portal'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' portal offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' portal offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' portal offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' portal offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append unfollow'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append position='bottom' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append unfollow with paddingUnfollow'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append position='bottom' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append unfollow portal'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append position='bottom' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append unfollow portal with paddingUnfollow'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append position='bottom' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='bottom' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='top' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='left' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append position='right' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append unfollow scroll container'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append unfollow scroll container with paddingUnfollow'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append unfollow scroll container portal'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' portal unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' portal unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' portal unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' portal unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append unfollow scroll container portal with paddingUnfollow'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='top' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='left' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='right' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append position='bottom' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
          </Accordion>

          <Accordion label='Append with container padding and with offset and padding with switch'>
            <div className={classNames([classes.column])}>
              <Accordion label='Append inset'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append switch position='bottom' alignment='start' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='bottom' alignment='center' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='bottom' alignment='end' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='start' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='center' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='end' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='start' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='center' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='end' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='start' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='center' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='end' inset offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append switch position='bottom' alignment='start' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='bottom' alignment='center' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='bottom' alignment='end' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='start' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='center' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='end' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='start' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='center' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='end' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='start' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='center' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='end' offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append portal'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append switch position='bottom' alignment='start' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='bottom' alignment='center' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='bottom' alignment='end' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='start' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='center' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='end' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='start' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='center' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='end' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='start' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='center' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='end' portal offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append scroll container'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='top' offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='left' offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='right' offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='bottom' offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append scroll container portal'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='top' portal offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='left' portal offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='right' portal offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='bottom' portal offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append unfollow'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append switch position='bottom' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='bottom' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='bottom' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append unfollow with paddingUnfollow'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append switch position='bottom' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='bottom' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='bottom' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='start' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='center' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='end' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append unfollow portal'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append switch position='bottom' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='bottom' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='bottom' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append unfollow portal with paddingUnfollow'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <Append switch position='bottom' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='bottom' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='bottom' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='top' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='left' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='start' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='center' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>

                  <Append switch position='right' alignment='end' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                    element={(
                      <span className={classes.tooltip}>a</span>
                    )}
                  >
                    <Button color='secondary'>Append</Button>
                  </Append>
                </div>
              </Accordion>

              <Accordion label='Append unfollow scroll container'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='top' unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='left' unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='right' unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='bottom' unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append unfollow scroll container with paddingUnfollow'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='top' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='left' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='right' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='bottom' unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append unfollow scroll container portal'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='top' portal unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='left' portal unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='right' portal unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='bottom' portal unfollow offset={[14, 14]} padding={[7, 7]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion label='Append unfollow scroll container portal with paddingUnfollow'>
                <div className={classNames([classes.column])} style={{ gap: 74, padding: 40 }}>
                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='top' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='left' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='right' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>

                  <div style={{ overflow: 'auto', width: 140, height: 140, background: 'beige' }}>
                    <div style={{ height: 400, width: 400, padding: 340 }}>
                      <Append switch position='bottom' portal unfollow offset={[14, 14]} padding={[7, 7]} paddingUnfollow={[14, 14]}
                        element={(
                          <span className={classes.tooltip}>a</span>
                        )}
                      >
                        <Button color='secondary'>Append</Button>
                      </Append>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
          </Accordion>

          <Accordion label='Append resize'>
            <Accordion label='Append'>
              <div className={classNames([classes.column])} style={{ gap: 74 }}>
                <Append position='bottom' alignment='end'
                  element={(
                    <span className={classes.tooltip}>a</span>
                  )}
                >
                  <TextField
                    label='Multiline'
                    color='secondary'

                    multiline
                  />
                </Append>

                <Append position='bottom' alignment='end'
                  element={(
                    <span className={classes.tooltip}>a</span>
                  )}
                >
                  <textarea defaultValue='a' />
                </Append>
              </div>
            </Accordion>

            <Accordion label='Append portal'>
              <div className={classNames([classes.column])} style={{ gap: 74 }}>
                <Append position='bottom' alignment='end' portal
                  element={(
                    <span className={classes.tooltip}>a</span>
                  )}
                >
                  <TextField
                    label='Multiline'
                    color='secondary'

                    multiline
                  />
                </Append>

                <Append position='bottom' alignment='end'
                  element={(
                    <span className={classes.tooltip}>a</span>
                  )}
                >
                  <textarea defaultValue='a' />
                </Append>
              </div>
            </Accordion>
          </Accordion>

          <Accordion label='Append use case text select value'>
            <Accordion label='Append'>
              <div className={classNames([classes.column])} style={{ gap: 74 }}>
                <Type
                  onMouseUp={onMouseUp}
                >
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Type>

                <Append position='bottom' alignment='center'
                  anchor={anchor}

                  element={(
                    <span className={classes.tooltip}>a</span>
                  )}
                />
              </div>
            </Accordion>

            <Accordion label='Append portal'>
              <div className={classNames([classes.column])} style={{ gap: 74 }}>
                <Type
                  onMouseUp={onMouseUp}
                >
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Type>

                <Append position='bottom' alignment='center' portal
                  anchor={anchor}

                  element={(
                    <span className={classes.tooltip}>a</span>
                  )}
                />
              </div>
            </Accordion>
          </Accordion>

          <Accordion label='Append use case follow pointer value'>
            <Accordion label='Append'>
              <div className={classNames([classes.column])} style={{ gap: 74 }}>
                <Type
                  onMouseMove={onMouseMove}
                >
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Type>

                <Append position='bottom' alignment='center'
                  anchor={anchor}

                  element={(
                    <span className={classes.tooltip}>a</span>
                  )}
                />
              </div>
            </Accordion>

            <Accordion label='Append portal'>
              <div className={classNames([classes.column])} style={{ gap: 74 }}>
                <Type
                  onMouseMove={onMouseMove}
                >
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Type>

                <Append position='bottom' alignment='center' portal
                  anchor={anchor}

                  element={(
                    <span className={classes.tooltip}>a</span>
                  )}
                />
              </div>
            </Accordion>
          </Accordion>
        </div>
      </Accordion>

      <Accordion label='List'>
        <Accordion label='List' open>
          <div className={classNames([classes.column])}>
            <List>
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  primary='Primary text'
                  secondary='Secondary text'
                  tertiary='Tertiary text'

                  key={item}
                />
              ))}
            </List>
          </div>
        </Accordion>

        <Accordion label='List menu' open>
          <div className={classNames([classes.column])}>
            <List menu>
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  button

                  primary={`Item ${item + 1}`}

                  key={item}
                />
              ))}
            </List>

            <List menu>
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  button

                  primary={`Item ${item + 1}`}

                  key={item}

                  end={item === 3 && (
                    <IconMaterialArrowRightRounded />
                  )}
                />
              ))}
            </List>

            <List menu style={{ minWidth: 240 }}>
              <ListItem
                button

                primary='Cut'

                start={(
                  <IconMaterialCutRounded />
                )}

                end={(
                  <Type version='b2' color='secondary'>
                    ⌘X
                  </Type>
                )}

                disabled
              />

              <ListItem
                button

                primary='Copy'

                start={(
                  <IconMaterialContentCopyRounded />
                )}

                end={(
                  <Type version='b2' color='secondary'>
                    ⌘C
                  </Type>
                )}
              />

              <ListItem
                button

                primary='Paste'

                start={(
                  <IconMaterialContentPasteRounded />
                )}

                end={(
                  <Type version='b2' color='secondary'>
                    ⌘V
                  </Type>
                )}
              />

              <Divider
                Component='li'
              />

              <ListItem
                button

                primary='Cloud'

                start={(
                  <IconMaterialCloudRounded />
                )}

                end={(
                  <IconMaterialArrowRightRounded />
                )}
              />
            </List>

            <List menu color='secondary'>
              <ListItem
                button

                primary='Undo'
              />

              <ListItem
                button

                primary='Redo'

                disabled
              />

              <Divider
                Component='li'
              />

              <ListItem
                button

                primary='Cut'

                disabled
              />

              <ListItem
                button

                primary='Copy'

                disabled
              />

              <ListItem
                button

                primary='Paste'
              />
            </List>

            <List menu color='secondary'>
              <ListItem
                inset

                button

                primary='Single'
              />

              <ListItem
                inset

                button

                primary='1.15'
              />

              <ListItem
                inset

                button

                primary='Double'
              />

              <ListItem
                button

                primary='Custom: 1.2'

                start={(
                  <IconMaterialCheckRounded />
                )}
              />

              <Divider
                Component='li'
              />

              <ListItem
                button

                primary='Add space before paragraph'

                end={(
                  <IconMaterialArrowRightRounded />
                )}

                selected
              />

              <ListItem
                button

                primary='Add space after paragraph'
              />

              <Divider
                Component='li'
              />

              <ListItem
                button

                primary='Custom spacing...'
              />
            </List>
          </div>
        </Accordion>

        <Accordion label='List item inset' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <List size='small'>
              <ListItem
                button

                inset

                primary='Primary value'

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
            </List>

            <List size='regular'>
              <ListItem
                button

                inset

                primary='Primary value'

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
            </List>

            <List size='large'>
              <ListItem
                button

                inset

                primary='Primary value'

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
            </List>
          </div>
        </Accordion>

        <Accordion label='List padding vertical' open>
          <div className={classNames([classes.column])} style={{ gap: 14 }}>
            <List paddingVertical='both'>
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  primary='Primary text'
                  secondary='Secondary text'
                  tertiary='Tertiary text'

                  key={item}
                />
              ))}
            </List>

            <List paddingVertical='start'>
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  primary='Primary text'
                  secondary='Secondary text'
                  tertiary='Tertiary text'

                  key={item}
                />
              ))}
            </List>

            <List paddingVertical='end'>
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  primary='Primary text'
                  secondary='Secondary text'
                  tertiary='Tertiary text'

                  key={item}
                />
              ))}
            </List>

            <List paddingVertical='none'>
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  primary='Primary text'
                  secondary='Secondary text'
                  tertiary='Tertiary text'

                  key={item}
                />
              ))}
            </List>
          </div>
        </Accordion>

        <Accordion label='List padding horizontal' open>
          <div className={classNames([classes.column])} style={{ gap: 14 }}>
            <List paddingHorizontal='both'>
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  primary='Primary text'
                  secondary='Secondary text'
                  tertiary='Tertiary text'

                  key={item}
                />
              ))}
            </List>

            <List paddingHorizontal='start'>
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  primary='Primary text'
                  secondary='Secondary text'
                  tertiary='Tertiary text'

                  key={item}
                />
              ))}
            </List>

            <List paddingHorizontal='end'>
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  primary='Primary text'
                  secondary='Secondary text'
                  tertiary='Tertiary text'

                  key={item}
                />
              ))}
            </List>

            <List paddingHorizontal='none'>
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  primary='Primary text'
                  secondary='Secondary text'
                  tertiary='Tertiary text'

                  key={item}
                />
              ))}
            </List>
          </div>
        </Accordion>

        <Accordion label='List color' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <List tonal={false} color='default'>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List tonal={false} color='primary'>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List tonal={false} color='secondary'>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List tonal={false} color='tertiary'>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List tonal={false} color='quaternary'>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List tonal={false} color='info'>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List tonal={false} color='success'>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List tonal={false} color='warning'>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List tonal={false} color='error'>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List tonal={false} color='neutral'>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List tonal={false} color='#f5d758'>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>
          </div>
        </Accordion>

        <Accordion label='List color tonal' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <List color='primary' tonal>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List color='secondary' tonal>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List color='tertiary' tonal>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List color='quaternary' tonal>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List color='info' tonal>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List color='success' tonal>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List color='warning' tonal>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List color='error' tonal>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List color='neutral' tonal>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>

            <List color='#f5d758' tonal>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'
                  secondary='Secondary value'
                  tertiary='Tertiary value'

                  start={(
                    <IconMaterialPottedPlantRounded />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded />
                  )}
                />
              ))}
            </List>
          </div>
        </Accordion>

        <Accordion label='List shadow'>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <List shadow={0}>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'

                  start={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}
                />
              ))}
            </List>

            <List shadow={1}>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'

                  start={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}
                />
              ))}
            </List>

            <List shadow={2}>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'

                  start={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}
                />
              ))}
            </List>

            <List shadow={3}>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'

                  start={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}
                />
              ))}
            </List>

            <List shadow={4}>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'

                  start={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}
                />
              ))}
            </List>

            <List shadow={6}>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'

                  start={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}
                />
              ))}
            </List>

            <List shadow={8}>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'

                  start={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}
                />
              ))}
            </List>

            <List shadow={9}>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'

                  start={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}
                />
              ))}
            </List>

            <List shadow={12}>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'

                  start={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}
                />
              ))}
            </List>

            <List shadow={16}>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'

                  start={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}
                />
              ))}
            </List>

            <List shadow={24}>
              {[1, 2, 3, 4].map(item => (
                <ListItem
                  button

                  key={item}

                  primary='Primary value'

                  start={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}

                  end={(
                    <IconMaterialPottedPlantRounded color='secondary' />
                  )}
                />
              ))}
            </List>
          </div>
        </Accordion>

        <Accordion label='List item shape and shape position' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <List size='small'>
              <ListItem
                button

                shapePosition='none'

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                shapePosition='end'

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                shapePosition='start'

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                shapePosition='both'

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
            </List>

            <List size='regular'>
              <ListItem
                button

                shapePosition='none'

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                shapePosition='end'

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                shapePosition='start'

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                shapePosition='both'

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
            </List>

            <List size='large'>
              <ListItem
                button

                shapePosition='none'

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                shapePosition='end'

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                shapePosition='start'

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                shapePosition='both'

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
            </List>
          </div>
        </Accordion>

        <Accordion label='List item shape and shape position with list padding' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <List size='small' paddingHorizontal='end'>
              <ListItem
                button

                shapePosition='end'

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
            </List>

            <List size='regular' paddingHorizontal='end'>
              <ListItem
                button

                shapePosition='end'

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
            </List>

            <List size='large' paddingHorizontal='end'>
              <ListItem
                button

                shapePosition='end'

                primary='Primary value'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
            </List>
          </div>
        </Accordion>

        <Accordion label='List sizes' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <List size='small'>
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}

                end={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </Avatar>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
            </List>

            <List size='regular'>
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}

                end={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </Avatar>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
            </List>

            <List size='large'>
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}

                end={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </Avatar>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
            </List>
          </div>
        </Accordion>

        <Accordion label='List with subheader' open>
          <div className={classNames([classes.column])}>
            <List style={{ height: 140, width: 400, overflow: 'auto' }} paddingVertical='none'>
              {[0, 1, 3, 4].map(item => (
                <li key={`li-${item}`} style={{ width: '100%' }}>
                  <ListSubheader>{`List subheader ${item}`}</ListSubheader>

                  <List key={`ul-${item}`} paddingVertical='none'>
                    {[0, 1, 3].map(item_ => (
                      <ListItem
                        key={`li1-${item_}`}

                        primary={`Item ${item_}`}
                      />
                    ))}
                  </List>
                </li>
              ))}
            </List>
          </div>
        </Accordion>

        <Accordion label='List align' open>
          <div className={classNames([classes.column, classes.center])} style={{ gap: 14 }}>
            <List size='small' startAlign='start' endAlign='start'>
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}

                end={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
            </List>

            <List size='small' startAlign='center' endAlign='center'>
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}

                end={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
            </List>

            <List size='small' startAlign='end' endAlign='end'>
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}

                end={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
            </List>
          </div>

          <div className={classNames([classes.column, classes.center])} style={{ gap: 14 }}>
            <List size='regular' startAlign='start' endAlign='start'>
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}

                end={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
            </List>

            <List size='regular' startAlign='center' endAlign='center'>
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}

                end={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
            </List>

            <List size='regular' startAlign='end' endAlign='end'>
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}

                end={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
            </List>
          </div>

          <div className={classNames([classes.column, classes.center])} style={{ gap: 14 }}>
            <List size='large' startAlign='start' endAlign='start'>
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}

                end={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
            </List>

            <List size='large' startAlign='center' endAlign='center'>
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}

                end={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
            </List>

            <List size='large' startAlign='end' endAlign='end'>
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}

                end={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'
                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
            </List>
          </div>
        </Accordion>

        <Accordion label='List button' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>

            <List size='small'>
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}

                end={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </Avatar>
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <Type
                    version='b3'
                  >
                    meta
                  </Type>
                )}
              />
            </List>

            <List size='regular'>
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}

                end={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </Avatar>
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <Type
                    version='b3'
                  >
                    meta
                  </Type>
                )}
              />
            </List>

            <List size='large'>
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}

                end={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </Avatar>
                )}

                end={(
                  <Avatar version='filled' color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </Avatar>
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}

                end={(
                  <Type
                    version='b3'
                  >
                    meta
                  </Type>
                )}
              />
            </List>
          </div>
        </Accordion>

        <Accordion label='List href' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>

            <List size='small'>
              <ListItem
                href='https://google.com'
                target='_blank'

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                href='https://google.com'
                target='_blank'

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                href='https://google.com'
                target='_blank'

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
              <ListItem
                href='https://google.com'
                target='_blank'

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </Avatar>
                )}
              />
              <ListItem
                href='https://google.com'
                target='_blank'

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
            </List>

            <List size='regular'>
              <ListItem
                href='https://google.com'
                target='_blank'

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                href='https://google.com'
                target='_blank'

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                href='https://google.com'
                target='_blank'

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
              <ListItem
                href='https://google.com'
                target='_blank'

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </Avatar>
                )}
              />
              <ListItem
                href='https://google.com'
                target='_blank'

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
            </List>

            <List size='large'>
              <ListItem
                href='https://google.com'
                target='_blank'

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                href='https://google.com'
                target='_blank'

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='outlined' color='secondary' image='/avatar.jpeg' />
                )}
              />
              <ListItem
                href='https://google.com'
                target='_blank'

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    Aa
                  </Avatar>
                )}
              />
              <ListItem
                href='https://google.com'
                target='_blank'

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Avatar version='filled' color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </Avatar>
                )}
              />
              <ListItem
                href='https://google.com'
                target='_blank'

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconMaterialPottedPlantRounded color='secondary' />
                )}
              />
            </List>
          </div>
        </Accordion>

        <Accordion label='List selected' open>
          <div className={classNames([classes.column])}>
            <List>
              {[0, 1, 3, 4].map(item => item + 1).map(item => (
                <ListItem
                  key={item}

                  button

                  primary='Primary text'
                  secondary='Secondary text'
                  tertiary='Tertiary text'

                  selected={item === 1}

                  start={(
                    <IconButton color='secondary'>
                      <IconMaterialPottedPlantRounded />
                    </IconButton>
                  )}

                  end={(
                    <IconButton color='secondary'>
                      <IconMaterialPottedPlantRounded />
                    </IconButton>
                  )}
                />
              ))}
            </List>
          </div>
        </Accordion>

        <Accordion label='List icon selected' open>
          <div className={classNames([classes.column])}>
            <List>
              {[0, 1, 3, 4].map(item => item + 1).map(item => (
                <ListItem
                  key={item}

                  button

                  primary='Primary text'
                  secondary='Secondary text'
                  tertiary='Tertiary text'

                  selected={item === 1}

                  start={(
                    <IconButton color='secondary'>
                      {item === 1 ? <IconMaterialPottedPlantRoundedFilled /> : <IconMaterialPottedPlantRounded />}
                    </IconButton>
                  )}

                  end={(
                    <IconButton color='secondary'>
                      {item === 1 ? <IconMaterialPottedPlantRoundedFilled /> : <IconMaterialPottedPlantRounded />}
                    </IconButton>
                  )}
                />
              ))}
            </List>
          </div>
        </Accordion>

        <Accordion label='List color' open>
          <div className={classNames([classes.column])}>
            <List>
              <ListItem
                color='default'

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                color='primary'

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                color='secondary'

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                color='tertiary'

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                color='quaternary'

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                color='info'

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                color='success'

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                color='warning'

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                color='error'

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                color='neutral'

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                color='#f5d758'

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
            </List>
          </div>
        </Accordion>

        <Accordion label='List colorSelected' open>
          <div className={classNames([classes.column])}>
            <List>
              <ListItem
                colorSelected='default'

                selected

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                colorSelected='primary'

                selected

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                colorSelected='secondary'

                selected

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                colorSelected='tertiary'

                selected

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                colorSelected='quaternary'

                selected

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                colorSelected='info'

                selected

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                colorSelected='success'

                selected

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                colorSelected='warning'

                selected

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                colorSelected='error'

                selected

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                colorSelected='neutral'

                selected

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
              <ListItem
                colorSelected='#f5d758'

                selected

                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}

                end={(
                  <IconButton color='secondary'>
                    <IconMaterialPottedPlantRounded />
                  </IconButton>
                )}
              />
            </List>
          </div>
        </Accordion>

        <Accordion label='List with radio, switch & checkbox' open>
          <div className={classNames([classes.column])}>
            <List>
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Checkbox color='secondary' />
                )}

                end={(
                  <Radio color='secondary' />
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Radio color='secondary' />
                )}

                end={(
                  <Checkbox color='secondary' />
                )}
              />
              <ListItem
                button

                primary='Primary text'
                secondary='Secondary text'
                tertiary='Tertiary text'

                start={(
                  <Switch color='secondary' />
                )}

                end={(
                  <Switch color='secondary' />
                )}
              />
            </List>
          </div>
        </Accordion>

        <Accordion label='List disabled' open>
          <div className={classNames([classes.column])}>
            <List>
              {[0, 1, 3, 4].map(item => (
                <ListItem
                  key={item}

                  button

                  primary='Primary text'
                  secondary='Secondary text'
                  tertiary='Tertiary text'

                  selected={item === 1}

                  start={(
                    <IconButton color='secondary'>
                      <IconMaterialPottedPlantRounded />
                    </IconButton>
                  )}

                  end={(
                    <IconButton color='secondary'>
                      <IconMaterialPottedPlantRounded />
                    </IconButton>
                  )}

                  disabled
                />
              ))}
            </List>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <List>
              {[0, 1, 4].map(item => (
                <ListItem
                  primary='Primary text'
                  secondary='Secondary text'
                  tertiary='Tertiary text'

                  key={item}
                />
              ))}
            </List>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <List>
                  {[0, 1, 4].map(item => (
                    <ListItem
                      primary='Primary text'
                      secondary='Secondary text'
                      tertiary='Tertiary text'

                      key={item}
                    />
                  ))}
                </List>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiList: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <List>
                  {[0, 1, 4].map(item => (
                    <ListItem
                      primary='Primary text'
                      secondary='Secondary text'
                      tertiary='Tertiary text'

                      key={item}
                    />
                  ))}
                </List>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiList: {
                        style: {
                          override: {
                            root: {
                              margin: 0,
                              listStyle: 'none',

                              display: 'flex',
                              flexDirection: 'column-reverse',
                              alignItems: 'flex-start',
                              width: '100%',
                            }
                          }
                        }
                      },
                      AmauiListItem: {
                        style: {
                          override: {
                            wrapper: {
                              padding: '14px 0',
                              width: '100%',
                            }
                          }
                        }
                      },
                    }
                  }
                }}
              >
                <List>
                  {[0, 1, 4].map(item => (
                    <ListItem
                      primary={`Primary text ${item}`}
                      secondary='Secondary text'
                      tertiary='Tertiary text'

                      key={item}
                    />
                  ))}
                </List>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiList: {
                        props: {
                          default: {
                            paddingVertical: 'none'
                          }
                        }
                      },
                      AmauiListItem: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <List>
                  {[0, 1, 4].map(item => (
                    <ListItem
                      button

                      primary='Primary text'
                      secondary='Secondary text'
                      tertiary='Tertiary text'

                      key={item}
                    />
                  ))}
                </List>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.List>
                {[0, 1, 4].map(item => (
                  <ListItem
                    primary='Primary text'
                    secondary='Secondary text'
                    tertiary='Tertiary text'

                    key={item}
                  />
                ))}
              </styled.List>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='TextField'>
        <Accordion label='TextField' open>
          <div className={classNames([classes.row])}>
            <TextField color='secondary' label='Filled text' placeholder='Filled text' />
          </div>
        </Accordion>

        <Accordion label='TextField versions' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField version='text' color='secondary' label='Text value' placeholder='Text value' />
            <TextField version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
            <TextField version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
          </div>
        </Accordion>

        <Accordion label='TextField multiline' open>
          <div className={classNames([classes.column])} style={{ gap: 14 }}>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField multiline valueDefault='14' prefix='€' size='small' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField multiline valueDefault='14' prefix='€' size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField multiline valueDefault='14' prefix='€' size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField multiline valueDefault='14' prefix='€' size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField multiline valueDefault='14' prefix='€' size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField multiline valueDefault='14' prefix='€' size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField multiline valueDefault='14' prefix='€' size='large' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField multiline valueDefault='14' prefix='€' size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField multiline valueDefault='14' prefix='€' size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            </div>
          </div>

          <div className={classNames([classes.column])} style={{ gap: 14 }}>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField rows={4} multiline valueDefault='14' prefix='€' size='small' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField rows={4} multiline valueDefault='14' prefix='€' size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField rows={4} multiline valueDefault='14' prefix='€' size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField rows={4} multiline valueDefault='14' prefix='€' size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField rows={4} multiline valueDefault='14' prefix='€' size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField rows={4} multiline valueDefault='14' prefix='€' size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField rows={4} multiline valueDefault='14' prefix='€' size='large' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField rows={4} multiline valueDefault='14' prefix='€' size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField rows={4} multiline valueDefault='14' prefix='€' size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            </div>
          </div>

          <div className={classNames([classes.column])} style={{ gap: 14 }}>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField minRows={2} maxRows={4} multiline valueDefault='14' prefix='€' size='small' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField minRows={2} maxRows={4} multiline valueDefault='14' prefix='€' size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField minRows={2} maxRows={4} multiline valueDefault='14' prefix='€' size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField minRows={2} maxRows={4} multiline valueDefault='14' prefix='€' size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField minRows={2} maxRows={4} multiline valueDefault='14' prefix='€' size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField minRows={2} maxRows={4} multiline valueDefault='14' prefix='€' size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField minRows={2} maxRows={4} multiline valueDefault='14' prefix='€' size='large' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField minRows={2} maxRows={4} multiline valueDefault='14' prefix='€' size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
              <TextField minRows={2} maxRows={4} multiline valueDefault='14' prefix='€' size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            </div>
          </div>
        </Accordion>

        <Accordion label='TextField sizes' open>
          <div className={classNames([classes.column])} style={{ gap: 14 }}>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='large' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>
          </div>
        </Accordion>

        <Accordion label='TextField color' open>
          <div className={classNames([classes.row, classes.center])}>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='default' label='Text value' placeholder='Text value' />
              <TextField size='small' version='filled' color='default' label='Filled value' placeholder='Filled value' />
              <TextField size='small' version='outlined' color='default' label='Outlined value' placeholder='Outlined value' />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='primary' label='Text value' placeholder='Text value' />
              <TextField size='small' version='filled' color='primary' label='Filled value' placeholder='Filled value' />
              <TextField size='small' version='outlined' color='primary' label='Outlined value' placeholder='Outlined value' />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='tertiary' label='Text value' placeholder='Text value' />
              <TextField size='small' version='filled' color='tertiary' label='Filled value' placeholder='Filled value' />
              <TextField size='small' version='outlined' color='tertiary' label='Outlined value' placeholder='Outlined value' />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='quaternary' label='Text value' placeholder='Text value' />
              <TextField size='small' version='filled' color='quaternary' label='Filled value' placeholder='Filled value' />
              <TextField size='small' version='outlined' color='quaternary' label='Outlined value' placeholder='Outlined value' />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='info' label='Text value' placeholder='Text value' />
              <TextField size='small' version='filled' color='info' label='Filled value' placeholder='Filled value' />
              <TextField size='small' version='outlined' color='info' label='Outlined value' placeholder='Outlined value' />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='success' label='Text value' placeholder='Text value' />
              <TextField size='small' version='filled' color='success' label='Filled value' placeholder='Filled value' />
              <TextField size='small' version='outlined' color='success' label='Outlined value' placeholder='Outlined value' />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='error' label='Text value' placeholder='Text value' />
              <TextField size='small' version='filled' color='error' label='Filled value' placeholder='Filled value' />
              <TextField size='small' version='outlined' color='error' label='Outlined value' placeholder='Outlined value' />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='warning' label='Text value' placeholder='Text value' />
              <TextField size='small' version='filled' color='warning' label='Filled value' placeholder='Filled value' />
              <TextField size='small' version='outlined' color='warning' label='Outlined value' placeholder='Outlined value' />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='neutral' label='Text value' placeholder='Text value' />
              <TextField size='small' version='filled' color='neutral' label='Filled value' placeholder='Filled value' />
              <TextField size='small' version='outlined' color='neutral' label='Outlined value' placeholder='Outlined value' />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='#f5d758' label='Text value' placeholder='Text value' />
              <TextField size='small' version='filled' color='#f5d758' label='Filled value' placeholder='Filled value' />
              <TextField size='small' version='outlined' color='#f5d758' label='Outlined value' placeholder='Outlined value' />
            </div>
          </div>
        </Accordion>

        <Accordion label='TextField color tonal' open>
          <div className={classNames([classes.row, classes.center])}>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='default' label='Text value' placeholder='Text value' tonal />
              <TextField size='small' version='filled' color='default' label='Filled value' placeholder='Filled value' tonal />
              <TextField size='small' version='outlined' color='default' label='Outlined value' placeholder='Outlined value' tonal />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='primary' label='Text value' placeholder='Text value' tonal />
              <TextField size='small' version='filled' color='primary' label='Filled value' placeholder='Filled value' tonal />
              <TextField size='small' version='outlined' color='primary' label='Outlined value' placeholder='Outlined value' tonal />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='secondary' label='Text value' placeholder='Text value' tonal />
              <TextField size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' tonal />
              <TextField size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='tertiary' label='Text value' placeholder='Text value' tonal />
              <TextField size='small' version='filled' color='tertiary' label='Filled value' placeholder='Filled value' tonal />
              <TextField size='small' version='outlined' color='tertiary' label='Outlined value' placeholder='Outlined value' tonal />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='quaternary' label='Text value' placeholder='Text value' tonal />
              <TextField size='small' version='filled' color='quaternary' label='Filled value' placeholder='Filled value' tonal />
              <TextField size='small' version='outlined' color='quaternary' label='Outlined value' placeholder='Outlined value' />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='info' label='Text value' placeholder='Text value' tonal />
              <TextField size='small' version='filled' color='info' label='Filled value' placeholder='Filled value' tonal />
              <TextField size='small' version='outlined' color='info' label='Outlined value' placeholder='Outlined value' tonal />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='success' label='Text value' placeholder='Text value' tonal />
              <TextField size='small' version='filled' color='success' label='Filled value' placeholder='Filled value' tonal />
              <TextField size='small' version='outlined' color='success' label='Outlined value' placeholder='Outlined value' tonal />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='error' label='Text value' placeholder='Text value' tonal />
              <TextField size='small' version='filled' color='error' label='Filled value' placeholder='Filled value' tonal />
              <TextField size='small' version='outlined' color='error' label='Outlined value' placeholder='Outlined value' tonal />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='warning' label='Text value' placeholder='Text value' tonal />
              <TextField size='small' version='filled' color='warning' label='Filled value' placeholder='Filled value' tonal />
              <TextField size='small' version='outlined' color='warning' label='Outlined value' placeholder='Outlined value' tonal />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='neutral' label='Text value' placeholder='Text value' tonal />
              <TextField size='small' version='filled' color='neutral' label='Filled value' placeholder='Filled value' tonal />
              <TextField size='small' version='outlined' color='neutral' label='Outlined value' placeholder='Outlined value' tonal />
            </div>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField size='small' version='text' color='#f5d758' label='Text value' placeholder='Text value' tonal />
              <TextField size='small' version='filled' color='#f5d758' label='Filled value' placeholder='Filled value' tonal />
              <TextField size='small' version='outlined' color='#f5d758' label='Outlined value' placeholder='Outlined value' tonal />
            </div>
          </div>
        </Accordion>

        <Accordion label='TextField helper text' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField version='text' color='secondary' label='Text value' placeholder='Text value' helperText='Helper text' />
            <TextField version='filled' color='secondary' label='Filled value' placeholder='Filled value' helperText='Helper text' />
            <TextField version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' helperText='Helper text' />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14, flexWrap: 'nowrap' }}>
            <TextField version='text' color='secondary' label='Text value' placeholder='Text value' helperText='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more of it.' />
            <TextField version='filled' color='secondary' label='Filled value' placeholder='Filled value' helperText='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more of it.' />
            <TextField version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' helperText='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more of it.' />
          </div>
        </Accordion>

        <Accordion label='TextField counter' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField version='text' color='secondary' label='Text value' placeholder='Text value' counter='14' />
            <TextField version='filled' color='secondary' label='Filled value' placeholder='Filled value' counter='14' />
            <TextField version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' counter='14' />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField version='text' color='secondary' label='Text value' placeholder='Text value' helperText='Helper text' counter='14' />
            <TextField version='filled' color='secondary' label='Filled value' placeholder='Filled value' helperText='Helper text' counter='14' />
            <TextField version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' helperText='Helper text' counter='14' />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14, flexWrap: 'nowrap' }}>
            <TextField version='text' color='secondary' label='Text value' placeholder='Text value' helperText='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more of it.' counter='14' />
            <TextField version='filled' color='secondary' label='Filled value' placeholder='Filled value' helperText='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more of it.' counter='14' />
            <TextField version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' helperText='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more of it.' counter='14' />
          </div>
        </Accordion>

        <Accordion label='TextField startIcon and endIcon' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='small' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} />
            <TextField size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} />
            <TextField size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} />
            <TextField size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} />
            <TextField size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='large' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} />
            <TextField size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} />
            <TextField size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='small' version='text' color='secondary' label='Text value' placeholder='Text value' endIcon={<IconMaterialCheckRounded />} />
            <TextField size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' endIcon={<IconMaterialCheckRounded />} />
            <TextField size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' endIcon={<IconMaterialCheckRounded />} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' endIcon={<IconMaterialCheckRounded />} />
            <TextField size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' endIcon={<IconMaterialCheckRounded />} />
            <TextField size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' endIcon={<IconMaterialCheckRounded />} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='large' version='text' color='secondary' label='Text value' placeholder='Text value' endIcon={<IconMaterialCheckRounded />} />
            <TextField size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' endIcon={<IconMaterialCheckRounded />} />
            <TextField size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' endIcon={<IconMaterialCheckRounded />} />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='small' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconMaterialCheckRounded />} />
            <TextField size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconMaterialCheckRounded />} />
            <TextField size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconMaterialCheckRounded />} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconMaterialCheckRounded />} />
            <TextField size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconMaterialCheckRounded />} />
            <TextField size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconMaterialCheckRounded />} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='large' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconMaterialCheckRounded />} />
            <TextField size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconMaterialCheckRounded />} />
            <TextField size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconMaterialCheckRounded />} />
          </div>
        </Accordion>

        <Accordion label='TextField startIcon and endIcon with iconButton' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='small' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} />
            <TextField size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} />
            <TextField size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} />
            <TextField size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} />
            <TextField size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='large' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} />
            <TextField size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} />
            <TextField size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='small' version='text' color='secondary' label='Text value' placeholder='Text value' endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='large' version='text' color='secondary' label='Text value' placeholder='Text value' endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='small' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='large' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
        </Accordion>

        <Accordion label='TextField prefix and sufix' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' prefix='mm' size='small' version='text' color='secondary' label='Text value' placeholder='Text value' />
            <TextField valueDefault='a' prefix='mm' size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
            <TextField valueDefault='a' prefix='mm' size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' prefix='mm' size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' />
            <TextField valueDefault='a' prefix='mm' size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
            <TextField valueDefault='a' prefix='mm' size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' prefix='mm' size='large' version='text' color='secondary' label='Text value' placeholder='Text value' />
            <TextField valueDefault='a' prefix='mm' size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
            <TextField valueDefault='a' prefix='mm' size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' sufix='lbs' size='small' version='text' color='secondary' label='Text value' placeholder='Text value' />
            <TextField valueDefault='a' sufix='lbs' size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
            <TextField valueDefault='a' sufix='lbs' size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' sufix='lbs' size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' />
            <TextField valueDefault='a' sufix='lbs' size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
            <TextField valueDefault='a' sufix='lbs' size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' sufix='lbs' size='large' version='text' color='secondary' label='Text value' placeholder='Text value' />
            <TextField valueDefault='a' sufix='lbs' size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
            <TextField valueDefault='a' sufix='lbs' size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='small' version='text' color='secondary' label='Text value' placeholder='Text value' />
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' />
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='large' version='text' color='secondary' label='Text value' placeholder='Text value' />
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
          </div>
        </Accordion>

        <Accordion label='TextField prefix and sufix icons' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' prefix='mm' size='small' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' prefix='mm' size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' prefix='mm' size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' prefix='mm' size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' prefix='mm' size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' prefix='mm' size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' prefix='mm' size='large' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' prefix='mm' size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' prefix='mm' size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' sufix='lbs' size='small' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' sufix='lbs' size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' sufix='lbs' size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' sufix='lbs' size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' sufix='lbs' size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' sufix='lbs' size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' sufix='lbs' size='large' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' sufix='lbs' size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' sufix='lbs' size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='small' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='large' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='a' prefix='mm' sufix='lbs' size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
        </Accordion>

        <Accordion label='TextField prefix and sufix with align' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='14' prefix='€' size='small' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='14' prefix='€' size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='14' prefix='€' size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='14' prefix='€' size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='14' prefix='€' size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='14' prefix='€' size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='14' prefix='€' size='large' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='14' prefix='€' size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='14' prefix='€' size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='user' sufix='@gmail.com' align='end' noSufixMargin size='small' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='user' sufix='@gmail.com' align='end' noSufixMargin size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='user' sufix='@gmail.com' align='end' noSufixMargin size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='user' sufix='@gmail.com' align='end' noSufixMargin size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='user' sufix='@gmail.com' align='end' noSufixMargin size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='user' sufix='@gmail.com' align='end' noSufixMargin size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='user' sufix='@gmail.com' align='end' noSufixMargin size='large' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='user' sufix='@gmail.com' align='end' noSufixMargin size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='user' sufix='@gmail.com' align='end' noSufixMargin size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='14' sufix='/104' align='end' noSufixMargin size='small' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='14' sufix='/104' align='end' noSufixMargin size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='14' sufix='/104' align='end' noSufixMargin size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='14' sufix='/104' align='end' noSufixMargin size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='14' sufix='/104' align='end' noSufixMargin size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='14' sufix='/104' align='end' noSufixMargin size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField valueDefault='14' sufix='/104' align='end' noSufixMargin size='large' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='14' sufix='/104' align='end' noSufixMargin size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
            <TextField valueDefault='14' sufix='/104' align='end' noSufixMargin size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} />
          </div>
        </Accordion>

        <Accordion label='TextField enabled' open>
          <div className={classNames([classes.column])} style={{ gap: 14 }}>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField enabled size='small' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField enabled size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField enabled size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField enabled size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField enabled size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField enabled size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField enabled size='large' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField enabled size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField enabled size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>
          </div>
        </Accordion>

        <Accordion label='TextField readOnly' open>
          <div className={classNames([classes.column])} style={{ gap: 14 }}>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField readOnly valueDefault='a' size='small' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField readOnly valueDefault='a' size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField readOnly valueDefault='a' size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField readOnly valueDefault='a' size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField readOnly valueDefault='a' size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField readOnly valueDefault='a' size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField readOnly valueDefault='a' size='large' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField readOnly valueDefault='a' size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField readOnly valueDefault='a' size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>
          </div>
        </Accordion>

        <Accordion label='TextField valueDefault' open>
          <div className={classNames([classes.column])} style={{ gap: 14 }}>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField valueDefault='a' size='small' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField valueDefault='a' size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField valueDefault='a' size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField valueDefault='a' size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField valueDefault='a' size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField valueDefault='a' size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField valueDefault='a' size='large' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField valueDefault='a' size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField valueDefault='a' size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>
          </div>
        </Accordion>

        <Accordion label='TextField controlled value' open>
          <div className={classNames([classes.column])} style={{ gap: 14 }}>
            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField value={a.textfield} onChange={(value: any) => updatePure(value, 'textfield')} size='small' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField value={a.textfield} onChange={(value: any) => updatePure(value, 'textfield')} size='small' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField value={a.textfield} onChange={(value: any) => updatePure(value, 'textfield')} size='small' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField value={a.textfield} onChange={(value: any) => updatePure(value, 'textfield')} size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField value={a.textfield} onChange={(value: any) => updatePure(value, 'textfield')} size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField value={a.textfield} onChange={(value: any) => updatePure(value, 'textfield')} size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>

            <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
              <TextField value={a.textfield} onChange={(value: any) => updatePure(value, 'textfield')} size='large' version='text' color='secondary' label='Text value' placeholder='Text value' />
              <TextField value={a.textfield} onChange={(value: any) => updatePure(value, 'textfield')} size='large' version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
              <TextField value={a.textfield} onChange={(value: any) => updatePure(value, 'textfield')} size='large' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
            </div>
          </div>
        </Accordion>

        <Accordion label='TextField fullWidth' open>
          <div className={classNames([classes.row])}>
            <TextField version='text' color='secondary' label='Text value' placeholder='Text value' fullWidth />
            <TextField version='filled' color='secondary' label='Filled value' placeholder='Filled value' fullWidth />
            <TextField version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' fullWidth />
          </div>
        </Accordion>

        <Accordion label='TextField placeholder' open>
          <div className={classNames([classes.row])}>
            <TextField version='text' color='secondary' label='Text value' placeholder='Text value' />
            <TextField version='filled' color='secondary' label='Filled value' placeholder='Filled value' />
            <TextField version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' />
          </div>
        </Accordion>

        <Accordion label='TextField type' open>
          <div className={classNames([classes.row])}>
            <TextField version='text' color='secondary' label='Text value' placeholder='Text value' type='number' />
            <TextField version='filled' color='secondary' label='Filled value' placeholder='Filled value' type='number' />
            <TextField version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' type='number' />
          </div>
        </Accordion>

        <Accordion label='TextField without label' open>
          <div className={classNames([classes.row])}>
            <TextField version='text' color='secondary' placeholder='Text value' />
            <TextField version='filled' color='secondary' placeholder='Filled value' />
            <TextField version='outlined' color='secondary' placeholder='Outlined value' />
          </div>
        </Accordion>

        <Accordion label='TextField required' open>
          <div className={classNames([classes.row])}>
            <TextField version='text' color='secondary' label='Text value' placeholder='Text value' required />
            <TextField version='filled' color='secondary' label='Filled value' placeholder='Filled value' required />
            <TextField version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' required />
          </div>
        </Accordion>

        <Accordion label='TextField optional' open>
          <div className={classNames([classes.row])}>
            <TextField version='text' color='secondary' label='Text value' placeholder='Text value' optional />
            <TextField version='filled' color='secondary' label='Filled value' placeholder='Filled value' optional />
            <TextField version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' optional />
          </div>
        </Accordion>

        <Accordion label='TextField error' open>
          <div className={classNames([classes.row])}>
            <TextField size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} helperText='Supporting text' error />
            <TextField size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} helperText='Supporting text' error />
            <TextField size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} helperText='Supporting text' error />
          </div>
        </Accordion>

        <Accordion label='TextField autofill' open>
          <div className={classNames([classes.row])}>
            <TextField size='regular' version='text' color='secondary' label='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} helperText='Supporting text' type='email' />
            <TextField size='regular' version='filled' color='secondary' label='Filled value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} helperText='Supporting text' type='email' />
            <TextField size='regular' version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} helperText='Supporting text' type='email' />
          </div>
        </Accordion>

        <Accordion label='TextField disabled' open>
          <div className={classNames([classes.row])} style={{ gap: 14 }}>
            <TextField version='text' color='secondary' label='Text value' placeholder='Text value' valueDefault='Text value' disabled />
            <TextField version='filled' color='secondary' label='Filled value' placeholder='Filled value' valueDefault='Filled value' disabled />
            <TextField version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' valueDefault='Outlined value' disabled />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField version='text' color='secondary' label='Text value' placeholder='Text value' valueDefault='Text value' helperText='Helper text' disabled />
            <TextField version='filled' color='secondary' label='Filled value' placeholder='Filled value' valueDefault='Text value' helperText='Helper text' disabled />
            <TextField version='outlined' color='secondary' label='Outlined value' placeholder='Outlined value' valueDefault='Text value' helperText='Helper text' disabled />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <TextField size='regular' version='text' color='secondary' label='Text value' valueDefault='Text value' placeholder='Text value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} disabled />
            <TextField size='regular' version='filled' color='secondary' label='Filled value' valueDefault='Text value' placeholder='Filled value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} disabled />
            <TextField size='regular' version='outlined' color='secondary' label='Outlined value' valueDefault='Text value' placeholder='Outlined value' startIcon={<IconMaterialCheckRounded />} endIcon={<IconButton><IconMaterialCloseRounded /></IconButton>} disabled />
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div
            className={classNames([classes.column])}

            style={{
              width: '100%'
            }}
          >
            <TextField color='secondary' label='Value text' />

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <TextField color='secondary' label='Value text' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiTextField: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <TextField color='secondary' label='Value text' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiTextField: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 37
                            }
                          }
                        }
                      }
                    }
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <TextField color='secondary' label='Value text' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiTextField: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <TextField label='Value text' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.TextField label='Value text' />
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Switch'>
        <Accordion label='Switch' open>
          <div className={classNames([classes.column])}>
            <Switch color='secondary' />
          </div>
        </Accordion>

        <Accordion label='Switch versions' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <Switch size='regular' version='filled' color='secondary' valueDefault />
            <Switch size='regular' version='filled' tonal color='secondary' valueDefault />
          </div>
        </Accordion>

        <Accordion label='Switch sizes' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <Switch size='small' color='secondary' valueDefault />
            <Switch size='regular' color='secondary' valueDefault />
            <Switch size='large' color='secondary' valueDefault />
          </div>
        </Accordion>

        <Accordion label='Switch color' open>
          <div className={classNames([classes.row, classes.center])}>
            <Switch color='default' valueDefault />
            <Switch color='primary' valueDefault />
            <Switch color='secondary' valueDefault />
            <Switch color='tertiary' valueDefault />
            <Switch color='quaternary' valueDefault />
            <Switch color='info' valueDefault />
            <Switch color='success' valueDefault />
            <Switch color='error' valueDefault />
            <Switch color='warning' valueDefault />
            <Switch color='neutral' valueDefault />
            <Switch color='#f5d758' valueDefault />
          </div>
        </Accordion>

        <Accordion label='Switch color tonal' open>
          <div className={classNames([classes.row, classes.center])}>
            <Switch tonal color='primary' valueDefault />
            <Switch tonal color='secondary' valueDefault />
            <Switch tonal color='tertiary' valueDefault />
            <Switch tonal color='quaternary' valueDefault />
            <Switch tonal color='info' valueDefault />
            <Switch tonal color='success' valueDefault />
            <Switch tonal color='error' valueDefault />
            <Switch tonal color='warning' valueDefault />
            <Switch tonal color='neutral' valueDefault />
            <Switch tonal color='#f5d758' valueDefault />
          </div>
        </Accordion>

        <Accordion label='Switch OnIcon' open>
          <div className={classNames([classes.column])}>
            <Switch color='secondary' OnIcon={<IconMaterialCheckRounded />} />
            <Switch color='secondary' tonal OnIcon={<IconMaterialCheckRounded />} />
          </div>
        </Accordion>

        <Accordion label='Switch OffIcon' open>
          <div className={classNames([classes.column])}>
            <Switch color='secondary' OffIcon={<IconMaterialCloseRounded />} />
            <Switch color='secondary' tonal OffIcon={<IconMaterialCloseRounded />} />
          </div>
        </Accordion>

        <Accordion label='Switch OnIcon & OffIcon' open>
          <div className={classNames([classes.column])}>
            <Switch color='secondary' OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} />
            <Switch color='secondary' tonal OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} />
            <Switch color='secondary' tonal OnIcon={<IconMaterialLightModeRounded />} OffIcon={<IconMaterialDarkModeRounded />} />
          </div>
        </Accordion>

        <Accordion label='Switch sizes with icons' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <Switch size='small' color='secondary' OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} valueDefault />
            <Switch size='regular' color='secondary' OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} valueDefault />
            <Switch size='large' color='secondary' OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} valueDefault />
          </div>
        </Accordion>

        <Accordion label='Switch color with icons' open>
          <div className={classNames([classes.row, classes.center])}>
            <Switch color='default' OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} valueDefault />
            <Switch color='primary' OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} valueDefault />
            <Switch color='secondary' OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} valueDefault />
            <Switch color='tertiary' OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} valueDefault />
            <Switch color='quaternary' OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} valueDefault />
            <Switch color='info' OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} valueDefault />
            <Switch color='success' OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} valueDefault />
            <Switch color='error' OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} valueDefault />
            <Switch color='warning' OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} valueDefault />
            <Switch color='neutral' OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} valueDefault />
            <Switch color='#f5d758' OnIcon={<IconMaterialCheckRounded />} OffIcon={<IconMaterialCloseRounded />} valueDefault />
          </div>
        </Accordion>

        <Accordion label='Switch valueDefault' open>
          <div className={classNames([classes.column])}>
            <Switch color='secondary' valueDefault />
          </div>
        </Accordion>

        <Accordion label='Switch controlled value' open>
          <div className={classNames([classes.column])}>
            <Switch
              color='secondary'

              onChange={(value: boolean) => updateValue(value, 'switch')}
              value={!!a.switch}
            />
          </div>
        </Accordion>

        <Accordion label='Switch disabled' open>
          <div className={classNames([classes.column])}>
            <Switch color='secondary' OffIcon={<IconMaterialCloseRounded />} disabled />
            <Switch color='secondary' OnIcon={<IconMaterialCheckRounded />} valueDefault disabled />
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <Switch color='secondary' />

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Switch color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiSwitch: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Switch color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiSwitch: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 37
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Switch color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiSwitch: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Switch />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Switch />
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Keyframes'>
        <Accordion label='Keyframes' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('keyframes')}>a</Button>

          <div style={{ height: 140 }}>
            {a.keyframes && (
              <Keyframes
                keyframes={[
                  { name: 'grow', timeout: 400 },
                  { name: 'move', timeout: 400 },
                  { name: 'shrink', timeout: 1100 }
                ]}

                runOnEnter
                append
                add
              >
                {(status: any, element: any) => (
                  <div
                    ref={element}

                    className={classes.div}

                    style={{
                      transformOrigin: 'center',
                      ...keyframes[status]
                    }}
                  />
                )}
              </Keyframes>
            )}
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Radio'>
        <Accordion label='Radio' open>
          <div className={classNames([classes.column])}>
            <Radio color='secondary' />
          </div>
        </Accordion>

        <Accordion label='Radio versions' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <Radio size='regular' version='text' color='secondary' valueDefault />
            <Radio size='regular' version='outlined' color='secondary' valueDefault />
            <Radio size='regular' version='filled' color='secondary' valueDefault />
            <Radio size='regular' version='filled' tonal color='secondary' valueDefault />
          </div>
        </Accordion>

        <Accordion label='Radio sizes' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <Radio size='small' color='secondary' />
            <Radio size='regular' color='secondary' />
            <Radio size='large' color='secondary' />
            <Radio size={70} color='secondary' />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <Radio size='small' color='secondary' valueDefault />
            <Radio size='regular' color='secondary' valueDefault />
            <Radio size='large' color='secondary' valueDefault />
            <Radio size={70} color='secondary' valueDefault />
          </div>
        </Accordion>

        <Accordion label='Radio color' open>
          <div className={classNames([classes.row, classes.center])}>
            <Radio version='text' color='default' valueDefault />
            <Radio version='text' color='primary' valueDefault />
            <Radio version='text' color='secondary' valueDefault />
            <Radio version='text' color='tertiary' valueDefault />
            <Radio version='text' color='quaternary' valueDefault />
            <Radio version='text' color='info' valueDefault />
            <Radio version='text' color='success' valueDefault />
            <Radio version='text' color='error' valueDefault />
            <Radio version='text' color='warning' valueDefault />
            <Radio version='text' color='neutral' valueDefault />
            <Radio version='text' color='#f5d758' valueDefault />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Radio version='outlined' color='default' valueDefault />
            <Radio version='outlined' color='primary' valueDefault />
            <Radio version='outlined' color='secondary' valueDefault />
            <Radio version='outlined' color='tertiary' valueDefault />
            <Radio version='outlined' color='quaternary' valueDefault />
            <Radio version='outlined' color='info' valueDefault />
            <Radio version='outlined' color='success' valueDefault />
            <Radio version='outlined' color='error' valueDefault />
            <Radio version='outlined' color='warning' valueDefault />
            <Radio version='outlined' color='neutral' valueDefault />
            <Radio version='outlined' color='#f5d758' valueDefault />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Radio version='filled' color='default' valueDefault />
            <Radio version='filled' color='primary' valueDefault />
            <Radio version='filled' color='secondary' valueDefault />
            <Radio version='filled' color='tertiary' valueDefault />
            <Radio version='filled' color='quaternary' valueDefault />
            <Radio version='filled' color='info' valueDefault />
            <Radio version='filled' color='success' valueDefault />
            <Radio version='filled' color='error' valueDefault />
            <Radio version='filled' color='warning' valueDefault />
            <Radio version='filled' color='neutral' valueDefault />
            <Radio version='filled' color='#f5d758' valueDefault />
          </div>
        </Accordion>

        <Accordion label='Radio color tonal' open>
          <div className={classNames([classes.row, classes.center])}>
            <Radio tonal version='text' color='primary' valueDefault />
            <Radio tonal version='text' color='secondary' valueDefault />
            <Radio tonal version='text' color='tertiary' valueDefault />
            <Radio tonal version='text' color='quaternary' valueDefault />
            <Radio tonal version='text' color='info' valueDefault />
            <Radio tonal version='text' color='success' valueDefault />
            <Radio tonal version='text' color='error' valueDefault />
            <Radio tonal version='text' color='warning' valueDefault />
            <Radio tonal version='text' color='neutral' valueDefault />
            <Radio tonal version='text' color='#f5d758' valueDefault />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Radio tonal version='outlined' color='primary' valueDefault />
            <Radio tonal version='outlined' color='secondary' valueDefault />
            <Radio tonal version='outlined' color='tertiary' valueDefault />
            <Radio tonal version='outlined' color='quaternary' valueDefault />
            <Radio tonal version='outlined' color='info' valueDefault />
            <Radio tonal version='outlined' color='success' valueDefault />
            <Radio tonal version='outlined' color='error' valueDefault />
            <Radio tonal version='outlined' color='warning' valueDefault />
            <Radio tonal version='outlined' color='neutral' valueDefault />
            <Radio tonal version='outlined' color='#f5d758' valueDefault />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Radio tonal version='filled' color='primary' valueDefault />
            <Radio tonal version='filled' color='secondary' valueDefault />
            <Radio tonal version='filled' color='tertiary' valueDefault />
            <Radio tonal version='filled' color='quaternary' valueDefault />
            <Radio tonal version='filled' color='info' valueDefault />
            <Radio tonal version='filled' color='success' valueDefault />
            <Radio tonal version='filled' color='error' valueDefault />
            <Radio tonal version='filled' color='warning' valueDefault />
            <Radio tonal version='filled' color='neutral' valueDefault />
            <Radio tonal version='filled' color='#f5d758' valueDefault />
          </div>
        </Accordion>

        <Accordion label='Radio valueDefault' open>
          <div className={classNames([classes.column])}>
            <Radio color='secondary' valueDefault />
          </div>
        </Accordion>

        <Accordion label='Radio colorUnchecked' open>
          <div className={classNames([classes.column])}>
            <Radio color='secondary' colorUnchecked='primary' />
          </div>
        </Accordion>

        <Accordion label='Radio controlled value' open>
          <div className={classNames([classes.column])}>
            <Radio
              color='secondary'

              onChange={(value: boolean) => updateValue(value, 'checkbox')}
              value={!!a.checkbox}
            />
          </div>
        </Accordion>

        <Accordion label='Radio disabled' open>
          <div className={classNames([classes.column])}>
            <Radio color='secondary' disabled />
            <Radio color='secondary' valueDefault disabled />
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <Radio color='secondary' />

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Radio color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiRadio: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Radio color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiRadio: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 44
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Radio color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiRadio: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Radio />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Radio />
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Checkbox'>
        <Accordion label='Checkbox' open>
          <div className={classNames([classes.column])}>
            <Checkbox color='secondary' />
          </div>
        </Accordion>

        <Accordion label='Checkbox versions' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <Checkbox size='regular' version='text' color='secondary' valueDefault />
            <Checkbox size='regular' version='outlined' color='secondary' valueDefault />
            <Checkbox size='regular' version='filled' color='secondary' valueDefault />
            <Checkbox size='regular' version='filled' tonal color='secondary' valueDefault />
          </div>
        </Accordion>

        <Accordion label='Checkbox sizes' open>
          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <Checkbox size='small' color='secondary' />
            <Checkbox size='regular' color='secondary' />
            <Checkbox size='large' color='secondary' />
            <Checkbox size={70} color='secondary' />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <Checkbox size='small' color='secondary' indeterminate />
            <Checkbox size='regular' color='secondary' indeterminate />
            <Checkbox size='large' color='secondary' indeterminate />
            <Checkbox size={70} color='secondary' indeterminate />
          </div>

          <div className={classNames([classes.row, classes.center])} style={{ gap: 14 }}>
            <Checkbox size='small' color='secondary' valueDefault />
            <Checkbox size='regular' color='secondary' valueDefault />
            <Checkbox size='large' color='secondary' valueDefault />
            <Checkbox size={70} color='secondary' valueDefault />
          </div>
        </Accordion>

        <Accordion label='Checkbox color' open>
          <div className={classNames([classes.row, classes.center])}>
            <Checkbox version='text' color='default' valueDefault />
            <Checkbox version='text' color='primary' valueDefault />
            <Checkbox version='text' color='secondary' valueDefault />
            <Checkbox version='text' color='tertiary' valueDefault />
            <Checkbox version='text' color='quaternary' valueDefault />
            <Checkbox version='text' color='info' valueDefault />
            <Checkbox version='text' color='success' valueDefault />
            <Checkbox version='text' color='error' valueDefault />
            <Checkbox version='text' color='warning' valueDefault />
            <Checkbox version='text' color='neutral' valueDefault />
            <Checkbox version='text' color='#f5d758' valueDefault />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Checkbox version='outlined' color='default' valueDefault />
            <Checkbox version='outlined' color='primary' valueDefault />
            <Checkbox version='outlined' color='secondary' valueDefault />
            <Checkbox version='outlined' color='tertiary' valueDefault />
            <Checkbox version='outlined' color='quaternary' valueDefault />
            <Checkbox version='outlined' color='info' valueDefault />
            <Checkbox version='outlined' color='success' valueDefault />
            <Checkbox version='outlined' color='error' valueDefault />
            <Checkbox version='outlined' color='warning' valueDefault />
            <Checkbox version='outlined' color='neutral' valueDefault />
            <Checkbox version='outlined' color='#f5d758' valueDefault />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Checkbox version='filled' color='default' valueDefault />
            <Checkbox version='filled' color='primary' valueDefault />
            <Checkbox version='filled' color='secondary' valueDefault />
            <Checkbox version='filled' color='tertiary' valueDefault />
            <Checkbox version='filled' color='quaternary' valueDefault />
            <Checkbox version='filled' color='info' valueDefault />
            <Checkbox version='filled' color='success' valueDefault />
            <Checkbox version='filled' color='error' valueDefault />
            <Checkbox version='filled' color='warning' valueDefault />
            <Checkbox version='filled' color='neutral' valueDefault />
            <Checkbox version='filled' color='#f5d758' valueDefault />
          </div>
        </Accordion>

        <Accordion label='Checkbox color indeterminate' open>
          <div className={classNames([classes.row, classes.center])}>
            <Checkbox version='text' color='default' indeterminate />
            <Checkbox version='text' color='primary' indeterminate />
            <Checkbox version='text' color='secondary' indeterminate />
            <Checkbox version='text' color='tertiary' indeterminate />
            <Checkbox version='text' color='quaternary' indeterminate />
            <Checkbox version='text' color='info' indeterminate />
            <Checkbox version='text' color='success' indeterminate />
            <Checkbox version='text' color='error' indeterminate />
            <Checkbox version='text' color='warning' indeterminate />
            <Checkbox version='text' color='neutral' indeterminate />
            <Checkbox version='text' color='#f5d758' indeterminate />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Checkbox version='outlined' color='default' indeterminate />
            <Checkbox version='outlined' color='primary' indeterminate />
            <Checkbox version='outlined' color='secondary' indeterminate />
            <Checkbox version='outlined' color='tertiary' indeterminate />
            <Checkbox version='outlined' color='quaternary' indeterminate />
            <Checkbox version='outlined' color='info' indeterminate />
            <Checkbox version='outlined' color='success' indeterminate />
            <Checkbox version='outlined' color='error' indeterminate />
            <Checkbox version='outlined' color='warning' indeterminate />
            <Checkbox version='outlined' color='neutral' indeterminate />
            <Checkbox version='outlined' color='#f5d758' indeterminate />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Checkbox version='filled' color='default' indeterminate />
            <Checkbox version='filled' color='primary' indeterminate />
            <Checkbox version='filled' color='secondary' indeterminate />
            <Checkbox version='filled' color='tertiary' indeterminate />
            <Checkbox version='filled' color='quaternary' indeterminate />
            <Checkbox version='filled' color='info' indeterminate />
            <Checkbox version='filled' color='success' indeterminate />
            <Checkbox version='filled' color='error' indeterminate />
            <Checkbox version='filled' color='warning' indeterminate />
            <Checkbox version='filled' color='neutral' indeterminate />
            <Checkbox version='filled' color='#f5d758' indeterminate />
          </div>
        </Accordion>

        <Accordion label='Checkbox color tonal' open>
          <div className={classNames([classes.row, classes.center])}>
            <Checkbox tonal version='text' color='primary' valueDefault />
            <Checkbox tonal version='text' color='secondary' valueDefault />
            <Checkbox tonal version='text' color='tertiary' valueDefault />
            <Checkbox tonal version='text' color='quaternary' valueDefault />
            <Checkbox tonal version='text' color='info' valueDefault />
            <Checkbox tonal version='text' color='success' valueDefault />
            <Checkbox tonal version='text' color='error' valueDefault />
            <Checkbox tonal version='text' color='warning' valueDefault />
            <Checkbox tonal version='text' color='neutral' valueDefault />
            <Checkbox tonal version='text' color='#f5d758' valueDefault />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Checkbox tonal version='outlined' color='primary' valueDefault />
            <Checkbox tonal version='outlined' color='secondary' valueDefault />
            <Checkbox tonal version='outlined' color='tertiary' valueDefault />
            <Checkbox tonal version='outlined' color='quaternary' valueDefault />
            <Checkbox tonal version='outlined' color='info' valueDefault />
            <Checkbox tonal version='outlined' color='success' valueDefault />
            <Checkbox tonal version='outlined' color='error' valueDefault />
            <Checkbox tonal version='outlined' color='warning' valueDefault />
            <Checkbox tonal version='outlined' color='neutral' valueDefault />
            <Checkbox tonal version='outlined' color='#f5d758' valueDefault />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Checkbox tonal version='filled' color='primary' valueDefault />
            <Checkbox tonal version='filled' color='secondary' valueDefault />
            <Checkbox tonal version='filled' color='tertiary' valueDefault />
            <Checkbox tonal version='filled' color='quaternary' valueDefault />
            <Checkbox tonal version='filled' color='info' valueDefault />
            <Checkbox tonal version='filled' color='success' valueDefault />
            <Checkbox tonal version='filled' color='error' valueDefault />
            <Checkbox tonal version='filled' color='warning' valueDefault />
            <Checkbox tonal version='filled' color='neutral' valueDefault />
            <Checkbox tonal version='filled' color='#f5d758' valueDefault />
          </div>
        </Accordion>

        <Accordion label='Checkbox color tonal indeterminate' open>
          <div className={classNames([classes.row, classes.center])}>
            <Checkbox tonal version='text' color='primary' indeterminate />
            <Checkbox tonal version='text' color='secondary' indeterminate />
            <Checkbox tonal version='text' color='tertiary' indeterminate />
            <Checkbox tonal version='text' color='quaternary' indeterminate />
            <Checkbox tonal version='text' color='info' indeterminate />
            <Checkbox tonal version='text' color='success' indeterminate />
            <Checkbox tonal version='text' color='error' indeterminate />
            <Checkbox tonal version='text' color='warning' indeterminate />
            <Checkbox tonal version='text' color='neutral' indeterminate />
            <Checkbox tonal version='text' color='#f5d758' indeterminate />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Checkbox tonal version='outlined' color='primary' indeterminate />
            <Checkbox tonal version='outlined' color='secondary' indeterminate />
            <Checkbox tonal version='outlined' color='tertiary' indeterminate />
            <Checkbox tonal version='outlined' color='quaternary' indeterminate />
            <Checkbox tonal version='outlined' color='info' indeterminate />
            <Checkbox tonal version='outlined' color='success' indeterminate />
            <Checkbox tonal version='outlined' color='error' indeterminate />
            <Checkbox tonal version='outlined' color='warning' indeterminate />
            <Checkbox tonal version='outlined' color='neutral' indeterminate />
            <Checkbox tonal version='outlined' color='#f5d758' indeterminate />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Checkbox tonal version='filled' color='primary' indeterminate />
            <Checkbox tonal version='filled' color='secondary' indeterminate />
            <Checkbox tonal version='filled' color='tertiary' indeterminate />
            <Checkbox tonal version='filled' color='quaternary' indeterminate />
            <Checkbox tonal version='filled' color='info' indeterminate />
            <Checkbox tonal version='filled' color='success' indeterminate />
            <Checkbox tonal version='filled' color='error' indeterminate />
            <Checkbox tonal version='filled' color='warning' indeterminate />
            <Checkbox tonal version='filled' color='neutral' indeterminate />
            <Checkbox tonal version='filled' color='#f5d758' indeterminate />
          </div>
        </Accordion>

        <Accordion label='Checkbox indeterminate' open>
          <div className={classNames([classes.column])}>
            <Checkbox color='secondary' indeterminate />
          </div>
        </Accordion>

        <Accordion label='Checkbox valueDefault' open>
          <div className={classNames([classes.column])}>
            <Checkbox color='secondary' valueDefault />
          </div>
        </Accordion>

        <Accordion label='Checkbox colorUnchecked' open>
          <div className={classNames([classes.column])}>
            <Checkbox color='secondary' colorUnchecked='primary' />
          </div>
        </Accordion>

        <Accordion label='Checkbox colorIndeterminate' open>
          <div className={classNames([classes.column])}>
            <Checkbox color='secondary' colorIndeterminate='primary' indeterminate />
          </div>
        </Accordion>

        <Accordion label='Checkbox controlled value' open>
          <div className={classNames([classes.column])}>
            <Checkbox
              color='secondary'

              onChange={(value: boolean) => updateValue(value, 'checkbox')}
              value={!!a.checkbox}

            />
          </div>
        </Accordion>

        <Accordion label='Checkbox indeterminate controlled value' open>
          <div className={classNames([classes.column])}>
            <Checkbox
              color='secondary'

              onChange={(value: boolean) => updateValue(value, 'checkbox')}
              value={!!a.checkbox}

              indeterminate
            />
          </div>
        </Accordion>

        <Accordion label='Checkbox disabled' open>
          <div className={classNames([classes.column])}>
            <Checkbox color='secondary' disabled />
            <Checkbox color='secondary' indeterminate disabled />
            <Checkbox color='secondary' valueDefault disabled />
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <Checkbox color='secondary' />

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Checkbox color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiCheckbox: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Checkbox color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiCheckbox: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 44
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Checkbox color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiCheckbox: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Checkbox />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Checkbox />
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Backdrop'>
        <Accordion label='Backdrop' open>
          <div className={classNames([classes.column])}>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue('b-1', 'backdrop')}>a</Button>

            <Backdrop
              open={a.backdrop === 'b-1'}

              onClose={() => updateValue('b-1', 'backdrop')}
            >
              <RoundProgress />
            </Backdrop>
          </div>
        </Accordion>

        <Accordion label='Backdrop invisible' open>
          <div className={classNames([classes.column])}>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue('b-i', 'backdrop')}>a</Button>

            <Backdrop
              open={a.backdrop === 'b-i'}

              onClose={() => updateValue('b-i', 'backdrop')}

              invisible
            >
              <RoundProgress />
            </Backdrop>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='ChipGroup'>
        <Accordion label='ChipGroup' open>
          <div className={classNames([classes.row, classes.center])}>
            <ChipGroup startIcon={<IconMaterialPottedPlantRounded />}>
              <Chip>Assistive</Chip>
              <Chip>Assistive 1</Chip>
              <Chip>Assistive 3</Chip>
              <Chip>Assistive 4</Chip>
              <Chip>Assistive 14</Chip>
              <Chip>Assistive 114</Chip>
              <Chip>Assistive 1114</Chip>
            </ChipGroup>
          </div>
        </Accordion>

        <Accordion label='ChipGroup color' open>
          <div className={classNames([classes.row, classes.center])}>
            <ChipGroup color='secondary' tonal>
              <Chip>Assistive</Chip>
              <Chip>Assistive 1</Chip>
              <Chip>Assistive 3</Chip>
              <Chip>Assistive 4</Chip>
              <Chip>Assistive 14</Chip>
              <Chip>Assistive 114</Chip>
              <Chip>Assistive 1114</Chip>
            </ChipGroup>
          </div>
        </Accordion>

        <Accordion label='ChipGroup color Chip override' open>
          <div className={classNames([classes.row, classes.center])}>
            <ChipGroup color='secondary' tonal>
              <Chip>Assistive</Chip>
              <Chip color='primary'>Assistive 1</Chip>
              <Chip>Assistive 3</Chip>
              <Chip>Assistive 4</Chip>
              <Chip>Assistive 14</Chip>
              <Chip>Assistive 114</Chip>
              <Chip>Assistive 1114</Chip>
            </ChipGroup>
          </div>
        </Accordion>

        <Accordion label='ChipGroup wrap' open>
          <div className={classNames([classes.row, classes.center])}>
            <ChipGroup wrap>
              <Chip>Assistive</Chip>
              <Chip>Assistive 1</Chip>
              <Chip>Assistive 3</Chip>
              <Chip>Assistive 4</Chip>
              <Chip>Assistive 14</Chip>
              <Chip>Assistive 114</Chip>
              <Chip>Assistive 1114</Chip>
            </ChipGroup>
          </div>
        </Accordion>

        <Accordion label='ChipGroup size' open>
          <div className={classNames([classes.row, classes.center])}>
            <ChipGroup size='small' >
              <Chip>Assistive</Chip>
              <Chip>Assistive 1</Chip>
              <Chip>Assistive 3</Chip>
              <Chip>Assistive 4</Chip>
              <Chip>Assistive 14</Chip>
              <Chip>Assistive 114</Chip>
              <Chip>Assistive 1114</Chip>
            </ChipGroup>

            <ChipGroup size='small' wrap>
              <Chip>Assistive</Chip>
              <Chip>Assistive 1</Chip>
              <Chip>Assistive 3</Chip>
              <Chip>Assistive 4</Chip>
              <Chip>Assistive 14</Chip>
              <Chip>Assistive 114</Chip>
              <Chip>Assistive 1114</Chip>
            </ChipGroup>

            <ChipGroup size='regular' >
              <Chip>Assistive</Chip>
              <Chip>Assistive 1</Chip>
              <Chip>Assistive 3</Chip>
              <Chip>Assistive 4</Chip>
              <Chip>Assistive 14</Chip>
              <Chip>Assistive 114</Chip>
              <Chip>Assistive 1114</Chip>
            </ChipGroup>

            <ChipGroup size='regular' wrap>
              <Chip>Assistive</Chip>
              <Chip>Assistive 1</Chip>
              <Chip>Assistive 3</Chip>
              <Chip>Assistive 4</Chip>
              <Chip>Assistive 14</Chip>
              <Chip>Assistive 114</Chip>
              <Chip>Assistive 1114</Chip>
            </ChipGroup>

            <ChipGroup size='large' >
              <Chip>Assistive</Chip>
              <Chip>Assistive 1</Chip>
              <Chip>Assistive 3</Chip>
              <Chip>Assistive 4</Chip>
              <Chip>Assistive 14</Chip>
              <Chip>Assistive 114</Chip>
              <Chip>Assistive 1114</Chip>
            </ChipGroup>

            <ChipGroup size='large' wrap>
              <Chip>Assistive</Chip>
              <Chip>Assistive 1</Chip>
              <Chip>Assistive 3</Chip>
              <Chip>Assistive 4</Chip>
              <Chip>Assistive 14</Chip>
              <Chip>Assistive 114</Chip>
              <Chip>Assistive 1114</Chip>
            </ChipGroup>
          </div>
        </Accordion>

        <Accordion label='ChipGroup disabled' open>
          <div className={classNames([classes.row, classes.center])}>
            <ChipGroup disabled>
              <Chip>Assistive</Chip>
              <Chip>Assistive 1</Chip>
              <Chip>Assistive 3</Chip>
              <Chip>Assistive 4</Chip>
              <Chip>Assistive 14</Chip>
              <Chip>Assistive 114</Chip>
              <Chip>Assistive 1114</Chip>
            </ChipGroup>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <ChipGroup color='secondary'>
              <Chip>Assistive</Chip>
              <Chip>Assistive 1</Chip>
              <Chip>Assistive 3</Chip>
              <Chip>Assistive 4</Chip>
              <Chip>Assistive 14</Chip>
              <Chip>Assistive 114</Chip>
              <Chip>Assistive 1114</Chip>
            </ChipGroup>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <ChipGroup color='secondary'>
                  <Chip>Assistive</Chip>
                  <Chip>Assistive 1</Chip>
                  <Chip>Assistive 3</Chip>
                  <Chip>Assistive 4</Chip>
                  <Chip>Assistive 14</Chip>
                  <Chip>Assistive 114</Chip>
                  <Chip>Assistive 1114</Chip>
                </ChipGroup>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiChipGroup: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <ChipGroup color='secondary'>
                  <Chip>Assistive</Chip>
                  <Chip>Assistive 1</Chip>
                  <Chip>Assistive 3</Chip>
                  <Chip>Assistive 4</Chip>
                  <Chip>Assistive 14</Chip>
                  <Chip>Assistive 114</Chip>
                  <Chip>Assistive 1114</Chip>
                </ChipGroup>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiChipGroup: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 44
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <ChipGroup color='secondary'>
                  <Chip>Assistive</Chip>
                  <Chip>Assistive 1</Chip>
                  <Chip>Assistive 3</Chip>
                  <Chip>Assistive 4</Chip>
                  <Chip>Assistive 14</Chip>
                  <Chip>Assistive 114</Chip>
                  <Chip>Assistive 1114</Chip>
                </ChipGroup>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiChipGroup: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <ChipGroup>
                  <Chip>Assistive</Chip>
                  <Chip>Assistive 1</Chip>
                  <Chip>Assistive 3</Chip>
                  <Chip>Assistive 4</Chip>
                  <Chip>Assistive 14</Chip>
                  <Chip>Assistive 114</Chip>
                  <Chip>Assistive 1114</Chip>
                </ChipGroup>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.ChipGroup>
                <Chip>Assistive</Chip>
                <Chip>Assistive 1</Chip>
                <Chip>Assistive 3</Chip>
                <Chip>Assistive 4</Chip>
                <Chip>Assistive 14</Chip>
                <Chip>Assistive 114</Chip>
                <Chip>Assistive 1114</Chip>
              </styled.ChipGroup>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Chip'>
        <Accordion label='Chip' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip>Enabled</Chip>
          </div>
        </Accordion>

        <Accordion label='Assistive' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='text' startIcon={<IconMaterialPottedPlantRounded />}>Assistive</Chip>
            <Chip size='regular' version='text' startIcon={<IconMaterialPottedPlantRounded />}>Assistive</Chip>
            <Chip size='large' version='text' startIcon={<IconMaterialPottedPlantRounded />}>Assistive</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='outlined' startIcon={<IconMaterialPottedPlantRounded />}>Assistive</Chip>
            <Chip size='regular' version='outlined' startIcon={<IconMaterialPottedPlantRounded />}>Assistive</Chip>
            <Chip size='large' version='outlined' startIcon={<IconMaterialPottedPlantRounded />}>Assistive</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='filled' startIcon={<IconMaterialPottedPlantRounded />}>Assistive</Chip>
            <Chip size='regular' version='filled' startIcon={<IconMaterialPottedPlantRounded />}>Assistive</Chip>
            <Chip size='large' version='filled' startIcon={<IconMaterialPottedPlantRounded />}>Assistive</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='filled' startIcon={<IconMaterialPottedPlantRounded />} tonal>Assistive</Chip>
            <Chip size='regular' version='filled' startIcon={<IconMaterialPottedPlantRounded />} tonal>Assistive</Chip>
            <Chip size='large' version='filled' startIcon={<IconMaterialPottedPlantRounded />} tonal>Assistive</Chip>
          </div>
        </Accordion>

        <Accordion label='Input' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='text' input>Input</Chip>
            <Chip size='regular' version='text' onRemove={() => console.log('removed')} input>Input</Chip>
            <Chip size='large' version='text' input>Input</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='outlined' input>Input</Chip>
            <Chip size='regular' version='outlined' input>Input</Chip>
            <Chip size='large' version='outlined' input>Input</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='filled' input>Input</Chip>
            <Chip size='regular' version='filled' input>Input</Chip>
            <Chip size='large' version='filled' input>Input</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='filled' tonal input>Input</Chip>
            <Chip size='regular' version='filled' tonal input>Input</Chip>
            <Chip size='large' version='filled' tonal input>Input</Chip>
          </div>
        </Accordion>

        <Accordion label='Filter' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='text' filter>Filter</Chip>
            <Chip size='regular' version='text' filter>Filter</Chip>
            <Chip size='large' version='text' filter>Filter</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='outlined' filter>Filter</Chip>
            <Chip size='regular' version='outlined' onSelected={() => console.log('selected')} onUnselected={() => console.log('unselected')} filter>Filter</Chip>
            <Chip size='large' version='outlined' filter>Filter</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='filled' filter>Filter</Chip>
            <Chip size='regular' version='filled' filter>Filter</Chip>
            <Chip size='large' version='filled' filter>Filter</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='filled' tonal filter>Filter</Chip>
            <Chip size='regular' version='filled' tonal filter>Filter</Chip>
            <Chip size='large' version='filled' tonal filter>Filter</Chip>
          </div>
        </Accordion>

        <Accordion label='Filter start icon' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='text' filter startIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='regular' version='text' filter startIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='large' version='text' filter startIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='outlined' filter startIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='regular' version='outlined' filter startIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='large' version='outlined' filter startIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='filled' filter startIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='regular' version='filled' filter startIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='large' version='filled' filter startIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='filled' tonal filter startIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='regular' version='filled' tonal filter startIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='large' version='filled' tonal filter startIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
          </div>
        </Accordion>

        <Accordion label='Filter start end icon' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='text' filter startIcon={<IconMaterialPottedPlantRounded />} endIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='regular' version='text' filter startIcon={<IconMaterialPottedPlantRounded />} endIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='large' version='text' filter startIcon={<IconMaterialPottedPlantRounded />} endIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='outlined' filter startIcon={<IconMaterialPottedPlantRounded />} endIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='regular' version='outlined' filter startIcon={<IconMaterialPottedPlantRounded />} endIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='large' version='outlined' filter startIcon={<IconMaterialPottedPlantRounded />} endIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='filled' filter startIcon={<IconMaterialPottedPlantRounded />} endIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='regular' version='filled' filter startIcon={<IconMaterialPottedPlantRounded />} endIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='large' version='filled' filter startIcon={<IconMaterialPottedPlantRounded />} endIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='filled' tonal filter startIcon={<IconMaterialPottedPlantRounded />} endIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='regular' version='filled' tonal filter startIcon={<IconMaterialPottedPlantRounded />} endIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
            <Chip size='large' version='filled' tonal filter startIcon={<IconMaterialPottedPlantRounded />} endIcon={<IconMaterialPottedPlantRounded />}>Filter</Chip>
          </div>
        </Accordion>

        <Accordion label='Suggestion' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='text'>Suggestion</Chip>
            <Chip size='regular' version='text'>Suggestion</Chip>
            <Chip size='large' version='text'>Suggestion</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='outlined'>Suggestion</Chip>
            <Chip size='regular' version='outlined'>Suggestion</Chip>
            <Chip size='large' version='outlined'>Suggestion</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='filled'>Suggestion</Chip>
            <Chip size='regular' version='filled'>Suggestion</Chip>
            <Chip size='large' version='filled'>Suggestion</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='filled' tonal>Suggestion</Chip>
            <Chip size='regular' version='filled' tonal>Suggestion</Chip>
            <Chip size='large' version='filled' tonal>Suggestion</Chip>
          </div>
        </Accordion>

        <Accordion label='Chip icon only' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='text' icon><IconMaterialPottedPlantRounded /></Chip>
            <Chip size='regular' version='text' icon><IconMaterialPottedPlantRounded /></Chip>
            <Chip size='large' version='text' icon><IconMaterialPottedPlantRounded /></Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='outlined' icon><IconMaterialPottedPlantRounded /></Chip>
            <Chip size='regular' version='outlined' icon><IconMaterialPottedPlantRounded /></Chip>
            <Chip size='large' version='outlined' icon><IconMaterialPottedPlantRounded /></Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='filled' icon><IconMaterialPottedPlantRounded /></Chip>
            <Chip size='regular' version='filled' icon><IconMaterialPottedPlantRounded /></Chip>
            <Chip size='large' version='filled' icon><IconMaterialPottedPlantRounded /></Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip size='small' version='filled' icon tonal><IconMaterialPottedPlantRounded /></Chip>
            <Chip size='regular' version='filled' icon tonal><IconMaterialPottedPlantRounded /></Chip>
            <Chip size='large' version='filled' icon tonal><IconMaterialPottedPlantRounded /></Chip>
          </div>
        </Accordion>

        <Accordion label='Chip versions' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip version='filled' color='secondary' size='small'>Filled</Chip>
            <Chip version='filled' color='secondary' size='regular'>Filled</Chip>
            <Chip version='filled' color='secondary' size='large'>Filled</Chip>
            <Chip version='filled' color='secondary' size='large' elevation={false}>No elevation</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip tonal version='filled' color='secondary' size='small'>Tonal</Chip>
            <Chip tonal version='filled' color='secondary' size='regular'>Tonal</Chip>
            <Chip tonal version='filled' color='secondary' size='large'>Tonal</Chip>
            <Chip tonal version='filled' color='secondary' size='large' elevation={false}>No elevation</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip version='outlined' color='secondary' size='small'>Outlined</Chip>
            <Chip version='outlined' color='secondary' size='regular'>Outlined</Chip>
            <Chip version='outlined' color='secondary' size='large'>Outlined</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip version='text' color='secondary' size='small'>Text</Chip>
            <Chip version='text' color='secondary' size='regular'>Text</Chip>
            <Chip version='text' color='secondary' size='large'>Text</Chip>
          </div>
        </Accordion>

        <Accordion label='Chip color' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip version='text' color='default'>Default</Chip>
            <Chip version='text' color='primary'>Primary</Chip>
            <Chip version='text' color='secondary'>Secondary</Chip>
            <Chip version='text' color='tertiary'>Tertiary</Chip>
            <Chip version='text' color='quaternary'>Quaternary</Chip>
            <Chip version='text' color='info'>Info</Chip>
            <Chip version='text' color='success'>Success</Chip>
            <Chip version='text' color='error'>Error</Chip>
            <Chip version='text' color='warning'>Warning</Chip>
            <Chip version='text' color='neutral'>Neutral</Chip>
            <Chip version='text' color='#f5d758'>Other</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip version='outlined' color='default'>Default</Chip>
            <Chip version='outlined' color='primary'>Primary</Chip>
            <Chip version='outlined' color='secondary'>Secondary</Chip>
            <Chip version='outlined' color='tertiary'>Tertiary</Chip>
            <Chip version='outlined' color='quaternary'>Quaternary</Chip>
            <Chip version='outlined' color='info'>Info</Chip>
            <Chip version='outlined' color='success'>Success</Chip>
            <Chip version='outlined' color='error'>Error</Chip>
            <Chip version='outlined' color='warning'>Warning</Chip>
            <Chip version='outlined' color='neutral'>Neutral</Chip>
            <Chip version='outlined' color='#f5d758'>Other</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip version='filled' color='default'>Default</Chip>
            <Chip version='filled' color='primary'>Primary</Chip>
            <Chip version='filled' color='secondary'>Secondary</Chip>
            <Chip version='filled' color='tertiary'>Tertiary</Chip>
            <Chip version='filled' color='quaternary'>Quaternary</Chip>
            <Chip version='filled' color='info'>Info</Chip>
            <Chip version='filled' color='success'>Success</Chip>
            <Chip version='filled' color='error'>Error</Chip>
            <Chip version='filled' color='warning'>Warning</Chip>
            <Chip version='filled' color='neutral'>Neutral</Chip>
            <Chip version='filled' color='#f5d758'>Other</Chip>
          </div>
        </Accordion>

        <Accordion label='Chip color tonal' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip tonal version='text' color='primary'>Primary</Chip>
            <Chip tonal version='text' color='secondary'>Secondary</Chip>
            <Chip tonal version='text' color='tertiary'>Tertiary</Chip>
            <Chip tonal version='text' color='quaternary'>Quaternary</Chip>
            <Chip tonal version='text' color='info'>Info</Chip>
            <Chip tonal version='text' color='success'>Success</Chip>
            <Chip tonal version='text' color='error'>Error</Chip>
            <Chip tonal version='text' color='warning'>Warning</Chip>
            <Chip tonal version='text' color='neutral'>Neutral</Chip>
            <Chip tonal version='text' color='#f5d758'>Other</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip tonal version='outlined' color='primary'>Primary</Chip>
            <Chip tonal version='outlined' color='secondary'>Secondary</Chip>
            <Chip tonal version='outlined' color='tertiary'>Tertiary</Chip>
            <Chip tonal version='outlined' color='quaternary'>Quaternary</Chip>
            <Chip tonal version='outlined' color='info'>Info</Chip>
            <Chip tonal version='outlined' color='success'>Success</Chip>
            <Chip tonal version='outlined' color='error'>Error</Chip>
            <Chip tonal version='outlined' color='warning'>Warning</Chip>
            <Chip tonal version='outlined' color='neutral'>Neutral</Chip>
            <Chip tonal version='outlined' color='#f5d758'>Other</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip tonal version='filled' color='primary'>Primary</Chip>
            <Chip tonal version='filled' color='secondary'>Secondary</Chip>
            <Chip tonal version='filled' color='tertiary'>Tertiary</Chip>
            <Chip tonal version='filled' color='quaternary'>Quaternary</Chip>
            <Chip tonal version='filled' color='info'>Info</Chip>
            <Chip tonal version='filled' color='success'>Success</Chip>
            <Chip tonal version='filled' color='error'>Error</Chip>
            <Chip tonal version='filled' color='warning'>Warning</Chip>
            <Chip tonal version='filled' color='neutral'>Neutral</Chip>
            <Chip tonal version='filled' color='#f5d758'>Other</Chip>
          </div>
        </Accordion>

        <Accordion label='Chip size' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip color='secondary' size='small'>Small</Chip>
            <Chip color='secondary' size='regular'>Regular</Chip>
            <Chip color='secondary' size='large'>Large</Chip>
            <Chip color='secondary' size='large' fullWidth>Full width</Chip>
          </div>
        </Accordion>

        <Accordion label='Chip loading' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('loading')}>a</Button>

          <div className={classNames([classes.row, classes.center])}>
            <Chip version='text' color='primary' size='small' loading={a.loading}>Small</Chip>
            <Chip version='outlined' color='secondary' size='regular' loading={a.loading}>Regular</Chip>
            <Chip version='filled' color='secondary' size='regular' loading={a.loading}>Regular</Chip>
            <Chip version='filled' tonal color='tertiary' size='large' loading={a.loading}>Large</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip version='text' color='primary' size='small' loading={a.loading} loadingLabel='Loading...'>Loading label</Chip>
            <Chip version='outlined' color='secondary' size='regular' loading={a.loading} loadingLabel='Loading...'>Loading label</Chip>
            <Chip version='filled' color='secondary' size='regular' loading={a.loading} loadingLabel='Loading...'>Loading label</Chip>
            <Chip version='filled' tonal color='tertiary' size='large' loading={a.loading} loadingLabel='Loading...'>Loading label</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip version='text' color='primary' size='small' loading={a.loading} loadingIconPosition='start'>Loading start</Chip>
            <Chip version='outlined' color='secondary' size='regular' loading={a.loading} loadingIconPosition='start'>Loading start</Chip>
            <Chip version='filled' color='secondary' size='regular' loading={a.loading} loadingIconPosition='start'>Loading start</Chip>
            <Chip version='filled' tonal color='tertiary' size='large' loading={a.loading} loadingIconPosition='start'>Loading start</Chip>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Chip version='text' color='primary' size='small' loading={a.loading} loadingIconPosition='end'>Loading end</Chip>
            <Chip version='outlined' color='secondary' size='regular' loading={a.loading} loadingIconPosition='end'>Loading end</Chip>
            <Chip version='filled' color='secondary' size='regular' loading={a.loading} loadingIconPosition='end'>Loading end</Chip>
            <Chip version='filled' tonal color='tertiary' size='large' loading={a.loading} loadingIconPosition='end'>Loading end</Chip>
          </div>
        </Accordion>

        <Accordion label='Chip disabled' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip version='text' color='primary' size='small' disabled>Small</Chip>
            <Chip version='outlined' color='secondary' size='regular' disabled>Regular</Chip>
            <Chip version='filled' color='secondary' size='regular' disabled>Regular</Chip>
            <Chip version='filled' tonal color='tertiary' size='large' disabled>Large</Chip>
          </div>
        </Accordion>

        <Accordion label='Chip icons' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip version='text' color='secondary' size='small' startIcon={<IconMaterialAddRounded />}>Start icon</Chip>
            <Chip version='filled' color='warning' size='regular' startIcon={<IconMaterialAddRounded />}>Start icon</Chip>
            <Chip version='outlined' color='secondary' size='large' startIcon={<IconMaterialAddRounded />}>Start icon</Chip>

            <Chip version='text' color='secondary' size='small' endIcon={<IconMaterialAddRounded />}>End icon</Chip>
            <Chip version='filled' color='warning' size='regular' endIcon={<IconMaterialAddRounded />}>End end icon</Chip>
            <Chip version='outlined' color='secondary' size='large' endIcon={<IconMaterialAddRounded />}>End icon</Chip>

            <Chip version='outlined' color='warning' size='small' startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Start and end icon</Chip>
            <Chip version='filled' tonal color='warning' size='regular' startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Start and end icon</Chip>
            <Chip version='text' color='warning' size='large' startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Start and end icon</Chip>
          </div>
        </Accordion>

        <Accordion label='Chip selected' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip version='text' color='primary' size='small' selected>Small</Chip>
            <Chip version='outlined' color='secondary' size='regular' selected>Regular</Chip>
            <Chip version='filled' color='secondary' size='regular' selected>Regular</Chip>
            <Chip version='filled' tonal color='tertiary' size='large' selected>Large</Chip>
          </div>
        </Accordion>

        <Accordion label='Chip icon selected' open>
          <div className={classNames([classes.row, classes.center])}>
            <Chip startIcon={<IconMaterialPottedPlantRounded />} startIconSelected={<IconMaterialPottedPlantRoundedFilled />} endIcon={<IconMaterialPottedPlantRounded />} endIconSelected={<IconMaterialPottedPlantRoundedFilled />}>Regular</Chip>

            <Chip startIcon={<IconMaterialPottedPlantRounded />} startIconSelected={<IconMaterialPottedPlantRoundedFilled />} endIcon={<IconMaterialPottedPlantRounded />} endIconSelected={<IconMaterialPottedPlantRoundedFilled />} selected>Regular</Chip>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <Chip color='secondary'>Enabled</Chip>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Chip color='secondary'>Enabled</Chip>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiChip: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Chip color='secondary'>Enabled</Chip>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiChip: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 44
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Chip color='secondary'>Enabled</Chip>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiChip: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Chip>Enabled</Chip>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Chip>Enabled</styled.Chip>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='ClickListener'>
        <Accordion label='ClickListener' open>
          <div className={classNames([classes.column])}>
            <ClickListener
            // onClickInside={() => console.log('inside')}

            // onClickOutside={() => console.log('outside')}
            >
              <div style={{ background: 'yellow', padding: 40 }}>
                <div>
                  a
                </div>
              </div>
            </ClickListener>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Avatar group'>
        <Accordion label='Avatar group' open>
          <div className={classNames([classes.column])}>
            <AvatarGroup>
              <Avatar>1</Avatar>
              <Avatar>2</Avatar>
              <Avatar>3</Avatar>
              <Avatar>4</Avatar>
              <Avatar>5</Avatar>
            </AvatarGroup>
          </div>
        </Accordion>

        <Accordion label='Avatar group with image' open>
          <div className={classNames([classes.column])}>
            <AvatarGroup total={6} size='small'>
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
            </AvatarGroup>

            <AvatarGroup total={29} size='regular'>
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
            </AvatarGroup>

            <AvatarGroup total={149} size='large'>
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
            </AvatarGroup>

            <AvatarGroup total={449} size={70}>
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
              <Avatar image='/avatar.jpeg' />
            </AvatarGroup>
          </div>
        </Accordion>

        <Accordion label='Avatar group size' open>
          <div className={classNames([classes.column])}>
            <AvatarGroup size='small'>
              <Avatar>1</Avatar>
              <Avatar>2</Avatar>
              <Avatar>3</Avatar>
              <Avatar>4</Avatar>
              <Avatar>5</Avatar>
            </AvatarGroup>
          </div>

          <div className={classNames([classes.column])}>
            <AvatarGroup size='regular'>
              <Avatar>1</Avatar>
              <Avatar>2</Avatar>
              <Avatar>3</Avatar>
              <Avatar>4</Avatar>
              <Avatar>5</Avatar>
            </AvatarGroup>
          </div>

          <div className={classNames([classes.column])}>
            <AvatarGroup size='large'>
              <Avatar>1</Avatar>
              <Avatar>2</Avatar>
              <Avatar>3</Avatar>
              <Avatar>4</Avatar>
              <Avatar>5</Avatar>
            </AvatarGroup>
          </div>

          <div className={classNames([classes.column])}>
            <AvatarGroup size={70}>
              <Avatar>1</Avatar>
              <Avatar>2</Avatar>
              <Avatar>3</Avatar>
              <Avatar>4</Avatar>
              <Avatar>5</Avatar>
            </AvatarGroup>
          </div>
        </Accordion>

        <Accordion label='Avatar group color' open>
          <div className={classNames([classes.column])}>
            <AvatarGroup color='secondary'>
              <Avatar>1</Avatar>
              <Avatar>2</Avatar>
              <Avatar>3</Avatar>
              <Avatar>4</Avatar>
              <Avatar>5</Avatar>
            </AvatarGroup>
          </div>
        </Accordion>

        <Accordion label='Avatar group Avatar override' open>
          <div className={classNames([classes.column])}>
            <AvatarGroup color='secondary'>
              <Avatar color='primary'>1</Avatar>
              <Avatar>2</Avatar>
              <Avatar>3</Avatar>
              <Avatar>4</Avatar>
              <Avatar>5</Avatar>
            </AvatarGroup>
          </div>
        </Accordion>

        <Accordion label='Avatar group max' open>
          <div className={classNames([classes.column])}>
            <AvatarGroup max={4}>
              <Avatar>1</Avatar>
              <Avatar>2</Avatar>
              <Avatar>3</Avatar>
              <Avatar>4</Avatar>
              <Avatar>5</Avatar>
            </AvatarGroup>
          </div>
        </Accordion>

        <Accordion label='Avatar group total' open>
          <div className={classNames([classes.column])}>
            <AvatarGroup total={29}>
              <Avatar>1</Avatar>
              <Avatar>2</Avatar>
              <Avatar>3</Avatar>
              <Avatar>4</Avatar>
              <Avatar>5</Avatar>
            </AvatarGroup>
          </div>
        </Accordion>

        <Accordion label='Avatar group additional' open>
          <div className={classNames([classes.column])}>
            <AvatarGroup total={29} size='small'>
              <Avatar>1</Avatar>
              <Avatar>2</Avatar>
              <Avatar>3</Avatar>
              <Avatar>4</Avatar>
              <Avatar>5</Avatar>
            </AvatarGroup>

            <AvatarGroup total={29} size='regular'>
              <Avatar>1</Avatar>
              <Avatar>2</Avatar>
              <Avatar>3</Avatar>
              <Avatar>4</Avatar>
              <Avatar>5</Avatar>
            </AvatarGroup>

            <AvatarGroup total={29} size='large'>
              <Avatar>1</Avatar>
              <Avatar>2</Avatar>
              <Avatar>3</Avatar>
              <Avatar>4</Avatar>
              <Avatar>5</Avatar>
            </AvatarGroup>

            <AvatarGroup total={29} size={70}>
              <Avatar>1</Avatar>
              <Avatar>2</Avatar>
              <Avatar>3</Avatar>
              <Avatar>4</Avatar>
              <Avatar>5</Avatar>
            </AvatarGroup>
          </div>
        </Accordion>

        <Accordion label='Avatar group disabled' open>
          <div className={classNames([classes.column])}>
            <AvatarGroup max={4} disabled>
              <Avatar>1</Avatar>
              <Avatar>2</Avatar>
              <Avatar>3</Avatar>
              <Avatar>4</Avatar>
              <Avatar>5</Avatar>
            </AvatarGroup>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <AvatarGroup color='secondary'>
              <Avatar>1</Avatar>
              <Avatar>2</Avatar>
              <Avatar>3</Avatar>
              <Avatar>4</Avatar>
              <Avatar>5</Avatar>
            </AvatarGroup>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <AvatarGroup color='secondary'>
                  <Avatar>1</Avatar>
                  <Avatar>2</Avatar>
                  <Avatar>3</Avatar>
                  <Avatar>4</Avatar>
                  <Avatar>5</Avatar>
                </AvatarGroup>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiAvatarGroup: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <AvatarGroup color='secondary'>
                  <Avatar>1</Avatar>
                  <Avatar>2</Avatar>
                  <Avatar>3</Avatar>
                  <Avatar>4</Avatar>
                  <Avatar>5</Avatar>
                </AvatarGroup>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiAvatarGroup: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 44
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <AvatarGroup color='secondary'>
                  <Avatar>1</Avatar>
                  <Avatar>2</Avatar>
                  <Avatar>3</Avatar>
                  <Avatar>4</Avatar>
                  <Avatar>5</Avatar>
                </AvatarGroup>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiAvatarGroup: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <AvatarGroup>
                  <Avatar>1</Avatar>
                  <Avatar>2</Avatar>
                  <Avatar>3</Avatar>
                  <Avatar>4</Avatar>
                  <Avatar>5</Avatar>
                </AvatarGroup>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.AvatarGroup color='secondary'>
                <Avatar>1</Avatar>
                <Avatar>2</Avatar>
                <Avatar>3</Avatar>
                <Avatar>4</Avatar>
                <Avatar>5</Avatar>
              </styled.AvatarGroup>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Avatar'>
        <Accordion label='Avatar' open>
          <div className={classNames([classes.row, classes.center])}>
            <Avatar>
              <IconMaterialPottedPlantRounded />
            </Avatar>
          </div>
        </Accordion>

        <Accordion label='Avatar with text' open>
          <div className={classNames([classes.row, classes.center])}>
            <Avatar>
              a
            </Avatar>

            <Avatar>
              Aa
            </Avatar>

            <Avatar>
              Asda
            </Avatar>
          </div>
        </Accordion>

        <Accordion label='Avatar with image' open>
          <div className={classNames([classes.row, classes.center])}>
            <Avatar image='/avatar.jpeg' />
          </div>
        </Accordion>

        <Accordion label='Avatar versions' open>
          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='filled' color='secondary' size='small'>
              <IconMaterialPottedPlantRounded />
            </Avatar>
            <Avatar version='filled' color='secondary' size='regular'>
              <IconMaterialPottedPlantRounded />
            </Avatar>
            <Avatar version='filled' color='secondary' size='large'>
              <IconMaterialPottedPlantRounded />
            </Avatar>
            <Avatar version='filled' color='secondary' size='large' elevation={false}>
              <IconMaterialPottedPlantRounded />
            </Avatar>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar tonal version='filled' color='secondary' size='small'>
              <IconMaterialPottedPlantRounded />
            </Avatar>
            <Avatar tonal version='filled' color='secondary' size='regular'>
              <IconMaterialPottedPlantRounded />
            </Avatar>
            <Avatar tonal version='filled' color='secondary' size='large'>
              <IconMaterialPottedPlantRounded />
            </Avatar>
            <Avatar tonal version='filled' color='secondary' size='large' elevation={false}>
              <IconMaterialPottedPlantRounded />
            </Avatar>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='outlined' color='secondary' size='small'>
              <IconMaterialPottedPlantRounded />
            </Avatar>
            <Avatar version='outlined' color='secondary' size='regular'>
              <IconMaterialPottedPlantRounded />
            </Avatar>
            <Avatar version='outlined' color='secondary' size='large'>
              <IconMaterialPottedPlantRounded />
            </Avatar>
            <Avatar version='outlined' color='secondary' size='large' elevation={false}>
              <IconMaterialPottedPlantRounded />
            </Avatar>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='text' color='secondary' size='small'>
              <IconMaterialPottedPlantRounded />
            </Avatar>
            <Avatar version='text' color='secondary' size='regular'>
              <IconMaterialPottedPlantRounded />
            </Avatar>
            <Avatar version='text' color='secondary' size='large'>
              <IconMaterialPottedPlantRounded />
            </Avatar>
          </div>
        </Accordion>

        <Accordion label='Avatar versions text' open>
          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='filled' color='secondary' size='small'>
              Aa
            </Avatar>
            <Avatar version='filled' color='secondary' size='regular'>
              Aa
            </Avatar>
            <Avatar version='filled' color='secondary' size='large'>
              Aa
            </Avatar>
            <Avatar version='filled' color='secondary' size='large' elevation={false}>
              Aa
            </Avatar>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar tonal version='filled' color='secondary' size='small'>
              Aa
            </Avatar>
            <Avatar tonal version='filled' color='secondary' size='regular'>
              Aa
            </Avatar>
            <Avatar tonal version='filled' color='secondary' size='large'>
              Aa
            </Avatar>
            <Avatar tonal version='filled' color='secondary' size='large' elevation={false}>
              Aa
            </Avatar>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='outlined' color='secondary' size='small'>
              Aa
            </Avatar>
            <Avatar version='outlined' color='secondary' size='regular'>
              Aa
            </Avatar>
            <Avatar version='outlined' color='secondary' size='large'>
              Aa
            </Avatar>
            <Avatar version='outlined' color='secondary' size='large' elevation={false}>
              Aa
            </Avatar>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='text' color='secondary' size='small'>
              Aa
            </Avatar>
            <Avatar version='text' color='secondary' size='regular'>
              Aa
            </Avatar>
            <Avatar version='text' color='secondary' size='large'>
              Aa
            </Avatar>
          </div>
        </Accordion>

        <Accordion label='Avatar versions image' open>
          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='filled' color='secondary' size='small' image='/avatar.jpeg' />
            <Avatar version='filled' color='secondary' size='regular' image='/avatar.jpeg' />
            <Avatar version='filled' color='secondary' size='large' image='/avatar.jpeg' />
            <Avatar version='filled' color='secondary' size='large' elevation={false} image='/avatar.jpeg' />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar tonal version='filled' color='secondary' size='small' image='/avatar.jpeg' />
            <Avatar tonal version='filled' color='secondary' size='regular' image='/avatar.jpeg' />
            <Avatar tonal version='filled' color='secondary' size='large' image='/avatar.jpeg' />
            <Avatar tonal version='filled' color='secondary' size='large' elevation={false} image='/avatar.jpeg' />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='outlined' color='secondary' size='small' image='/avatar.jpeg' />
            <Avatar version='outlined' color='secondary' size='regular' image='/avatar.jpeg' />
            <Avatar version='outlined' color='secondary' size='large' image='/avatar.jpeg' />
            <Avatar version='outlined' color='secondary' size='large' elevation={false} image='/avatar.jpeg' />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='text' color='secondary' size='small' image='/avatar.jpeg' />
            <Avatar version='text' color='secondary' size='regular' image='/avatar.jpeg' />
            <Avatar version='text' color='secondary' size='large' image='/avatar.jpeg' />
          </div>
        </Accordion>

        <Accordion label='Avatar color' open>
          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='text' color='default'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='text' color='primary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='text' color='secondary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='text' color='tertiary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='text' color='quaternary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='text' color='info'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='text' color='success'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='text' color='error'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='text' color='warning'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='text' color='neutral'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='text' color='#f5d758'><IconMaterialPottedPlantRounded /></Avatar>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='outlined' color='default'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='outlined' color='primary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='outlined' color='secondary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='outlined' color='tertiary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='outlined' color='quaternary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='outlined' color='info'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='outlined' color='success'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='outlined' color='error'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='outlined' color='warning'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='outlined' color='neutral'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='outlined' color='#f5d758'><IconMaterialPottedPlantRounded /></Avatar>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='filled' color='default'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='filled' color='primary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='filled' color='secondary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='filled' color='tertiary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='filled' color='quaternary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='filled' color='info'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='filled' color='success'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='filled' color='error'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='filled' color='warning'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='filled' color='neutral'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='filled' color='#f5d758'><IconMaterialPottedPlantRounded /></Avatar>
          </div>
        </Accordion>

        <Accordion label='Avatar color text' open>
          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='text' color='default'>Aa</Avatar>
            <Avatar version='text' color='primary'>Aa</Avatar>
            <Avatar version='text' color='secondary'>Aa</Avatar>
            <Avatar version='text' color='tertiary'>Aa</Avatar>
            <Avatar version='text' color='quaternary'>Aa</Avatar>
            <Avatar version='text' color='info'>Aa</Avatar>
            <Avatar version='text' color='success'>Aa</Avatar>
            <Avatar version='text' color='error'>Aa</Avatar>
            <Avatar version='text' color='warning'>Aa</Avatar>
            <Avatar version='text' color='neutral'>Aa</Avatar>
            <Avatar version='text' color='#f5d758'>Aa</Avatar>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='outlined' color='default'>Aa</Avatar>
            <Avatar version='outlined' color='primary'>Aa</Avatar>
            <Avatar version='outlined' color='secondary'>Aa</Avatar>
            <Avatar version='outlined' color='tertiary'>Aa</Avatar>
            <Avatar version='outlined' color='quaternary'>Aa</Avatar>
            <Avatar version='outlined' color='info'>Aa</Avatar>
            <Avatar version='outlined' color='success'>Aa</Avatar>
            <Avatar version='outlined' color='error'>Aa</Avatar>
            <Avatar version='outlined' color='warning'>Aa</Avatar>
            <Avatar version='outlined' color='neutral'>Aa</Avatar>
            <Avatar version='outlined' color='#f5d758'>Aa</Avatar>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='filled' color='default'>Aa</Avatar>
            <Avatar version='filled' color='primary'>Aa</Avatar>
            <Avatar version='filled' color='secondary'>Aa</Avatar>
            <Avatar version='filled' color='tertiary'>Aa</Avatar>
            <Avatar version='filled' color='quaternary'>Aa</Avatar>
            <Avatar version='filled' color='info'>Aa</Avatar>
            <Avatar version='filled' color='success'>Aa</Avatar>
            <Avatar version='filled' color='error'>Aa</Avatar>
            <Avatar version='filled' color='warning'>Aa</Avatar>
            <Avatar version='filled' color='neutral'>Aa</Avatar>
            <Avatar version='filled' color='#f5d758'>Aa</Avatar>
          </div>
        </Accordion>

        <Accordion label='Avatar color tonal' open>
          <div className={classNames([classes.row, classes.center])}>
            <Avatar tonal version='text' color='primary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='text' color='secondary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='text' color='tertiary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='text' color='quaternary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='text' color='info'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='text' color='success'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='text' color='error'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='text' color='warning'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='text' color='neutral'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='text' color='#f5d758'><IconMaterialPottedPlantRounded /></Avatar>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar tonal version='outlined' color='primary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='outlined' color='secondary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='outlined' color='tertiary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='outlined' color='quaternary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='outlined' color='info'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='outlined' color='success'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='outlined' color='error'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='outlined' color='warning'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='outlined' color='neutral'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='outlined' color='#f5d758'><IconMaterialPottedPlantRounded /></Avatar>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar tonal version='filled' color='primary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='filled' color='secondary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='filled' color='tertiary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='filled' color='quaternary'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='filled' color='info'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='filled' color='success'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='filled' color='error'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='filled' color='warning'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='filled' color='neutral'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar tonal version='filled' color='#f5d758'><IconMaterialPottedPlantRounded /></Avatar>
          </div>
        </Accordion>

        <Accordion label='Avatar color tonal text' open>
          <div className={classNames([classes.row, classes.center])}>
            <Avatar tonal version='text' color='primary'>Aa</Avatar>
            <Avatar tonal version='text' color='secondary'>Aa</Avatar>
            <Avatar tonal version='text' color='tertiary'>Aa</Avatar>
            <Avatar tonal version='text' color='quaternary'>Aa</Avatar>
            <Avatar tonal version='text' color='info'>Aa</Avatar>
            <Avatar tonal version='text' color='success'>Aa</Avatar>
            <Avatar tonal version='text' color='error'>Aa</Avatar>
            <Avatar tonal version='text' color='warning'>Aa</Avatar>
            <Avatar tonal version='text' color='neutral'>Aa</Avatar>
            <Avatar tonal version='text' color='#f5d758'>Aa</Avatar>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar tonal version='outlined' color='primary'>Aa</Avatar>
            <Avatar tonal version='outlined' color='secondary'>Aa</Avatar>
            <Avatar tonal version='outlined' color='tertiary'>Aa</Avatar>
            <Avatar tonal version='outlined' color='quaternary'>Aa</Avatar>
            <Avatar tonal version='outlined' color='info'>Aa</Avatar>
            <Avatar tonal version='outlined' color='success'>Aa</Avatar>
            <Avatar tonal version='outlined' color='error'>Aa</Avatar>
            <Avatar tonal version='outlined' color='warning'>Aa</Avatar>
            <Avatar tonal version='outlined' color='neutral'>Aa</Avatar>
            <Avatar tonal version='outlined' color='#f5d758'>Aa</Avatar>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar tonal version='filled' color='primary'>Aa</Avatar>
            <Avatar tonal version='filled' color='secondary'>Aa</Avatar>
            <Avatar tonal version='filled' color='tertiary'>Aa</Avatar>
            <Avatar tonal version='filled' color='quaternary'>Aa</Avatar>
            <Avatar tonal version='filled' color='info'>Aa</Avatar>
            <Avatar tonal version='filled' color='success'>Aa</Avatar>
            <Avatar tonal version='filled' color='error'>Aa</Avatar>
            <Avatar tonal version='filled' color='warning'>Aa</Avatar>
            <Avatar tonal version='filled' color='neutral'>Aa</Avatar>
            <Avatar tonal version='filled' color='#f5d758'>Aa</Avatar>
          </div>
        </Accordion>

        <Accordion label='Avatar size' open>
          <div className={classNames([classes.row, classes.center])}>
            <Avatar color='secondary' size='small'>Aa</Avatar>
            <Avatar color='secondary' size='regular'>Aa</Avatar>
            <Avatar color='secondary' size='large'>Aa</Avatar>
            <Avatar color='secondary' size={70}>Aa</Avatar>

            <Avatar color='secondary' size='small'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar color='secondary' size='regular'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar color='secondary' size='large'><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar color='secondary' size={70}><IconMaterialPottedPlantRounded /></Avatar>

            <Avatar color='secondary' size='small' image='/avatar.jpeg' />
            <Avatar color='secondary' size='regular' image='/avatar.jpeg' />
            <Avatar color='secondary' size='large' image='/avatar.jpeg' />
            <Avatar color='secondary' size={70} image='/avatar.jpeg' />
          </div>
        </Accordion>

        <Accordion label='Avatar loading' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('loading')}>a</Button>

          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='text' color='primary' size='small' loading={a.loading}><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='outlined' color='secondary' size='regular' loading={a.loading}><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='filled' color='secondary' size='regular' loading={a.loading}><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='filled' tonal color='tertiary' size='large' loading={a.loading}><IconMaterialPottedPlantRounded /></Avatar>
          </div>
        </Accordion>

        <Accordion label='Avatar disabled' open>
          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='text' color='primary' size='small' disabled><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='outlined' color='secondary' size='regular' disabled><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='filled' color='secondary' size='regular' disabled><IconMaterialPottedPlantRounded /></Avatar>
            <Avatar version='filled' tonal color='tertiary' size='large' disabled><IconMaterialPottedPlantRounded /></Avatar>
          </div>
        </Accordion>

        <Accordion label='Avatar disabled text' open>
          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='text' color='primary' size='small' disabled>Aa</Avatar>
            <Avatar version='outlined' color='secondary' size='regular' disabled>Aa</Avatar>
            <Avatar version='filled' color='secondary' size='regular' disabled>Aa</Avatar>
            <Avatar version='filled' tonal color='tertiary' size='large' disabled>Aa</Avatar>
          </div>
        </Accordion>

        <Accordion label='Avatar disabled image' open>
          <div className={classNames([classes.row, classes.center])}>
            <Avatar version='text' color='primary' size='small' disabled image='/avatar.jpeg' />
            <Avatar version='outlined' color='secondary' size='regular' disabled image='/avatar.jpeg' />
            <Avatar version='filled' color='secondary' size='regular' disabled image='/avatar.jpeg' />
            <Avatar version='filled' tonal color='tertiary' size='large' disabled image='/avatar.jpeg' />
          </div>
        </Accordion>

        <Accordion label='Avatar square' open>
          <div className={classNames([classes.row, classes.center])}>
            <Avatar square>
              <IconMaterialPottedPlantRounded />
            </Avatar>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <Avatar color='secondary'>a</Avatar>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Avatar color='secondary'>a</Avatar>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiAvatar: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Avatar color='secondary'>a</Avatar>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiAvatar: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 44
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Avatar color='secondary'>a</Avatar>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiAvatar: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Avatar>a</Avatar>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Avatar color='secondary'>a</styled.Avatar>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Badge'>
        <Accordion label='Badge' open>
          <div className={classNames([classes.column])}>
            <Badge indicator>
              <IconMaterialPottedPlantRounded />
            </Badge>
          </div>
        </Accordion>

        <Accordion label='Badge with value' open>
          <div className={classNames([classes.column])}>
            <Badge value='1'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='14'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='114'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='1114'>
              <IconMaterialPottedPlantRounded />
            </Badge>
          </div>
        </Accordion>

        <Accordion label='Badge color' open>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Badge value='14' color='default' tonal={false}>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='primary' tonal={false}>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='secondary' tonal={false}>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='tertiary' tonal={false}>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='quaternary' tonal={false}>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='info' tonal={false}>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='success' tonal={false}>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='error' tonal={false}>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='warning' tonal={false}>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='neutral' tonal={false}>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='#f5d758' tonal={false}>
              <IconMaterialPottedPlantRounded />
            </Badge>
          </div>
        </Accordion>

        <Accordion label='Badge color tonal' open>
          <div className={classNames([classes.column])} style={{ gap: 24 }}>
            <Badge value='14' color='primary' tonal>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='secondary' tonal>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='tertiary' tonal>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='quaternary' tonal>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='info' tonal>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='success' tonal>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='error' tonal>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='warning' tonal>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='neutral' tonal>
              <IconMaterialPottedPlantRounded />
            </Badge>
            <Badge value='14' color='#f5d758' tonal>
              <IconMaterialPottedPlantRounded />
            </Badge>
          </div>
        </Accordion>

        <Accordion label='Vertical top, horizontal right' open>
          <div className={classNames([classes.column])}>
            <Badge indicator vertical='top' horizontal='right'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='1' vertical='top' horizontal='right'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='14' vertical='top' horizontal='right'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='114' vertical='top' horizontal='right'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='1114' vertical='top' horizontal='right'>
              <IconMaterialPottedPlantRounded />
            </Badge>
          </div>
        </Accordion>

        <Accordion label='Vertical top, horizontal left' open>
          <div className={classNames([classes.column])}>
            <Badge indicator vertical='top' horizontal='left'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='1' vertical='top' horizontal='left'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='14' vertical='top' horizontal='left'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='114' vertical='top' horizontal='left'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='1114' vertical='top' horizontal='left'>
              <IconMaterialPottedPlantRounded />
            </Badge>
          </div>
        </Accordion>

        <Accordion label='Vertical bottom, horizontal right' open>
          <div className={classNames([classes.column])}>
            <Badge indicator vertical='bottom' horizontal='right'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='1' vertical='bottom' horizontal='right'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='14' vertical='bottom' horizontal='right'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='114' vertical='bottom' horizontal='right'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='1114' vertical='bottom' horizontal='right'>
              <IconMaterialPottedPlantRounded />
            </Badge>
          </div>
        </Accordion>

        <Accordion label='Vertical bottom, horizontal left' open>
          <div className={classNames([classes.column])}>
            <Badge indicator vertical='bottom' horizontal='left'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='1' vertical='bottom' horizontal='left'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='14' vertical='bottom' horizontal='left'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='114' vertical='bottom' horizontal='left'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Badge value='1114' vertical='bottom' horizontal='left'>
              <IconMaterialPottedPlantRounded />
            </Badge>
          </div>
        </Accordion>

        <Accordion label='Badge with value with max' open>
          <div className={classNames([classes.column])}>
            <Badge value={1114} max={114}>
              <IconMaterialPottedPlantRounded />
            </Badge>
          </div>
        </Accordion>

        <Accordion label='Badge with Icon button' open>
          <div className={classNames([classes.column])}>
            <Badge value={1}>
              <IconButton color='secondary'>
                <IconMaterialPottedPlantRounded />
              </IconButton>
            </Badge>

            <Badge value={14}>
              <IconButton color='secondary'>
                <IconMaterialPottedPlantRounded />
              </IconButton>
            </Badge>

            <Badge value={114}>
              <IconButton color='secondary'>
                <IconMaterialPottedPlantRounded />
              </IconButton>
            </Badge>

            <Badge value={1114} max={114}>
              <IconButton color='secondary'>
                <IconMaterialPottedPlantRounded />
              </IconButton>
            </Badge>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <Badge color='secondary' value='1114'>
              <IconMaterialPottedPlantRounded />
            </Badge>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Badge color='secondary' value='1114'>
                  <IconMaterialPottedPlantRounded />
                </Badge>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiBadge: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Badge color='secondary' value='1114'>
                  <IconMaterialPottedPlantRounded />
                </Badge>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiBadge: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 14
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Badge color='secondary' value='1114'>
                  <IconMaterialPottedPlantRounded />
                </Badge>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiBadge: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Badge value='1114'>
                  <IconMaterialPottedPlantRounded />
                </Badge>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Badge value='1114'>
                <IconMaterialPottedPlantRounded />
              </styled.Badge>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Divider'>
        <Accordion label='Divider' open>
          <div className={classNames([classes.column])}>
            <Divider />
          </div>
        </Accordion>

        <Accordion label='Divider color' open>
          <div className={classNames([classes.column, classes.center])} style={{ gap: 24 }}>
            <Divider color='default' />
            <Divider color='primary' />
            <Divider color='secondary' />
            <Divider color='tertiary' />
            <Divider color='quaternary' />
            <Divider color='info' />
            <Divider color='success' />
            <Divider color='error' />
            <Divider color='warning' />
            <Divider color='neutral' />
            <Divider color='#f5d758' />
          </div>
        </Accordion>

        <Accordion label='Divider color tonal' open>
          <div className={classNames([classes.column, classes.center])} style={{ gap: 24 }}>
            <Divider color='primary' tonal />
            <Divider color='secondary' tonal />
            <Divider color='tertiary' tonal />
            <Divider color='quaternary' tonal />
            <Divider color='info' tonal />
            <Divider color='success' tonal />
            <Divider color='error' tonal />
            <Divider color='warning' tonal />
            <Divider color='neutral' tonal />
            <Divider color='#f5d758' tonal />
          </div>
        </Accordion>

        <Accordion label='Divider color opacity' open>
          <div className={classNames([classes.column, classes.center])} style={{ gap: 24 }}>
            <Divider color='primary' opacity={0.7} />
            <Divider color='secondary' opacity={0.7} />
            <Divider color='tertiary' opacity={0.7} />
            <Divider color='quaternary' opacity={0.7} />
            <Divider color='info' opacity={0.7} />
            <Divider color='success' opacity={0.7} />
            <Divider color='error' opacity={0.7} />
            <Divider color='warning' opacity={0.7} />
            <Divider color='neutral' opacity={0.7} />
            <Divider color='#f5d758' opacity={0.7} />
          </div>
        </Accordion>

        <Accordion label='Divider inset' open>
          <div className={classNames([classes.column])}>
            <Divider inset />
          </div>
        </Accordion>

        <Accordion label='Divider orientation' open>
          <div className={classNames([classes.column])}>
            <Divider orientation='horizontal' />
          </div>

          <div className={classNames([classes.row])} style={{ height: 140, width: 140 }}>
            a

            <Divider orientation='vertical' />

            a14
          </div>
        </Accordion>

        <Accordion label='Divider middle' open>
          <div className={classNames([classes.column])}>
            <Divider middle />
          </div>

          <div className={classNames([classes.row])} style={{ height: 140, width: 140 }}>
            a

            <Divider orientation='vertical' middle />

            a14
          </div>
        </Accordion>

        <Accordion label='Divider with text' open>
          <div className={classNames([classes.column])}>
            <Divider>
              Text
            </Divider>
          </div>

          <div className={classNames([classes.column])}>
            <Divider middle>
              Text
            </Divider>
          </div>

          <div className={classNames([classes.row])} style={{ height: 140, width: 140 }}>
            a

            <Divider orientation='vertical'>
              Text
            </Divider>

            a14
          </div>

          <div className={classNames([classes.row])} style={{ height: 140, width: 140 }}>
            a

            <Divider orientation='vertical' middle>
              Text
            </Divider>

            a14
          </div>
        </Accordion>

        <Accordion label='Divider with text alignment' open>
          <div className={classNames([classes.column, classes.center])} style={{ gap: 24 }}>
            <Divider alignment='start'>
              Text
            </Divider>

            <Divider alignment='center'>
              Text
            </Divider>

            <Divider alignment='end'>
              Text
            </Divider>
          </div>

          <div className={classNames([classes.row])} style={{ height: 140, width: 140 }}>
            a

            <Divider orientation='vertical' alignment='start'>
              Text
            </Divider>

            a14
          </div>

          <div className={classNames([classes.row])} style={{ height: 140, width: 140 }}>
            a

            <Divider orientation='vertical' alignment='center'>
              Text
            </Divider>

            a14
          </div>

          <div className={classNames([classes.row])} style={{ height: 140, width: 140 }}>
            a

            <Divider orientation='vertical' alignment='end'>
              Text
            </Divider>

            a14
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <Divider color='secondary' />

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <Divider color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiDivider: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <Divider color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiDivider: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 4
                            }
                          }
                        }
                      }
                    }
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <Divider color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiDivider: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <Divider />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Divider />
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Modal'>
        <Accordion label='Modal' open>
          <div className={classNames([classes.column])}>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue(1)}>a</Button>

            <Modal
              open={a.modal === 1}

              onClose={() => updateValue()}
            >
              <ModalHeader>
                <ModalTitle>Basic modal title</ModalTitle>
              </ModalHeader>

              <ModalMain>
                <ModalText>
                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.
                </ModalText>
              </ModalMain>

              <ModalFooter>
                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>

                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </Accordion>

        <Accordion label='Modal with icon' open>
          <div className={classNames([classes.column])}>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue(2)}>a</Button>

            <Modal
              open={a.modal === 2}

              onClose={() => updateValue()}
            >
              <ModalHeader>
                <ModalIcon><IconMaterialPottedPlantRounded /></ModalIcon>
                <ModalTitle>Basic modal title</ModalTitle>
              </ModalHeader>

              <ModalMain>
                <ModalText>
                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.
                </ModalText>
              </ModalMain>

              <ModalFooter>
                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>

                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </Accordion>

        <Accordion label='Modal with overflow text' open>
          <div className={classNames([classes.column])}>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue(3)}>a</Button>

            <Modal
              open={a.modal === 3}

              onClose={() => updateValue()}
            >
              <ModalHeader>
                <ModalIcon><IconMaterialPottedPlantRounded /></ModalIcon>
                <ModalTitle>Basic modal title</ModalTitle>
              </ModalHeader>

              <ModalMain>
                <ModalText>
                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.

                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.

                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.
                </ModalText>
              </ModalMain>

              <ModalFooter>
                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>

                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </Accordion>

        <Accordion label='Modal modal component' open>
          <div className={classNames([classes.column])}>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue(5)}>a</Button>

            <Modal
              open={a.modal === 5}

              ModalComponent={Slide}

              onClose={() => updateValue()}
            >
              <ModalHeader>
                <ModalTitle>Basic modal title</ModalTitle>
              </ModalHeader>

              <ModalMain>
                <ModalText>
                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.
                </ModalText>
              </ModalMain>

              <ModalFooter>
                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>

                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </Accordion>

        <Accordion label='Modal max width' open>
          <div className={classNames([classes.column])}>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue('xxs')}>xxs</Button>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue('xs')}>xs</Button>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue('sm')}>sm</Button>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue('rg')}>rg</Button>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue('lg')}>lg</Button>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue('xl')}>xl</Button>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue('xxl')}>xxl</Button>

            <Modal
              open={['xxs', 'xs', 'sm', 'rg', 'lg', 'xl', 'xxl'].indexOf(a.modal) > -1}

              maxWidth={a.modal}

              onClose={() => updateValue()}
            >
              <ModalHeader>
                <ModalIcon><IconMaterialPottedPlantRounded /></ModalIcon>
                <ModalTitle>Basic modal title</ModalTitle>
              </ModalHeader>

              <ModalMain>
                <ModalText>
                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.

                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.

                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.
                </ModalText>
              </ModalMain>

              <ModalFooter>
                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>

                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </Accordion>

        <Accordion label='Modal full width' open>
          <div className={classNames([classes.column])}>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue(4)}>a</Button>

            <Modal
              open={a.modal === 4}

              fullWidth

              onClose={() => updateValue()}
            >
              <ModalHeader>
                <ModalIcon><IconMaterialPottedPlantRounded /></ModalIcon>
                <ModalTitle>Basic modal title</ModalTitle>
              </ModalHeader>

              <ModalMain>
                <ModalText>
                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.

                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.

                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.
                </ModalText>
              </ModalMain>

              <ModalFooter>
                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>

                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </Accordion>

        <Accordion label='Modal full screen' open>
          <div className={classNames([classes.column])}>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue(7)}>a</Button>

            <Modal
              open={a.modal === 7}

              ModalComponent={Slide}

              fullScreen

              onClose={() => updateValue()}
            >
              <ModalHeader>
                <ModalIcon><IconMaterialPottedPlantRounded /></ModalIcon>
                <ModalTitle>Basic modal title</ModalTitle>
              </ModalHeader>

              <ModalMain>
                <ModalText>
                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.

                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.

                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision. A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.
                </ModalText>
              </ModalMain>

              <ModalFooter>
                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>

                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue(11)}>a</Button>

            <Modal
              open={a.modal === 11}

              onClose={() => updateValue()}
            >
              <ModalHeader>
                <ModalIcon><IconMaterialPottedPlantRounded /></ModalIcon>
                <ModalTitle>Basic modal title</ModalTitle>
              </ModalHeader>

              <ModalMain>
                <ModalText>
                  A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.
                </ModalText>
              </ModalMain>

              <ModalFooter>
                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>

                <Button
                  version='text'

                  tonal
                >
                  Enabled
                </Button>
              </ModalFooter>
            </Modal>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      primary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue(12)}>a</Button>

                <Modal
                  open={a.modal === 12}

                  onClose={() => updateValue()}
                >
                  <ModalHeader>
                    <ModalIcon><IconMaterialPottedPlantRounded /></ModalIcon>
                    <ModalTitle>Basic modal title</ModalTitle>
                  </ModalHeader>

                  <ModalMain>
                    <ModalText>
                      A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.
                    </ModalText>
                  </ModalMain>

                  <ModalFooter>
                    <Button
                      version='text'

                      tonal
                    >
                      Enabled
                    </Button>

                    <Button
                      version='text'

                      tonal
                    >
                      Enabled
                    </Button>
                  </ModalFooter>
                </Modal>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiModal: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue(13)}>a</Button>

                <Modal
                  open={a.modal === 13}

                  onClose={() => updateValue()}
                >
                  <ModalHeader>
                    <ModalIcon><IconMaterialPottedPlantRounded /></ModalIcon>
                    <ModalTitle>Basic modal title</ModalTitle>
                  </ModalHeader>

                  <ModalMain>
                    <ModalText>
                      A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.
                    </ModalText>
                  </ModalMain>

                  <ModalFooter>
                    <Button
                      version='text'

                      tonal
                    >
                      Enabled
                    </Button>

                    <Button
                      version='text'

                      tonal
                    >
                      Enabled
                    </Button>
                  </ModalFooter>
                </Modal>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiModal: {
                        style: {
                          override: {
                            root: {
                              position: 'fixed',
                              inset: 0,
                              zIndex: 4000
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue(14)}>a</Button>

                <Modal
                  open={a.modal === 14}

                  onClose={() => updateValue()}
                >
                  <ModalHeader>
                    <ModalIcon><IconMaterialPottedPlantRounded /></ModalIcon>
                    <ModalTitle>Basic modal title</ModalTitle>
                  </ModalHeader>

                  <ModalMain>
                    <ModalText>
                      A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.
                    </ModalText>
                  </ModalMain>

                  <ModalFooter>
                    <Button
                      version='text'

                      tonal
                    >
                      Enabled
                    </Button>

                    <Button
                      version='text'

                      tonal
                    >
                      Enabled
                    </Button>
                  </ModalFooter>
                </Modal>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiModal: {
                        props: {
                          default: {
                            fullScreen: true
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue(15)}>a</Button>

                <Modal
                  open={a.modal === 15}

                  onClose={() => updateValue()}
                >
                  <ModalHeader>
                    <ModalIcon><IconMaterialPottedPlantRounded /></ModalIcon>
                    <ModalTitle>Basic modal title</ModalTitle>
                  </ModalHeader>

                  <ModalMain>
                    <ModalText>
                      A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.
                    </ModalText>
                  </ModalMain>

                  <ModalFooter>
                    <Button
                      version='text'

                      tonal
                    >
                      Enabled
                    </Button>

                    <Button
                      version='text'

                      tonal
                    >
                      Enabled
                    </Button>
                  </ModalFooter>
                </Modal>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <Button size='small' color='secondary' className={classes.btn} onClick={() => updateValue(17)}>a</Button>

              <styled.Modal
                open={a.modal === 17}

                onClose={() => updateValue()}
              >
                <ModalHeader>
                  <ModalIcon><IconMaterialPottedPlantRounded /></ModalIcon>
                  <ModalTitle>Basic modal title</ModalTitle>
                </ModalHeader>

                <ModalMain>
                  <ModalText>
                    A modal is type of window that appears in front of app content to provide critical information, or ask for a decision.
                  </ModalText>
                </ModalMain>

                <ModalFooter>
                  <Button
                    version='text'

                    tonal
                  >
                    Enabled
                  </Button>

                  <Button
                    version='text'

                    tonal
                  >
                    Enabled
                  </Button>
                </ModalFooter>
              </styled.Modal>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Portal'>
        <Accordion label='Portal' open>
          <div className={classNames([classes.column])}>
            <Button size='small' color='secondary' className={classes.btn} onClick={() => update('portal')}>a</Button>

            {a.portal && (
              <Portal element={window.document.body}>
                <Button>a</Button>
              </Portal>
            )}
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Focus'>
        <Accordion label='Focus' open>
          <div className={classNames([classes.column])}>
            <Focus>
              <Button color='secondary'>a</Button>
              <Button color='secondary'>a1</Button>
              <Button color='secondary'>a14</Button>
            </Focus>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Surface'>
        <Accordion label='Surface' open>
          <div className={classNames([classes.column])}>
            <Surface>Surface</Surface>
          </div>
        </Accordion>

        <Accordion label='Surface noBorderRadius' open>
          <div className={classNames([classes.column])}>
            <Surface elevation='1' noBorderRadius>Surface</Surface>
          </div>
        </Accordion>

        <Accordion label='Surface sizes' open>
          <div className={classNames([classes.column])}>
            <Surface size='small' elevation='1'>Small</Surface>
            <Surface size='regular' elevation='1'>Regular</Surface>
            <Surface size='large' elevation='1'>Large</Surface>
          </div>
        </Accordion>

        <Accordion label='Surface elevations' open>
          <div className={classNames([classes.column])}>
            <Surface elevation='0'>0</Surface>
            <Surface elevation='1'>1</Surface>
            <Surface elevation='2'>2</Surface>
            <Surface elevation='3'>3</Surface>
            <Surface elevation='4'>4</Surface>
            <Surface elevation='6'>6</Surface>
            <Surface elevation='8'>8</Surface>
            <Surface elevation='9'>9</Surface>
            <Surface elevation='12'>12</Surface>
            <Surface elevation='16'>16</Surface>
            <Surface elevation='24'>24</Surface>
          </div>
        </Accordion>

        <Accordion label='Surface colors' open>
          <div className={classNames([classes.column])}>
            <Surface color='default' tonal={false}>Default</Surface>
            <Surface color='primary' tonal={false}>Primary</Surface>
            <Surface color='secondary' tonal={false}>Secondary</Surface>
            <Surface color='tertiary' tonal={false}>Tertiary</Surface>
            <Surface color='quaternary' tonal={false}>Quaternary</Surface>
            <Surface color='info' tonal={false}>Info</Surface>
            <Surface color='success' tonal={false}>Success</Surface>
            <Surface color='error' tonal={false}>Error</Surface>
            <Surface color='warning' tonal={false}>Warning</Surface>
            <Surface color='neutral' tonal={false}>Neutral</Surface>
            <Surface color='#f5d758' tonal={false}>Other</Surface>
          </div>
        </Accordion>

        <Accordion label='Surface tonal' open>
          <div className={classNames([classes.column])}>
            <Surface color='primary' tonal>Primary</Surface>
            <Surface color='secondary' tonal>Secondary</Surface>
            <Surface color='tertiary' tonal>Tertiary</Surface>
            <Surface color='quaternary' tonal>Quaternary</Surface>
            <Surface color='info' tonal>Info</Surface>
            <Surface color='success' tonal>Success</Surface>
            <Surface color='error' tonal>Error</Surface>
            <Surface color='warning' tonal>Warning</Surface>
            <Surface color='neutral' tonal>Neutral</Surface>
            <Surface color='#f5d758' tonal>Other</Surface>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <Surface color='secondary'>
              a
            </Surface>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Surface color='secondary'>
                  a
                </Surface>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiSurface: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Surface color='secondary'>
                  a
                </Surface>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiSurface: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              width: 74
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Surface color='secondary'>
                  a
                </Surface>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiSurface: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Surface value='1114'>
                  a
                </Surface>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Surface>
                a
              </styled.Surface>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Link'>
        <Accordion label='Link' open>
          <div className={classNames([classes.column])}>
            <Link href='https://google.com' target='_blank'>Link</Link>
          </div>
        </Accordion>

        <Accordion label='Link underline' open>
          <div className={classNames([classes.column])}>
            <Link href='https://google.com' target='_blank' underline>Link</Link>
            <Link href='https://google.com' target='_blank' underline={false}>Link</Link>
            <Link href='https://google.com' target='_blank' underline='hover'>Link</Link>
          </div>
        </Accordion>

        <Accordion label='Link versions' open>
          <div className={classNames([classes.column])} style={{ gap: 0 }}>
            <Link href='https://google.com' target='_blank' version='d1'>Display 1</Link>
            <Link href='https://google.com' target='_blank' version='d2'>Display 2</Link>
            <Link href='https://google.com' target='_blank' version='d3'>Display 3</Link>

            <Link href='https://google.com' target='_blank' version='h1'>Heading 1</Link>
            <Link href='https://google.com' target='_blank' version='h2'>Heading 2</Link>
            <Link href='https://google.com' target='_blank' version='h3'>Heading 3</Link>

            <Link href='https://google.com' target='_blank' version='t1'>Title 1</Link>
            <Link href='https://google.com' target='_blank' version='t2'>Title 2</Link>
            <Link href='https://google.com' target='_blank' version='t3'>Title 3</Link>

            <Link href='https://google.com' target='_blank' version='l1'>Label 1</Link>
            <Link href='https://google.com' target='_blank' version='l2'>Label 2</Link>
            <Link href='https://google.com' target='_blank' version='l3'>Label 3</Link>

            <Link href='https://google.com' target='_blank' version='b1'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Link>

            <Link href='https://google.com' target='_blank' version='b2'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Link>

            <Link href='https://google.com' target='_blank' version='b3'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Link>
          </div>
        </Accordion>

        <Accordion label='Link colors' open>
          <div className={classNames([classes.row])}>
            <Link href='https://google.com' target='_blank' color='default'>Default</Link>
            <Link href='https://google.com' target='_blank' color='primary'>Primary</Link>
            <Link href='https://google.com' target='_blank' color='secondary'>Secondary</Link>
            <Link href='https://google.com' target='_blank' color='tertiary'>Tertiary</Link>
            <Link href='https://google.com' target='_blank' color='quaternary'>Quaternary</Link>
            <Link href='https://google.com' target='_blank' color='info'>Info</Link>
            <Link href='https://google.com' target='_blank' color='success'>Success</Link>
            <Link href='https://google.com' target='_blank' color='error'>Error</Link>
            <Link href='https://google.com' target='_blank' color='warning'>Warning</Link>
            <Link href='https://google.com' target='_blank' color='neutral'>Neutral</Link>
            <Link href='https://google.com' target='_blank' color='#f5d758'>Other</Link>
          </div>
        </Accordion>

        <Accordion label='Link colors tonal' open>
          <div className={classNames([classes.row])}>
            <Link href='https://google.com' target='_blank' color='primary' tonal>Primary</Link>
            <Link href='https://google.com' target='_blank' color='secondary' tonal>Secondary</Link>
            <Link href='https://google.com' target='_blank' color='tertiary' tonal>Tertiary</Link>
            <Link href='https://google.com' target='_blank' color='quaternary' tonal>Quaternary</Link>
            <Link href='https://google.com' target='_blank' color='info' tonal>Info</Link>
            <Link href='https://google.com' target='_blank' color='success' tonal>Success</Link>
            <Link href='https://google.com' target='_blank' color='error' tonal>Error</Link>
            <Link href='https://google.com' target='_blank' color='warning' tonal>Warning</Link>
            <Link href='https://google.com' target='_blank' color='neutral' tonal>Neutral</Link>
            <Link href='https://google.com' target='_blank' color='#f5d758' tonal>Other</Link>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <Link href='https://google.com' target='_blank' color='secondary'>Enabled</Link>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Link href='https://google.com' target='_blank' color='secondary'>Enabled</Link>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiLink: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Link href='https://google.com' target='_blank' color='secondary'>Enabled</Link>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiLink: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 44
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Link href='https://google.com' target='_blank' color='secondary'>Enabled</Link>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiLink: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Link href='https://google.com' target='_blank'>Enabled</Link>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Link href='https://google.com' target='_blank'>Enabled</styled.Link>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Type'>
        <Accordion label='Type' open>
          <div className={classNames([classes.column])}>
            <Type>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Type>
          </div>
        </Accordion>

        <Accordion label='Type versions' open>
          <div className={classNames([classes.column])} style={{ gap: 0 }}>
            <Type version='d1'>Display 1</Type>
            <Type version='d2'>Display 2</Type>
            <Type version='d3'>Display 3</Type>

            <Type version='h1'>Heading 1</Type>
            <Type version='h2'>Heading 2</Type>
            <Type version='h3'>Heading 3</Type>

            <Type version='t1'>Title 1</Type>
            <Type version='t2'>Title 2</Type>
            <Type version='t3'>Title 3</Type>

            <Type version='l1'>Label 1</Type>
            <Type version='l2'>Label 2</Type>
            <Type version='l3'>Label 3</Type>

            <Type version='b1'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Type>

            <Type version='b2'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Type>

            <Type version='b3'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Type>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <Type color='secondary'>Enabled</Type>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  typography: {
                    values: {
                      b2: {
                        fontSize: '11px'
                      }
                    }
                  }
                }}
              >
                <Type>Enabled</Type>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiType: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Type version='b3'>Enabled</Type>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiType: {
                        style: {
                          override: {
                            root: {
                              background: 'beige',
                              color: 'brown'
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Type version='b3'>Enabled</Type>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiType: {
                        props: {
                          default: {
                            version: 'b3'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Type>Enabled</Type>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Type>Enabled</styled.Type>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Fab'>
        <Accordion label='Fab' open>
          <div className={classNames([classes.row, classes.center])}>
            <Fab><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab><IconMaterialPottedPlantRounded /></Fab>
            <Fab>Filled</Fab>
          </div>
        </Accordion>

        <Accordion label='Fab versions' open>
          <div className={classNames([classes.row, classes.center])}>
            <Fab tonal={false} color='secondary' version='filled' size='small'><IconMaterialPottedPlantRounded /> Small</Fab>
            <Fab tonal={false} color='secondary' version='filled' size='regular'><IconMaterialPottedPlantRounded /></Fab>
            <Fab tonal={false} color='secondary' version='filled' size='large'>Large</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab color='secondary' tonal version='filled' size='small'><IconMaterialPottedPlantRounded /> Small</Fab>
            <Fab color='secondary' tonal version='filled' size='regular'><IconMaterialPottedPlantRounded /></Fab>
            <Fab color='secondary' tonal version='filled' size='large'>Large</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab color='secondary' version='outlined' size='small'><IconMaterialPottedPlantRounded /> Small</Fab>
            <Fab color='secondary' version='outlined' size='regular'><IconMaterialPottedPlantRounded /></Fab>
            <Fab color='secondary' version='outlined' size='large'>Large</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab color='secondary' version='text' size='small'><IconMaterialPottedPlantRounded /> Small</Fab>
            <Fab color='secondary' version='text' size='regular'><IconMaterialPottedPlantRounded /></Fab>
            <Fab color='secondary' version='text' size='large'>Large</Fab>
          </div>
        </Accordion>

        <Accordion label='Fab color' open>
          <div className={classNames([classes.row, classes.center])}>
            <Fab tonal={false} version='text' color='default'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='primary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='secondary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='tertiary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='quaternary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='info'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='success'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='error'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='warning'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='neutral'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab tonal={false} version='text' color='#f5d758'><IconMaterialPottedPlantRounded /> Text</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab tonal={false} version='outlined' color='default'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='primary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='secondary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='tertiary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='quaternary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='info'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='success'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='error'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='warning'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='neutral'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab tonal={false} version='outlined' color='#f5d758'><IconMaterialPottedPlantRounded /> Outlined</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab tonal={false} version='filled' color='default'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='primary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='secondary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='tertiary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='quaternary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='info'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='success'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='error'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='warning'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='neutral'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab tonal={false} version='filled' color='#f5d758'><IconMaterialPottedPlantRounded /> Filled</Fab>
          </div>
        </Accordion>

        <Accordion label='Fab color tonal' open>
          <div className={classNames([classes.row, classes.center])}>
            <Fab version='text' color='primary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='secondary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='tertiary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='quaternary'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='info'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='success'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='error'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='warning'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='neutral'><IconMaterialPottedPlantRounded /> Text</Fab>
            <Fab version='text' color='#f5d758'><IconMaterialPottedPlantRounded /> Text</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab version='outlined' color='primary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='secondary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='tertiary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='quaternary'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='info'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='success'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='error'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='warning'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='neutral'><IconMaterialPottedPlantRounded /> Outlined</Fab>
            <Fab version='outlined' color='#f5d758'><IconMaterialPottedPlantRounded /> Outlined</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab version='filled' color='primary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='secondary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='tertiary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='quaternary'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='info'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='success'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='error'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='warning'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='neutral'><IconMaterialPottedPlantRounded /> Filled</Fab>
            <Fab version='filled' color='#f5d758'><IconMaterialPottedPlantRounded /> Filled</Fab>
          </div>
        </Accordion>

        <Accordion label='Fab size' open>
          <div className={classNames([classes.row, classes.center])}>
            <Fab size='small'><IconMaterialPottedPlantRounded /> Small</Fab>
            <Fab size='small'><IconMaterialPottedPlantRounded /></Fab>
            <Fab size='small'>Small</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab size='regular'><IconMaterialPottedPlantRounded /> Regular</Fab>
            <Fab size='regular'><IconMaterialPottedPlantRounded /></Fab>
            <Fab size='regular'>Regular</Fab>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Fab size='large'><IconMaterialPottedPlantRounded /> Large</Fab>
            <Fab size='large'><IconMaterialPottedPlantRounded /></Fab>
            <Fab size='large'>Large</Fab>
          </div>
        </Accordion>

        <Accordion label='Fab loading' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('loading')}>a</Button>

          <div className={classNames([classes.row, classes.center])}>
            <Fab version='text' size='small' loading={a.loading}><IconMaterialPottedPlantRounded /> Small</Fab>
            <Fab version='outlined' size='regular' loading={a.loading}><IconMaterialPottedPlantRounded /></Fab>
            <Fab version='filled' size='large' loading={a.loading}>Large</Fab>
          </div>
        </Accordion>

        <Accordion label='Fab disabled' open>
          <div className={classNames([classes.row, classes.center])}>
            <Fab version='text' size='small' disabled><IconMaterialPottedPlantRounded /> Small</Fab>
            <Fab version='outlined' size='regular' disabled><IconMaterialPottedPlantRounded /></Fab>
            <Fab version='filled' size='large' disabled>Large</Fab>
          </div>
        </Accordion>

        <Accordion label='Fab selected' open>
          <div className={classNames([classes.row, classes.center])}>
            <Fab version='text' size='small' selected><IconMaterialPottedPlantRounded /> Small</Fab>
            <Fab version='outlined' size='regular' selected><IconMaterialPottedPlantRounded /></Fab>
            <Fab version='filled' size='large' selected>Large</Fab>
          </div>
        </Accordion>

        <Accordion label='Fab selected' open>
          <div className={classNames([classes.row, classes.center])}>
            <Fab iconSelected={<IconMaterialPottedPlantRoundedFilled />}><IconMaterialPottedPlantRounded /> Regular</Fab>
            <Fab iconSelected={<IconMaterialPottedPlantRoundedFilled />}><IconMaterialPottedPlantRounded /></Fab>

            <Fab iconSelected={<IconMaterialPottedPlantRoundedFilled />} selected><IconMaterialPottedPlantRounded /> Regular</Fab>
            <Fab iconSelected={<IconMaterialPottedPlantRoundedFilled />} selected><IconMaterialPottedPlantRounded /></Fab>
          </div>
        </Accordion>

        <Accordion label='Fab rtl' open>
          <div className={classNames([classes.row, classes.center])}>
            <Fab version='text' size='small'><IconMaterialUndoRounded /> Small</Fab>
            <Fab version='outlined' size='regular'><IconMaterialUndoRounded /></Fab>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <Fab color='secondary' tonal version='filled' size='regular'><IconMaterialPottedPlantRounded /> Regular</Fab>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Fab color='secondary' tonal version='filled' size='regular'><IconMaterialPottedPlantRounded /> Regular</Fab>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiFab: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Fab color='secondary' tonal version='filled' size='regular'><IconMaterialPottedPlantRounded /> Regular</Fab>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiFab: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 44
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Fab color='secondary' tonal version='filled' size='regular'><IconMaterialPottedPlantRounded /> Regular</Fab>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiFab: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Fab tonal version='filled' size='regular'><IconMaterialPottedPlantRounded /> Regular</Fab>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Fab color='secondary' tonal version='filled' size='regular'><IconMaterialPottedPlantRounded /> Regular</styled.Fab>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Icon button'>
        <Accordion label='Icon button' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton>
              <IconMaterialPottedPlantRounded />
            </IconButton>
          </div>
        </Accordion>

        <Accordion label='Icon button versions' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='filled' color='secondary' size='small'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='filled' color='secondary' size='regular'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='filled' color='secondary' size='large'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='filled' color='secondary' size='large' elevation={false}>
              <IconMaterialPottedPlantRounded />
            </IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton tonal version='filled' color='secondary' size='small'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton tonal version='filled' color='secondary' size='regular'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton tonal version='filled' color='secondary' size='large'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton tonal version='filled' color='secondary' size='large' elevation={false}>
              <IconMaterialPottedPlantRounded />
            </IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='outlined' color='secondary' size='small'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='outlined' color='secondary' size='regular'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='outlined' color='secondary' size='large'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='outlined' color='secondary' size='large' elevation={false}>
              <IconMaterialPottedPlantRounded />
            </IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='text' color='secondary' size='small'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='text' color='secondary' size='regular'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
            <IconButton version='text' color='secondary' size='large'>
              <IconMaterialPottedPlantRounded />
            </IconButton>
          </div>
        </Accordion>

        <Accordion label='Icon button color' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='text' color='default'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='primary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='secondary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='tertiary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='quaternary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='info'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='success'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='error'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='warning'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='neutral'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='text' color='#f5d758'><IconMaterialPottedPlantRounded /></IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='outlined' color='default'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='primary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='secondary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='tertiary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='quaternary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='info'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='success'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='error'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='warning'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='neutral'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='#f5d758'><IconMaterialPottedPlantRounded /></IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='filled' color='default'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='primary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='secondary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='tertiary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='quaternary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='info'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='success'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='error'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='warning'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='neutral'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='#f5d758'><IconMaterialPottedPlantRounded /></IconButton>
          </div>
        </Accordion>

        <Accordion label='Icon button color tonal' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton tonal version='text' color='primary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='secondary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='tertiary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='quaternary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='info'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='success'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='error'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='warning'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='neutral'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='text' color='#f5d758'><IconMaterialPottedPlantRounded /></IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton tonal version='outlined' color='primary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='secondary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='tertiary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='quaternary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='info'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='success'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='error'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='warning'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='neutral'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='outlined' color='#f5d758'><IconMaterialPottedPlantRounded /></IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton tonal version='filled' color='primary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='secondary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='tertiary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='quaternary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='info'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='success'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='error'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='warning'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='neutral'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton tonal version='filled' color='#f5d758'><IconMaterialPottedPlantRounded /></IconButton>
          </div>
        </Accordion>

        <Accordion label='Icon button background opacity' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton backgroundOpacity='0.4' version='text' color='default'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='text' color='primary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='text' color='secondary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='text' color='tertiary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='text' color='quaternary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='text' color='info'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='text' color='success'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='text' color='error'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='text' color='warning'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='text' color='neutral'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='text' color='#f5d758'><IconMaterialPottedPlantRounded /></IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton backgroundOpacity='0.4' version='outlined' color='default'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='outlined' color='primary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='outlined' color='secondary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='outlined' color='tertiary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='outlined' color='quaternary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='outlined' color='info'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='outlined' color='success'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='outlined' color='error'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='outlined' color='warning'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='outlined' color='neutral'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='outlined' color='#f5d758'><IconMaterialPottedPlantRounded /></IconButton>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton backgroundOpacity='0.4' version='filled' color='default'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='filled' color='primary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='filled' color='secondary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='filled' color='tertiary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='filled' color='quaternary'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='filled' color='info'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='filled' color='success'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='filled' color='error'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='filled' color='warning'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='filled' color='neutral'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton backgroundOpacity='0.4' version='filled' color='#f5d758'><IconMaterialPottedPlantRounded /></IconButton>
          </div>
        </Accordion>

        <Accordion label='Icon button size' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton color='secondary' size='small'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton color='secondary' size='regular'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton color='secondary' size='large'><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton color='secondary' size={70}><IconMaterialPottedPlantRounded /></IconButton>
          </div>
        </Accordion>

        <Accordion label='Icon button loading' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('loading')}>a</Button>

          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='text' color='primary' size='small' loading={a.loading}><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='secondary' size='regular' loading={a.loading}><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='secondary' size='regular' loading={a.loading}><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' tonal color='tertiary' size='large' loading={a.loading}><IconMaterialPottedPlantRounded /></IconButton>
          </div>
        </Accordion>

        <Accordion label='Icon button disabled' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='text' color='primary' size='small' disabled><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='secondary' size='regular' disabled><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='secondary' size='regular' disabled><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' tonal color='tertiary' size='large' disabled><IconMaterialPottedPlantRounded /></IconButton>
          </div>
        </Accordion>

        <Accordion label='Icon button selected' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='text' color='primary' size='small' selected><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='outlined' color='secondary' size='regular' selected><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' color='secondary' size='regular' selected><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton version='filled' tonal color='tertiary' size='large' selected><IconMaterialPottedPlantRounded /></IconButton>
          </div>
        </Accordion>

        <Accordion label='Icon button icon selected' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton iconSelected={<IconMaterialPottedPlantRoundedFilled />}><IconMaterialPottedPlantRounded /></IconButton>
            <IconButton iconSelected={<IconMaterialPottedPlantRoundedFilled />} selected><IconMaterialPottedPlantRounded /></IconButton>
          </div>
        </Accordion>

        <Accordion label='Icon button rtl' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconButton version='outlined' tonal color='secondary'><IconMaterialUndoRounded /></IconButton>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <IconButton color='secondary'>
              <IconMaterialPottedPlantRounded />
            </IconButton>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <IconButton color='secondary'>
                  <IconMaterialPottedPlantRounded />
                </IconButton>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiIconButton: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <IconButton color='secondary'>
                  <IconMaterialPottedPlantRounded />
                </IconButton>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiIconButton: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 44
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <IconButton color='secondary'>
                  <IconMaterialPottedPlantRounded />
                </IconButton>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiIconButton: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <IconButton>
                  <IconMaterialPottedPlantRounded />
                </IconButton>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.IconButton color='secondary'>
                <IconMaterialPottedPlantRounded />
              </styled.IconButton>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Linear progress'>
        <Accordion label='Linear progress' open>
          <div className={classNames([classes.column, classes.center])}>
            <LinearProgress />
          </div>
        </Accordion>

        <Accordion label='Linear progress versions' open>
          <div className={classNames([classes.column, classes.center])}>
            <LinearProgress />
            <LinearProgress version='indeterminate' />
            <LinearProgress version='determinate' value={{ progress: 24 }} />
            <LinearProgress version='determinate' value={{ progress: 24, buffer: 40 }} buffer />
          </div>
        </Accordion>

        <Accordion label='Linear progress colors' open>
          <div className={classNames([classes.column, classes.center])}>
            <LinearProgress color='default' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='primary' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='secondary' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='tertiary' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='quaternary' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='info' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='success' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='error' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='warning' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='neutral' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
            <LinearProgress color='#f5d758' version='determinate' value={{ buffer: 40, progress: 24 }} buffer />
          </div>
        </Accordion>

        <Accordion label='Linear progress colors tonal' open>
          <div className={classNames([classes.column, classes.center])}>
            <LinearProgress color='primary' version='determinate' value={{ buffer: 40, progress: 24 }} buffer tonal />
            <LinearProgress color='secondary' version='determinate' value={{ buffer: 40, progress: 24 }} buffer tonal />
            <LinearProgress color='tertiary' version='determinate' value={{ buffer: 40, progress: 24 }} buffer tonal />
            <LinearProgress color='quaternary' version='determinate' value={{ buffer: 40, progress: 24 }} buffer tonal />
            <LinearProgress color='info' version='determinate' value={{ buffer: 40, progress: 24 }} buffer tonal />
            <LinearProgress color='success' version='determinate' value={{ buffer: 40, progress: 24 }} buffer tonal />
            <LinearProgress color='error' version='determinate' value={{ buffer: 40, progress: 24 }} buffer tonal />
            <LinearProgress color='warning' version='determinate' value={{ buffer: 40, progress: 24 }} buffer tonal />
            <LinearProgress color='neutral' version='determinate' value={{ buffer: 40, progress: 24 }} buffer tonal />
            <LinearProgress color='#f5d758' version='determinate' value={{ buffer: 40, progress: 24 }} buffer tonal />
          </div>
        </Accordion>

        <Accordion label='Linear progress determinate with buffer' open>
          <div className={classNames([classes.column, classes.center])}>
            <LinearProgress version='determinate' value={{ buffer: progress + 20, progress: progress }} buffer />
          </div>
        </Accordion>

        <Accordion label='Linear progress reverse' open>
          <div className={classNames([classes.column, classes.center])}>
            <LinearProgress />
            <LinearProgress version='indeterminate' reverse />
            <LinearProgress version='determinate' value={{ progress: 24 }} reverse />
            <LinearProgress version='determinate' value={{ progress: 24, buffer: 40 }} buffer reverse />
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <LinearProgress color='secondary' />

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <LinearProgress color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiLinearProgress: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <LinearProgress color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiLinearProgress: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              overflow: 'hidden',
                              width: '100%',
                              height: 4.4
                            }
                          }
                        }
                      }
                    }
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <LinearProgress color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiLinearProgress: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}

                style={{
                  width: '100%'
                }}
              >
                <LinearProgress />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.LinearProgress />
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Round progress'>
        <Accordion label='Round progress' open>
          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress />
          </div>
        </Accordion>

        <Accordion label='Round progress size' open>
          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress size='extra_small' />
            <RoundProgress size={20} />
            <RoundProgress size='small' />
            <RoundProgress size='regular' />
            <RoundProgress size='large' />
          </div>
        </Accordion>

        <Accordion label='Round progress color' open>
          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress color='default' />
            <RoundProgress color='primary' />
            <RoundProgress color='secondary' />
            <RoundProgress color='tertiary' />
            <RoundProgress color='quaternary' />
            <RoundProgress color='info' />
            <RoundProgress color='success' />
            <RoundProgress color='error' />
            <RoundProgress color='warning' />
            <RoundProgress color='neutral' />
            <RoundProgress color='#f5d758' />
          </div>
        </Accordion>

        <Accordion label='Round progress color tonal' open>
          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress color='primary' tonal />
            <RoundProgress color='secondary' tonal />
            <RoundProgress color='tertiary' tonal />
            <RoundProgress color='quaternary' tonal />
            <RoundProgress color='info' tonal />
            <RoundProgress color='success' tonal />
            <RoundProgress color='error' tonal />
            <RoundProgress color='warning' tonal />
            <RoundProgress color='neutral' tonal />
            <RoundProgress color='#f5d758' tonal />
          </div>
        </Accordion>

        <Accordion label='Round progress no shrink' open>
          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress size='extra_small' noShrink />
            <RoundProgress size={20} noShrink />
            <RoundProgress size='small' noShrink />
            <RoundProgress size='regular' noShrink />
            <RoundProgress size='large' noShrink />
          </div>
        </Accordion>

        <Accordion label='Round progress thickness' open>
          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress size='extra_small' thickness={1.4} />
            <RoundProgress size={20} thickness={1.4} />
            <RoundProgress size='small' thickness={1.4} />
            <RoundProgress size='regular' thickness={1.4} />
            <RoundProgress size='large' thickness={1.4} />
          </div>
        </Accordion>

        <Accordion label='Rounded progress rounded' open>
          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress size='extra_small' rounded={false} />
            <RoundProgress size={20} rounded={false} />
            <RoundProgress size='small' rounded={false} />
            <RoundProgress size='regular' rounded={false} />
            <RoundProgress size='large' rounded={false} />
          </div>
        </Accordion>

        <Accordion label='Rounded progress deteminate with pathBackgroundProps as well' open>
          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress size='small' version='determinate' value={0} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='small' version='determinate' value={1} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='small' version='determinate' value={40} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='small' version='determinate' value={99} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='small' version='determinate' value={100} pathBackgroundProps={{ className: classes.pathBackground }} />

            <RoundProgress size='small' version='determinate' value={progress} pathBackgroundProps={{ className: classes.pathBackground }} />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress size='regular' version='determinate' value={0} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='regular' version='determinate' value={1} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='regular' version='determinate' value={40} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='regular' version='determinate' value={99} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='regular' version='determinate' value={100} pathBackgroundProps={{ className: classes.pathBackground }} />

            <RoundProgress size='regular' version='determinate' value={progress} pathBackgroundProps={{ className: classes.pathBackground }} />
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <RoundProgress size='large' version='determinate' value={0} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='large' version='determinate' value={1} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='large' version='determinate' value={40} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='large' version='determinate' value={99} pathBackgroundProps={{ className: classes.pathBackground }} />
            <RoundProgress size='large' version='determinate' value={100} pathBackgroundProps={{ className: classes.pathBackground }} />

            <RoundProgress size='large' version='determinate' value={progress} pathBackgroundProps={{ className: classes.pathBackground }} />
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <RoundProgress color='secondary' />

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <RoundProgress color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiRoundProgress: {
                        style: {
                          add: {
                            root: {
                              pointerEvents: 'all',

                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <RoundProgress color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiRoundProgress: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 44
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <RoundProgress color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiRoundProgress: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <RoundProgress />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.RoundProgress />
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Button group'>
        <Accordion label='Button group' open>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup>
              <Button>Button one</Button>
            </ButtonGroup>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup>
              <Button>Button one</Button>
              <Button>Button two</Button>
            </ButtonGroup>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
            </ButtonGroup>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
            </ButtonGroup>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
              <Button>Button seven</Button>
              <Button>Button fourteen</Button>
            </ButtonGroup>
          </div>
        </Accordion>

        <Accordion label='Button group sizes' open>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup size='small' color='secondary' tonal>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </ButtonGroup>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup size='regular' color='secondary' tonal>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </ButtonGroup>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup size='large' color='secondary' tonal>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </ButtonGroup>
          </div>

        </Accordion>

        <Accordion label='Button group versions' open>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup size='small' color='secondary' version='text'>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </ButtonGroup>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup size='regular' color='secondary' version='outlined'>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </ButtonGroup>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup size='large' color='secondary' version='filled'>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </ButtonGroup>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup size='regular' color='secondary' version='filled' tonal>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </ButtonGroup>
          </div>

        </Accordion>

        <Accordion label='Button group no border' open>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup size='small' color='secondary' version='text' border={false}>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </ButtonGroup>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup size='regular' color='secondary' version='outlined' border={false}>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </ButtonGroup>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup size='large' color='secondary' version='filled' border={false}>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </ButtonGroup>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup size='regular' color='secondary' version='filled' border={false} tonal>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
            </ButtonGroup>
          </div>

        </Accordion>

        <Accordion label='Button group with icons' open>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup select='single' size='small' color='secondary' version='text'>
              <Button startIcon={<IconMaterialAddRounded />}>Button one</Button>
              <Button startIcon={<IconMaterialAddRounded />}>Button two</Button>
              <Button startIcon={<IconMaterialAddRounded />}>Button three</Button>
              <Button startIcon={<IconMaterialAddRounded />}>Button four</Button>
              <Button startIcon={<IconMaterialAddRounded />}>Button five</Button>
            </ButtonGroup>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup select='single' size='regular' color='secondary' version='outlined'>
              <Button endIcon={<IconMaterialAddRounded />}>Button one</Button>
              <Button endIcon={<IconMaterialAddRounded />}>Button two</Button>
              <Button endIcon={<IconMaterialAddRounded />}>Button three</Button>
              <Button endIcon={<IconMaterialAddRounded />}>Button four</Button>
              <Button endIcon={<IconMaterialAddRounded />}>Button five</Button>
            </ButtonGroup>
          </div >

          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup select='single' size='large' color='secondary' version='filled' tonal>
              <Button startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Button one</Button>
              <Button startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Button two</Button>
              <Button startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Button three</Button>
              <Button startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Button four</Button>
              <Button startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Button five</Button>
            </ButtonGroup>
          </div >

        </Accordion >

        <Accordion label='Button group select single' open>
          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup color='secondary' version='filled' select='single' tonal>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
              <Button>Button seven</Button>
              <Button>Button fourteen</Button>
            </ButtonGroup>
          </div>
        </Accordion>

        <Accordion label='Button group select multi' open>
          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup version='filled' size='large' select='multi'>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
              <Button>Button five</Button>
              <Button>Button seven</Button>
              <Button>Button fourteen</Button>
            </ButtonGroup>
          </div>
        </Accordion>

        <Accordion label='Button group vertical select multi' open>
          <div className={classNames([classes.row, classes.center])}>
            <ButtonGroup color='default' version='text' select='multi' fullWidth vertical>
              <Button align='start'>Button one</Button>
              <Button align='start'>Button two</Button>
              <Button align='start'>Button three</Button>
              <Button align='start'>Button four</Button>
              <Button align='start'>Button five</Button>
              <Button align='start'>Button seven</Button>
              <Button align='start'>Button fourteen</Button>
            </ButtonGroup>

            <ButtonGroup color='default' version='outlined' select='multi' fullWidth vertical>
              <Button align='start'>Button one</Button>
              <Button align='start'>Button two</Button>
              <Button align='start'>Button three</Button>
              <Button align='start'>Button four</Button>
              <Button align='start'>Button five</Button>
              <Button align='start'>Button seven</Button>
              <Button align='start'>Button fourteen</Button>
            </ButtonGroup>

            <ButtonGroup color='default' version='filled' select='multi' fullWidth vertical>
              <Button align='start'>Button one</Button>
              <Button align='start'>Button two</Button>
              <Button align='start'>Button three</Button>
              <Button align='start'>Button four</Button>
              <Button align='start'>Button five</Button>
              <Button align='start'>Button seven</Button>
              <Button align='start'>Button fourteen</Button>
            </ButtonGroup>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme'>
          <div className={classNames([classes.column])}>
            <ButtonGroup color='secondary'>
              <Button>Button one</Button>
              <Button>Button two</Button>
              <Button>Button three</Button>
              <Button>Button four</Button>
            </ButtonGroup>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <ButtonGroup color='secondary'>
                  <Button>Button one</Button>
                  <Button>Button two</Button>
                  <Button>Button three</Button>
                  <Button>Button four</Button>
                </ButtonGroup>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiButtonGroup: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <ButtonGroup color='secondary'>
                  <Button>Button one</Button>
                  <Button>Button two</Button>
                  <Button>Button three</Button>
                  <Button>Button four</Button>
                </ButtonGroup>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiButtonGroup: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 44
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <ButtonGroup color='secondary'>
                  <Button>Button one</Button>
                  <Button>Button two</Button>
                  <Button>Button three</Button>
                  <Button>Button four</Button>
                </ButtonGroup>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiButtonGroup: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <ButtonGroup>
                  <Button>Button one</Button>
                  <Button>Button two</Button>
                  <Button>Button three</Button>
                  <Button>Button four</Button>
                </ButtonGroup>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.ButtonGroup>
                <Button>Button one</Button>
                <Button>Button two</Button>
                <Button>Button three</Button>
                <Button>Button four</Button>
              </styled.ButtonGroup>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Button'>
        <Accordion label='Button' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button>Button</Button>
          </div>
        </Accordion>

        <Accordion label='Button versions' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button version='filled' color='secondary' size='small'>Filled</Button>
            <Button version='filled' color='secondary' size='regular'>Filled</Button>
            <Button version='filled' color='secondary' size='large'>Filled</Button>
            <Button version='filled' color='secondary' size='large' elevation={false}>No elevation</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button tonal version='filled' color='secondary' size='small'>Tonal</Button>
            <Button tonal version='filled' color='secondary' size='regular'>Tonal</Button>
            <Button tonal version='filled' color='secondary' size='large'>Tonal</Button>
            <Button tonal version='filled' color='secondary' size='large' elevation={false}>No elevation</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='outlined' color='secondary' size='small'>Outlined</Button>
            <Button version='outlined' color='secondary' size='regular'>Outlined</Button>
            <Button version='outlined' color='secondary' size='large'>Outlined</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='secondary' size='small'>Text</Button>
            <Button version='text' color='secondary' size='regular'>Text</Button>
            <Button version='text' color='secondary' size='large'>Text</Button>
          </div>
        </Accordion>

        <Accordion label='Button color' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='default'>Default</Button>
            <Button version='text' color='primary'>Primary</Button>
            <Button version='text' color='secondary'>Secondary</Button>
            <Button version='text' color='tertiary'>Tertiary</Button>
            <Button version='text' color='quaternary'>Quaternary</Button>
            <Button version='text' color='info'>Info</Button>
            <Button version='text' color='success'>Success</Button>
            <Button version='text' color='error'>Error</Button>
            <Button version='text' color='warning'>Warning</Button>
            <Button version='text' color='neutral'>Neutral</Button>
            <Button version='text' color='#f5d758'>Other</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='outlined' color='default'>Default</Button>
            <Button version='outlined' color='primary'>Primary</Button>
            <Button version='outlined' color='secondary'>Secondary</Button>
            <Button version='outlined' color='tertiary'>Tertiary</Button>
            <Button version='outlined' color='quaternary'>Quaternary</Button>
            <Button version='outlined' color='info'>Info</Button>
            <Button version='outlined' color='success'>Success</Button>
            <Button version='outlined' color='error'>Error</Button>
            <Button version='outlined' color='warning'>Warning</Button>
            <Button version='outlined' color='neutral'>Neutral</Button>
            <Button version='outlined' color='#f5d758'>Other</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='filled' color='default'>Default</Button>
            <Button version='filled' color='primary'>Primary</Button>
            <Button version='filled' color='secondary'>Secondary</Button>
            <Button version='filled' color='tertiary'>Tertiary</Button>
            <Button version='filled' color='quaternary'>Quaternary</Button>
            <Button version='filled' color='info'>Info</Button>
            <Button version='filled' color='success'>Success</Button>
            <Button version='filled' color='error'>Error</Button>
            <Button version='filled' color='warning'>Warning</Button>
            <Button version='filled' color='neutral'>Neutral</Button>
            <Button version='filled' color='#f5d758'>Other</Button>
          </div>
        </Accordion>

        <Accordion label='Button color tonal' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button tonal version='text' color='primary'>Primary</Button>
            <Button tonal version='text' color='secondary'>Secondary</Button>
            <Button tonal version='text' color='tertiary'>Tertiary</Button>
            <Button tonal version='text' color='quaternary'>Quaternary</Button>
            <Button tonal version='text' color='info'>Info</Button>
            <Button tonal version='text' color='success'>Success</Button>
            <Button tonal version='text' color='error'>Error</Button>
            <Button tonal version='text' color='warning'>Warning</Button>
            <Button tonal version='text' color='neutral'>Neutral</Button>
            <Button tonal version='text' color='#f5d758'>Other</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button tonal version='outlined' color='primary'>Primary</Button>
            <Button tonal version='outlined' color='secondary'>Secondary</Button>
            <Button tonal version='outlined' color='tertiary'>Tertiary</Button>
            <Button tonal version='outlined' color='quaternary'>Quaternary</Button>
            <Button tonal version='outlined' color='info'>Info</Button>
            <Button tonal version='outlined' color='success'>Success</Button>
            <Button tonal version='outlined' color='error'>Error</Button>
            <Button tonal version='outlined' color='warning'>Warning</Button>
            <Button tonal version='outlined' color='neutral'>Neutral</Button>
            <Button tonal version='outlined' color='#f5d758'>Other</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button tonal version='filled' color='primary'>Primary</Button>
            <Button tonal version='filled' color='secondary'>Secondary</Button>
            <Button tonal version='filled' color='tertiary'>Tertiary</Button>
            <Button tonal version='filled' color='quaternary'>Quaternary</Button>
            <Button tonal version='filled' color='info'>Info</Button>
            <Button tonal version='filled' color='success'>Success</Button>
            <Button tonal version='filled' color='error'>Error</Button>
            <Button tonal version='filled' color='warning'>Warning</Button>
            <Button tonal version='filled' color='neutral'>Neutral</Button>
            <Button tonal version='filled' color='#f5d758'>Other</Button>
          </div>
        </Accordion>

        <Accordion label='Button backgroundOpacity' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button backgroundOpacity='0.4' version='text' color='default'>Default</Button>
            <Button backgroundOpacity='0.4' version='text' color='primary'>Primary</Button>
            <Button backgroundOpacity='0.4' version='text' color='secondary'>Secondary</Button>
            <Button backgroundOpacity='0.4' version='text' color='tertiary'>Tertiary</Button>
            <Button backgroundOpacity='0.4' version='text' color='quaternary'>Quaternary</Button>
            <Button backgroundOpacity='0.4' version='text' color='info'>Info</Button>
            <Button backgroundOpacity='0.4' version='text' color='success'>Success</Button>
            <Button backgroundOpacity='0.4' version='text' color='error'>Error</Button>
            <Button backgroundOpacity='0.4' version='text' color='warning'>Warning</Button>
            <Button backgroundOpacity='0.4' version='text' color='neutral'>Neutral</Button>
            <Button backgroundOpacity='0.4' version='text' color='#f5d758'>Other</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button backgroundOpacity='0.4' version='outlined' color='default'>Default</Button>
            <Button backgroundOpacity='0.4' version='outlined' color='primary'>Primary</Button>
            <Button backgroundOpacity='0.4' version='outlined' color='secondary'>Secondary</Button>
            <Button backgroundOpacity='0.4' version='outlined' color='tertiary'>Tertiary</Button>
            <Button backgroundOpacity='0.4' version='outlined' color='quaternary'>Quaternary</Button>
            <Button backgroundOpacity='0.4' version='outlined' color='info'>Info</Button>
            <Button backgroundOpacity='0.4' version='outlined' color='success'>Success</Button>
            <Button backgroundOpacity='0.4' version='outlined' color='error'>Error</Button>
            <Button backgroundOpacity='0.4' version='outlined' color='warning'>Warning</Button>
            <Button backgroundOpacity='0.4' version='outlined' color='neutral'>Neutral</Button>
            <Button backgroundOpacity='0.4' version='outlined' color='#f5d758'>Other</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button backgroundOpacity='0.4' version='filled' color='default'>Default</Button>
            <Button backgroundOpacity='0.4' version='filled' color='primary'>Primary</Button>
            <Button backgroundOpacity='0.4' version='filled' color='secondary'>Secondary</Button>
            <Button backgroundOpacity='0.4' version='filled' color='tertiary'>Tertiary</Button>
            <Button backgroundOpacity='0.4' version='filled' color='quaternary'>Quaternary</Button>
            <Button backgroundOpacity='0.4' version='filled' color='info'>Info</Button>
            <Button backgroundOpacity='0.4' version='filled' color='success'>Success</Button>
            <Button backgroundOpacity='0.4' version='filled' color='error'>Error</Button>
            <Button backgroundOpacity='0.4' version='filled' color='warning'>Warning</Button>
            <Button backgroundOpacity='0.4' version='filled' color='neutral'>Neutral</Button>
            <Button backgroundOpacity='0.4' version='filled' color='#f5d758'>Other</Button>
          </div>
        </Accordion>

        <Accordion label='Button size' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button color='secondary' size='small'>Small</Button>
            <Button color='secondary' size='regular'>Regular</Button>
            <Button color='secondary' size='large'>Large</Button>
            <Button color='secondary' size='large' fullWidth>Full width</Button>
          </div>
        </Accordion>

        <Accordion label='Button loading' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('loading')}>a</Button>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='primary' size='small' loading={a.loading}>Small</Button>
            <Button version='outlined' color='secondary' size='regular' loading={a.loading}>Regular</Button>
            <Button version='filled' color='secondary' size='regular' loading={a.loading}>Regular</Button>
            <Button version='filled' tonal color='tertiary' size='large' loading={a.loading}>Large</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='primary' size='small' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
            <Button version='outlined' color='secondary' size='regular' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
            <Button version='filled' color='secondary' size='regular' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
            <Button version='filled' tonal color='tertiary' size='large' loading={a.loading} loadingLabel='Loading...'>Loading label</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='primary' size='small' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
            <Button version='outlined' color='secondary' size='regular' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
            <Button version='filled' color='secondary' size='regular' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
            <Button version='filled' tonal color='tertiary' size='large' loading={a.loading} loadingIconPosition='start'>Loading start</Button>
          </div>

          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='primary' size='small' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
            <Button version='outlined' color='secondary' size='regular' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
            <Button version='filled' color='secondary' size='regular' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
            <Button version='filled' tonal color='tertiary' size='large' loading={a.loading} loadingIconPosition='end'>Loading end</Button>
          </div>
        </Accordion>

        <Accordion label='Button disabled' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='primary' size='small' disabled>Small</Button>
            <Button version='outlined' color='secondary' size='regular' disabled>Regular</Button>
            <Button version='filled' color='secondary' size='regular' disabled>Regular</Button>
            <Button version='filled' tonal color='tertiary' size='large' disabled>Large</Button>
          </div>
        </Accordion>

        <Accordion label='Button icons' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='secondary' size='small' startIcon={<IconMaterialAddRounded />}>Start icon</Button>
            <Button version='filled' color='warning' size='regular' startIcon={<IconMaterialAddRounded />}>Start icon</Button>
            <Button version='outlined' color='secondary' size='large' startIcon={<IconMaterialAddRounded />}>Start icon</Button>

            <Button version='text' color='secondary' size='small' endIcon={<IconMaterialAddRounded />}>End icon</Button>
            <Button version='filled' color='warning' size='regular' endIcon={<IconMaterialAddRounded />}>End end icon</Button>
            <Button version='outlined' color='secondary' size='large' endIcon={<IconMaterialAddRounded />}>End icon</Button>

            <Button version='outlined' color='warning' size='small' startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Start and end icon</Button>
            <Button version='filled' tonal color='warning' size='regular' startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Start and end icon</Button>
            <Button version='text' color='warning' size='large' startIcon={<IconMaterialAddRounded />} endIcon={<IconMaterialAddRounded />}>Start and end icon</Button>
          </div>
        </Accordion>

        <Accordion label='Button selected' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button version='text' color='primary' size='small' selected>Small</Button>
            <Button version='outlined' color='secondary' size='regular' selected>Regular</Button>
            <Button version='filled' color='secondary' size='regular' selected>Regular</Button>
            <Button version='filled' tonal color='tertiary' size='large' selected>Large</Button>
          </div>
        </Accordion>

        <Accordion label='Button icons selected' open>
          <div className={classNames([classes.row, classes.center])}>
            <Button color='secondary' startIcon={<IconMaterialPottedPlantRounded />} startIconSelected={<IconMaterialPottedPlantRoundedFilled />} endIcon={<IconMaterialPottedPlantRounded />} endIconSelected={<IconMaterialPottedPlantRoundedFilled />}>Regular</Button>
            <Button color='secondary' startIcon={<IconMaterialPottedPlantRounded />} startIconSelected={<IconMaterialPottedPlantRoundedFilled />} endIcon={<IconMaterialPottedPlantRounded />} endIconSelected={<IconMaterialPottedPlantRoundedFilled />} selected>Regular</Button>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <Button color='secondary'>Button</Button>

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <Button color='secondary'>Button</Button>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiButton: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Button color='secondary'>Button</Button>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiButton: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 40
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Button color='secondary'>Button</Button>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiButton: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Button>Button</Button>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.Button>Button</styled.Button>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Icon'>
        <Accordion label='Icon' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconMaterialPottedPlantRounded />
          </div>
        </Accordion>

        <Accordion label='Icon color' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconMaterialPottedPlantRounded color='default' />
            <IconMaterialPottedPlantRounded color='primary' />
            <IconMaterialPottedPlantRounded color='secondary' />
            <IconMaterialPottedPlantRounded color='tertiary' />
            <IconMaterialPottedPlantRounded color='quaternary' />
            <IconMaterialPottedPlantRounded color='info' />
            <IconMaterialPottedPlantRounded color='success' />
            <IconMaterialPottedPlantRounded color='error' />
            <IconMaterialPottedPlantRounded color='warning' />
            <IconMaterialPottedPlantRounded color='neutral' />
            <IconMaterialPottedPlantRounded color='#f5d758' />
          </div>
        </Accordion>

        <Accordion label='Icon color tonal' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconMaterialPottedPlantRounded color='primary' tonal />
            <IconMaterialPottedPlantRounded color='secondary' tonal />
            <IconMaterialPottedPlantRounded color='tertiary' tonal />
            <IconMaterialPottedPlantRounded color='quaternary' tonal />
            <IconMaterialPottedPlantRounded color='info' tonal />
            <IconMaterialPottedPlantRounded color='success' tonal />
            <IconMaterialPottedPlantRounded color='error' tonal />
            <IconMaterialPottedPlantRounded color='warning' tonal />
            <IconMaterialPottedPlantRounded color='neutral' tonal />
            <IconMaterialPottedPlantRounded color='#f5d758' tonal />
          </div>
        </Accordion>

        <Accordion label='Icon size' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconMaterialPottedPlantRounded size='very small' color='primary' tonal />
            <IconMaterialPottedPlantRounded size='small' color='primary' tonal />
            <IconMaterialPottedPlantRounded size='regular' color='primary' tonal />
            <IconMaterialPottedPlantRounded size='medium' color='primary' tonal />
            <IconMaterialPottedPlantRounded size='large' color='primary' tonal />
            <IconMaterialPottedPlantRounded size='very large' color='primary' tonal />
            <IconMaterialPottedPlantRounded size={70} color='primary' tonal />
          </div>
        </Accordion>

        <Accordion label='Icon rtl' open>
          <div className={classNames([classes.row, classes.center])}>
            <IconMaterialUndoRounded />
          </div>
        </Accordion>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <IconMaterialPottedPlantRounded color='secondary' />

            <Accordion label='AmauiTheme nested value' open>
              <AmauiThemeProvider
                value={{
                  palette: {
                    color: {
                      secondary: {
                        main: '#008000'
                      }
                    }
                  },
                  space: {
                    unit: 5
                  }
                }}
              >
                <IconMaterialPottedPlantRounded color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiIcon: {
                        style: {
                          add: {
                            root: {
                              '&:hover': {
                                opacity: 0.4
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <IconMaterialPottedPlantRounded color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiIcon: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 44
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <IconMaterialPottedPlantRounded color='secondary' />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiIcon: {
                        props: {
                          default: {
                            color: 'secondary'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <IconMaterialPottedPlantRounded />
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme styled' open>
              <styled.IconMaterialPottedPlantRounded />
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='Transitions / Transition'>
        <Accordion label='Fade' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => { update('fade'); }}>a</Button>

          <Fade in={a.fade}>
            <div className={classes.div}>
              a {String(a.fade)}
            </div>
          </Fade>
        </Accordion>

        <Accordion label='Grow' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('grow')}>a</Button>

          <Grow in={a.grow}>
            <div className={classes.div}>
              a {String(a.grow)}
            </div>
          </Grow>

          <Grow in={a.grow}>
            <div className={classes.div} style={{ transformOrigin: '0 0' }}>
              with transform origin {String(a.grow)}
            </div>
          </Grow>
        </Accordion>

        <Accordion label='Zoom' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('zoom')}>a</Button>

          <Zoom in={a.zoom}>
            <div className={classes.div}>
              a {String(a.zoom)}
            </div>
          </Zoom>

          <Zoom in={a.zoom}>
            <div className={classes.div} style={{ transformOrigin: '0 0' }}>
              with transform origin {String(a.zoom)}
            </div>
          </Zoom>
        </Accordion>

        <Accordion label='Expand' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('expand')}>a</Button>

          <Expand in={a.expand}>
            <div className={classes.div}>
              vertical {String(a.expand)}
            </div>
          </Expand>

          <Expand in={a.expand} expandSize='70px'>
            <div className={classes.div}>
              vertical expand size {String(a.expand)}
            </div>
          </Expand>

          <Expand in={a.expand} orientation='horizontal'>
            <div className={classes.div}>
              horizontal {String(a.expand)}
            </div>
          </Expand>

          <Expand in={a.expand} orientation='horizontal' expandSize='70px'>
            <div className={classes.div}>
              horizontal expand size {String(a.expand)}
            </div>
          </Expand>
        </Accordion>

        <Accordion label='Slide' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('slide')}>a</Button>

          <Slide in={a.slide} direction='up'>
            <div className={classes.div}>
              up {String(a.slide)}
            </div>
          </Slide>

          <Slide in={a.slide} direction='left'>
            <div className={classes.div}>
              left {String(a.slide)}
            </div>
          </Slide>

          <Slide in={a.slide} direction='right'>
            <div className={classes.div}>
              right {String(a.slide)}
            </div>
          </Slide>

          <Slide in={a.slide} direction='down'>
            <div className={classes.div}>
              down {String(a.slide)}
            </div>
          </Slide>

          <Slide in={a.slide} direction='down' removeOnExited={false}>
            <div className={classes.div}>
              down without removeOnExited {String(a.slide)}
            </div>
          </Slide>
        </Accordion>

        <Accordion label='Slide relative to root ref' className={classes.row} open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('slideRef')}>a</Button>

          <div className={classes.item} ref={refs.slides.up} style={{ overflow: 'hidden', height: 140 }}>
            <Slide in={a.slideRef} direction='up' root={refs.slides.up?.current}>
              <div className={classes.div}>
                up {String(a.slideRef)}
              </div>
            </Slide>
          </div>

          <div className={classes.item} ref={refs.slides.left} style={{ overflow: 'hidden', height: 140 }}>
            <Slide in={a.slideRef} direction='left' root={refs.slides.left?.current}>
              <div className={classes.div}>
                left {String(a.slideRef)}
              </div>
            </Slide>
          </div>

          <div className={classes.item} ref={refs.slides.right} style={{ overflow: 'hidden', height: 140 }}>
            <Slide in={a.slideRef} direction='right' root={refs.slides.right?.current}>
              <div className={classes.div}>
                right {String(a.slideRef)}
              </div>
            </Slide>
          </div>

          <div className={classes.item} ref={refs.slides.down} style={{ overflow: 'hidden', height: 140 }}>
            <Slide in={a.slideRef} direction='down' root={refs.slides.down?.current}>
              <div className={classes.div}>
                down {String(a.slideRef)}
              </div>
            </Slide>
          </div>

          <div className={classes.item} ref={refs.slides.down} style={{ overflow: 'hidden', height: 140 }}>
            <Slide in={a.slideRef} direction='down' root={refs.slides.down?.current} removeOnExited={false}>
              <div className={classes.div}>
                down without onRemoveExited {String(a.slideRef)}
              </div>
            </Slide>
          </div>
        </Accordion>

        <Accordion label='Transition' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('a')}>a</Button>

          <A in={a.a}>
            <div className={classes.div} />
          </A>
        </Accordion>

        <Accordion label='Transition with switch' open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => update('transitions')}>a</Button>

          <div className={classes.item} style={{ height: 140 }}>
            <Transitions switch>
              <Transition key={a.transitions}>
                <div className={classNames([classes.div, classes.a1])} style={{ position: 'absolute' }}>
                  a {String(a.transitions)}
                </div>
              </Transition>
            </Transitions>
          </div>

          <div className={classes.item} style={{ height: 140 }}>
            <Transitions switch mode='in-out-follow'>
              <Transition key={a.transitions}>
                <div className={classNames([classes.div, classes.a14])} style={{ position: 'absolute' }}>
                  in-out-follow {String(a.transitions)}
                </div>
              </Transition>
            </Transitions>
          </div>

          <div className={classes.item} style={{ height: 140 }}>
            <Transitions switch mode='in-out'>
              <Transition key={a.transitions}>
                <div className={classNames([classes.div, classes.a1])} style={{ position: 'absolute' }}>
                  in-out {String(a.transitions)}
                </div>
              </Transition>
            </Transitions>
          </div>
        </Accordion>

        <Accordion label='Transitions' className={classes.row} open>
          <Button size='small' color='secondary' className={classes.btn} onClick={() => setItems(items_ => [...items_, new Date().getTime()])}>a</Button>

          <Transitions>
            {items.map((item, index) => (
              <Transition key={item}>
                <div className={classNames([classes.div, classes.a1])} onClick={() => {
                  setItems(items =>
                    items.filter(i => i !== item)
                  );
                }}>
                  {item}
                </div>
              </Transition>
            ))}
          </Transitions>
        </Accordion>
      </Accordion>

      <Accordion label='Interaction'>
        <Button size='small' color='secondary' className={classes.btn} onClick={() => update('pulse')}>a</Button>

        <div className={classes.a} style={{ color: 'orange' }}>
          <Interaction pulse={a.pulse} />

          <IconMaterial10kRounded />

          <span style={{ position: 'relative' }}>a</span>
        </div>

        <Accordion label='AmauiTheme' open>
          <div className={classNames([classes.column])}>
            <div className={classes.a} style={{ color: 'orange' }}>
              <Interaction pulse={a.pulse} />

              <IconMaterial10kRounded />

              <span style={{ position: 'relative' }}>a</span>
            </div>

            <Accordion label='AmauiTheme add' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiInteraction: {
                        style: {
                          add: {
                            wave: {
                              borderRadius: 0
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <div className={classes.a} style={{ color: 'orange' }}>
                  <Interaction pulse={a.pulse} />

                  <IconMaterial10kRounded />

                  <span style={{ position: 'relative' }}>a</span>
                </div>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme override' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiInteraction: {
                        style: {
                          override: {
                            root: {
                              display: 'inline-flex',
                              position: 'relative',
                              height: 44
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <div className={classes.a} style={{ color: 'orange' }}>
                  <Interaction pulse={a.pulse} />

                  <IconMaterial10kRounded />

                  <span style={{ position: 'relative' }}>a</span>
                </div>
              </AmauiThemeProvider>
            </Accordion>

            <Accordion label='AmauiTheme props' open>
              <AmauiThemeProvider
                value={{
                  ui: {
                    elements: {
                      AmauiInteraction: {
                        props: {
                          default: {
                            background: false
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <div className={classes.a} style={{ color: 'orange' }}>
                  <Interaction pulse={a.pulse} />

                  <IconMaterial10kRounded />

                  <span style={{ position: 'relative' }}>a</span>
                </div>
              </AmauiThemeProvider>
            </Accordion>
          </div>
        </Accordion>
      </Accordion>

      <Accordion label='AmauiTheme usage values'>

        <Accordion label='AmauiTheme nested' open>
          <div className={classNames([classes.column])}>
            <Button color='primary'>Primary</Button>

            <AmauiThemeProvider
              value={{
                palette: {
                  color: {
                    primary: {
                      main: '#008000'
                    }
                  }
                }
              }}
            >
              <Button color='primary'>Primary nested</Button>
            </AmauiThemeProvider>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme nested with value as a method' open>
          <div className={classNames([classes.column])}>
            <Button color='primary'>Primary</Button>

            <AmauiThemeProvider
              value={(theme: any) => ({
                ...theme,

                palette: {
                  ...theme.palette,

                  color: {
                    ...theme.palette.color,

                    primary: {
                      main: '#008000'
                    }
                  }
                }
              })}
            >
              <Button color='primary'>Primary nested</Button>

              <Button color='secondary'>Primary nested</Button>
            </AmauiThemeProvider>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme with style add' open>
          <div className={classNames([classes.column])}>
            <Button color='primary'>Primary</Button>

            <AmauiThemeProvider
              value={{
                palette: {
                  color: {
                    primary: {
                      main: '#008000'
                    }
                  }
                },
                ui: {
                  elements: {
                    AmauiButton: {
                      style: {
                        add: {
                          root: {
                            borderRadius: '4px'
                          }
                        }
                      }
                    }
                  }
                }
              }}
            >
              <Button color='primary'>Primary nested</Button>
            </AmauiThemeProvider>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme with style override' open>
          <div className={classNames([classes.column])}>
            <Button color='primary'>Primary</Button>

            <AmauiThemeProvider
              value={{
                palette: {
                  color: {
                    primary: {
                      main: '#008000'
                    }
                  }
                },
                ui: {
                  elements: {
                    AmauiButton: {
                      style: {
                        override: {
                          border: {
                            borderRadius: 4,
                            boxShadow: 'inset 0px 0px 0px 3px #ffa5003b',
                            position: 'absolute',
                            inset: 0,
                          }
                        }
                      }
                    }
                  }
                }
              }}
            >
              <Button color='primary'>Primary nested</Button>
            </AmauiThemeProvider>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme with style override with theme and prop dynamic value' open>
          <div className={classNames([classes.column])}>
            <Button color='primary'>Primary</Button>

            <AmauiThemeProvider
              value={{
                palette: {
                  color: {
                    primary: {
                      main: '#008000'
                    }
                  }
                },
                ui: {
                  elements: {
                    AmauiButton: {
                      style: {
                        add: {
                          root: {
                            color: (props: any) => props?.color === 'primary' ? 'yellow' : 'green'
                          }
                        },
                        override: (theme: any) => ({
                          border: {
                            borderRadius: (props: any) => props.color === 'primary' ? 4 : 16,
                            boxShadow: `inset 0px 0px 0px 3px ${theme?.palette.color?.primary?.main}`,
                            position: 'absolute',
                            inset: 0
                          }
                        })
                      }
                    }
                  }
                }
              }}
            >
              <Button color='primary'>Primary nested</Button>

              <Button color='secondary'>Secondary nested</Button>
            </AmauiThemeProvider>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme with default props' open>
          <div className={classNames([classes.column])}>
            <Avatar color='primary'>a</Avatar>

            <AmauiThemeProvider
              value={{
                palette: {
                  color: {
                    primary: {
                      main: '#008000'
                    }
                  }
                },
                ui: {
                  elements: {
                    AmauiAvatar: {
                      props: {
                        default: {
                          square: true
                        }
                      }
                    }
                  }
                }
              }}
            >
              <Avatar color='primary'>a</Avatar>

              <Avatar color='secondary'>a</Avatar>
            </AmauiThemeProvider>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme with classNames global' open>
          <div className={classNames([classes.column])}>
            <Avatar color='primary'>a</Avatar>

            <AmauiThemeProvider
              value={{
                ui: {
                  className: {
                    static: false
                  }
                }
              }}
            >
              <Avatar>a</Avatar>
            </AmauiThemeProvider>
          </div>
        </Accordion>

        <Accordion label='AmauiTheme with classNames global' open>
          <div className={classNames([classes.column])}>
            <Avatar>a</Avatar>

            <AmauiThemeProvider
              value={{
                ui: {
                  elements: {
                    AmauiButton: {
                      className: {
                        static: false
                      }
                    }
                  }
                }
              }}
            >
              <Avatar>a</Avatar>

              <Button>a</Button>
            </AmauiThemeProvider>

            <AmauiThemeProvider
              value={{
                ui: {
                  className: {
                    static: false
                  },

                  elements: {
                    AmauiAvatar: {
                      className: {
                        static: true
                      }
                    }
                  }
                }
              }}
            >
              <Avatar>a</Avatar>

              <Button>a</Button>
            </AmauiThemeProvider>
          </div>
        </Accordion>

      </Accordion>
    </div >
  );
}

export default App;
