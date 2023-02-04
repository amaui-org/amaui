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
    fontFamily: theme.typography.font_family.tertiary
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
    setResponse(new AmauiZip(value));
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
            <Type
              version='h4'
            >
              Zipped
            </Type>

            <Line
              gap={1}

              direction='row'

              align='center'
            >
              <IconButton
                size='small'

                onClick={onCopy}
              >
                <IconMaterialContentCopyRounded />
              </IconButton>

              <Type>
                {response.response?.value}
              </Type>
            </Line>
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
              {stringify(response, 2)}
            </pre>
          </Line>
        </Line>
      )}
    </Line>
  );
});

export default zip;
