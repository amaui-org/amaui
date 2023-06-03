import React from 'react';

import AmauiZip from '@amaui/zip';
import { copyToClipboard, stringify } from '@amaui/utils';
import { Button, IconButton, Line, TextField, Tooltip, Type } from '@amaui/ui-react';
import { style } from '@amaui/style-react';

import IconMaterialContentCopyRounded from '@amaui/icons-material-react/IconMaterialContentCopyRounded';
import IconMaterialDoneRounded from '@amaui/icons-material-react/IconMaterialDoneRounded';

const useStyle = style(theme => ({
  root: {

  },

  pre: {
    fontSize: 12,
    fontFamily: theme.typography.font_family.tertiary,
    width: '100%',
    overflow: 'auto'
  },

  icon: {
    flex: '0 0 auto'
  }
}), { name: 'zip-example-zip' });

const zip = React.forwardRef((props: any, ref: any) => {
  const { classes } = useStyle();

  const [value, setValue] = React.useState();
  const [response, setResponse] = React.useState<AmauiZip>();
  const [copying, setCopying] = React.useState(false);

  const refs = {
    interval: React.useRef<any>()
  };

  React.useEffect(() => {
    (window as any).AmauiZip = AmauiZip;
  }, []);

  const onZip = React.useCallback(() => {
    // AmauiZip encoded_values option, ought to be true
    // for most efficiency, i've only made it false so in the UI
    // to try the AmauiZip, without it browser on copy, copies
    // incorrectly encoded values, use encode_values: true in production
    setResponse(new AmauiZip(value, { encode_values: false }));
  }, [value]);

  const onCopy = React.useCallback(async () => {
    if (response?.response?.value) await copyToClipboard(response?.response?.value);

    clearInterval(refs.interval.current);

    setCopying(true);

    refs.interval.current = setInterval(() => {
      setCopying(false);
    }, 1100);
  }, [response]);

  return (
    <Line
      ref={ref}
    >
      <Line
        direction='row'

        align='center'

        justify='flex-end'

        style={{
          width: '100%'
        }}
      >
        <Button
          tonal

          onClick={onZip}

          disabled={!value}
        >
          Run
        </Button>
      </Line>

      <TextField
        label='Text to zip'

        version='outlined'

        minRows={4}

        maxRows={7}

        multiline

        value={value}

        onChange={setValue}

        style={{
          width: '100%'
        }}
      />

      {response && (
        <Line
          gap={2}

          style={{
            width: '100%'
          }}
        >
          <Line
            gap={1}

            style={{
              width: '100%'
            }}
          >
            <Line
              gap={0.5}

              direction='row'

              justify='space-between'

              align='center'
            >
              <Type
                version='h4'
              >
                Zipped
              </Type>

              <Tooltip
                label='Copy'

                portal={false}
              >
                <IconButton
                  size='small'

                  color='secondary'

                  onClick={onCopy}

                  className={classes.icon}
                >
                  {!copying ? <IconMaterialContentCopyRounded /> : <IconMaterialDoneRounded />}
                </IconButton>
              </Tooltip>
            </Line>

            <Type
              style={{
                wordBreak: 'break-word'
              }}
            >
              {response.response?.value}
            </Type>
          </Line>

          <Line
            gap={1}
          >
            <Type
              version='h4'
            >
              Compression
            </Type>

            <Type>
              {response.response?.compression_percentage} %
            </Type>
          </Line>

          <Line
            gap={1}

            style={{
              width: '100%'
            }}
          >
            <Type
              version='h4'
            >
              Result
            </Type>

            <pre
              className={classes.pre}
            >
              <code>
                {stringify(response, 2)}
              </code>
            </pre>
          </Line>
        </Line>
      )}
    </Line>
  );
});

export default zip;
