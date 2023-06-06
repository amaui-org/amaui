// @ts-nocheck
import React from 'react';

import { copyToClipboard, debounce } from '@amaui/utils';
import { Chips, Chip, Line, LinearProgress, TextField, Type } from '@amaui/ui-react';
import { style } from '@amaui/style-react';

import IconMaterialRefreshRounded from '@amaui/icons-material-rounded-react/IconMaterialRefresh';

const useStyle = style(theme => ({
  root: {
    flex: '1 1 auto'
  },

  icons: {
    width: '100%',
    flex: '1 1 auto',
    height: 0,
    overflow: 'auto',
    marginTop: 16
  },

  icon: {
    width: 104,
    height: 121,
    padding: 14,
    cursor: 'pointer',
    userSelect: 'none',
    borderRadius: 12,
    transition: theme.methods.transitions.make(['background', 'transform'], { duration: 'xs' }),

    '&:hover': {
      background: theme.palette.background.default[theme.palette.light ? 'tertiary' : 'quaternary']
    },

    '&:active': {
      transform: 'scale(0.94)'
    },

    '& p': {
      width: '100%',
      height: 37,
      overflow: 'hidden',
      wordWrap: 'break-word',
      textOverflow: 'ellipsis',
      textAlign: 'center',
      fontSize: '0.8125rem'
    }
  },

  textField: {
    width: '100%',
    maxWidth: 400,
    marginTop: 14
  },

  refresh: {
    pointerEvents: 'all',
    cursor: 'pointer',
    transition: theme.methods.transitions.make('transform', { duration: 'xs' }),

    '&:active': {
      transform: 'scale(0.87)'
    }
  }
}), { name: 'icons-material-react-examples-icons' });

const IconElement = React.forwardRef((props: any, ref: any) => {
  const {
    version,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  const [copied, setCopied] = React.useState(false);

  const refs = {
    timeout: React.useRef<any>()
  };

  const fullName = children?.displayName?.replace(/^Amaui/, '');

  const name = fullName?.replace(/^IconMaterial/, '').replace(/Rounded|Sharp|W100|Filled/gi, '').split(/(?=[A-Z])/).join(' ');

  const Item = children;

  const onCopy = React.useCallback(async () => {
    clearTimeout(refs.timeout.current);

    let toAdd = {
      name: 'Rounded',
      url: 'rounded'
    };

    if (version.includes('Rounded')) toAdd = { name: 'Rounded', url: 'rounded' };

    if (version.includes('Sharp')) toAdd = { name: 'Sharp', url: 'sharp' };

    if (version.includes('Two Tone')) toAdd = { name: 'TwoTone', url: 'two-tone' };

    await copyToClipboard(`import ${fullName}${toAdd.name} from '@amaui/icons-material-${toAdd.url}-react/${fullName}';`);

    setCopied(true);

    refs.timeout.current = setTimeout(() => {
      setCopied(false);
    }, 700);
  }, [version, fullName]);

  return (
    <Line
      justify='flex-start'

      align='center'

      onClick={onCopy}

      className={classes.icon}

      title={name}
    >
      <Item
        size={40}
      />

      <Type
        version='b2'
      >
        {!copied ? name : `Import copied`}
      </Type>
    </Line>
  );
});

const perPage = 70;

const loadMoreLimit = 300;

const element = React.forwardRef((props: any, ref: any) => {
  const { classes } = useStyle();
  const [icons, setIcons] = React.useState<any>({});
  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState<any>('');
  const [version, setVersion] = React.useState('Rounded');
  const [values, setValues] = React.useState<any[]>([]);
  const [visible, setVisible] = React.useState({ total: 1, pages: 1, page: 1, perPage, values: [], loading: false });

  const refs = {
    icons: React.useRef<any>(),
    search: React.useRef<any>(),
    version: React.useRef<any>(),
    values: React.useRef<any>(),
    visible: React.useRef<any>(),
    overflow: React.useRef<any>()
  };

  refs.icons.current = icons;

  refs.search.current = search;

  refs.values.current = values;

  refs.version.current = version;

  refs.visible.current = visible;

  const getRounded = React.useCallback(async () => {
    try {
      const iconsImport = await import('./icons-elements-rounded');

      setIcons(previous => {
        return { ...previous, 'Rounded': iconsImport.default }
      });
    }
    catch (error) {
      setError(true);
    }

    setLoading(false);

    setLoaded(true);
  }, []);

  const getRoundedFilled = React.useCallback(async () => {
    const iconsImport = await import('./icons-elements-rounded-filled');

    setIcons(previous => {
      return { ...previous, 'Rounded Filled': iconsImport.default }
    });
  }, []);

  const getRoundedW100 = React.useCallback(async () => {
    const iconsImport = await import('./icons-elements-rounded-w100');

    setIcons(previous => {
      return { ...previous, 'Rounded W100': iconsImport.default }
    });
  }, []);

  const getRoundedW100Filled = React.useCallback(async () => {
    const iconsImport = await import('./icons-elements-rounded-w100-filled');

    setIcons(previous => {
      return { ...previous, 'Rounded W100 Filled': iconsImport.default }
    });
  }, []);

  const getSharp = React.useCallback(async () => {
    const iconsImport = await import('./icons-elements-sharp');

    setIcons(previous => {
      return { ...previous, 'Sharp': iconsImport.default }
    });
  }, []);

  const getSharpFilled = React.useCallback(async () => {
    const iconsImport = await import('./icons-elements-sharp-filled');

    setIcons(previous => {
      return { ...previous, 'Sharp Filled': iconsImport.default }
    });
  }, []);

  const getSharpW100 = React.useCallback(async () => {
    const iconsImport = await import('./icons-elements-sharp-w100');

    setIcons(previous => {
      return { ...previous, 'Sharp W100': iconsImport.default }
    });
  }, []);

  const getSharpW100Filled = React.useCallback(async () => {
    const iconsImport = await import('./icons-elements-sharp-w100-filled');

    setIcons(previous => {
      return { ...previous, 'Sharp W100 Filled': iconsImport.default }
    });
  }, []);

  const getTwoTone = React.useCallback(async () => {
    const iconsImport = await import('./icons-elements-two-tone');

    setIcons(previous => {
      return { ...previous, 'Two Tone': iconsImport.default }
    });
  }, []);

  const init = React.useCallback(async () => {
    await getRounded();

    getRoundedFilled();

    getRoundedW100();

    getRoundedW100Filled();

    getSharp();

    getSharpFilled();

    getSharpW100();

    getSharpW100Filled();

    getTwoTone();
  }, []);

  React.useEffect(() => {
    init();
  }, []);

  const onSearch = React.useCallback(value => {
    setSearch(value);
  }, []);

  const onVersion = React.useCallback(value => {
    setVersion(value);
  }, []);

  const versions = React.useMemo(() => ['Rounded', 'Rounded Filled', 'Rounded W100', 'Rounded W100 Filled', 'Sharp', 'Sharp Filled', 'Sharp W100', 'Sharp W100 Filled', 'Two Tone'], []);

  const updateValues = React.useCallback(debounce((reset = true) => {
    let items = refs.icons.current[refs.version.current] || [];

    // Filter
    items = items.filter(item => {
      const name = item.displayName?.replace(/AmauiIconMaterial|Filled|W100/g, '')?.toLowerCase();

      return !refs.search.current || name?.includes(refs.search.current?.toLowerCase());
    });

    const valuesNew = { ...refs.visible.current };

    if (reset) {
      valuesNew.page = 1;
      valuesNew.total = items.length;
      valuesNew.pages = Math.ceil(valuesNew.total / valuesNew.perPage);

      refs.overflow.current?.scrollTo(0, 0);
    }

    valuesNew.values = items.slice(0, (valuesNew.page * valuesNew.perPage));

    setVisible(previous => ({ ...previous, ...valuesNew, loading: false }));

    setValues(items);
  }, 440), []);

  const loadMore = React.useCallback(debounce(() => {
    const overflow = refs.overflow.current as HTMLElement;

    const limit = overflow.scrollHeight - (overflow.scrollTop + overflow.clientHeight);

    if (limit <= loadMoreLimit) {
      const visible_ = refs.visible.current;

      // If not in loading process at the moment
      if (!visible_.loading) {
        // If there are pages left to load
        if (visible_.pages > visible_.page) {
          const valuesNew = refs.values.current.slice(visible_.page * visible_.perPage, (visible_.page * visible_.perPage) + visible_.perPage);

          setVisible(previous => ({
            ...previous,

            page: previous.page + 1,
            values: [...previous.values, ...valuesNew],
            loading: true
          }));

          setTimeout(() => {
            setVisible(previous => ({ ...previous, loading: false }));
          }, 140);
        }
      }
    }
  }, 14), []);

  const onScroll = React.useCallback(loadMore, []);

  React.useEffect(() => {
    updateValues(!refs.visible.current.values.length);
  }, [icons, version]);

  React.useEffect(() => {
    updateValues();
  }, [search]);

  return (
    <Line
      ref={ref}

      align='center'

      className={classes.root}
    >
      {error && (
        <Type
          version='b2'

          style={{
            marginTop: 74,
            textAlign: 'center'
          }}
        >
          Oops, there was an error loading the icons, there's 18k+ of them 🫠 <br />
          Try reloading the page. ✨
        </Type>
      )}

      {!loaded && <LinearProgress />}

      {loaded && <>
        <TextField
          version='outlined'

          label='Name'

          value={search}

          end={[
            ...(visible?.page > 1 ? (
              [
                <IconMaterialRefreshRounded
                  color='inherit'

                  onClick={updateValues}

                  className={classes.refresh}
                />
              ]
            ) : [])
          ]}

          onChange={onSearch}

          className={classes.textField}

          clear
        />

        <Chips
          justify='center'

          wrap='wrap'
        >
          {versions.map((item, index) => (
            <Chip
              key={index}

              onClick={() => onVersion(item)}

              selected={version === item}

              color='inherit'

              size='small'

              disabled={loading || !icons[item]?.length}
            >
              {item}
            </Chip>
          ))}
        </Chips>

        <Line
          ref={refs.overflow}

          direction='column'

          onScroll={onScroll}

          className={classes.icons}
        >
          <Line
            direction='row'

            wrap='wrap'
          >
            {visible.values?.map((Item: any, index) => (
              <IconElement
                version={version}
              >
                {Item}
              </IconElement>
            ))}
          </Line>
        </Line>
      </>}
    </Line>
  );
});

export default element;
