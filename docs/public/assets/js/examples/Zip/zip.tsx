import React from 'react';

import AmauiZip from '@amaui/zip';
import { copyToClipboard, stringify } from '@amaui/utils';
import { Button, IconButton, Line, TextField, Type } from '@amaui/ui-react';
import { style } from '@amaui/style-react';

import IconMaterialContentCopyRounded from '@amaui/icons-material-react/IconMaterialContentCopyRounded';

const useStyle = style(theme => ({
  root: {

  },

  pre: {
    fontSize: 12,
    fontFamily: theme.typography.font_family.tertiary,
    width: '100vw',
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
        >
          <Line
            gap={1}
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

              <IconButton
                size='small'

                color='secondary'

                onClick={onCopy}

                className={classes.icon}
              >
                <IconMaterialContentCopyRounded />
              </IconButton>
            </Line>

            <Type>
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
