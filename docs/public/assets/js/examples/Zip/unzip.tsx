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
    overflow: 'auto'
  }
}), { name: 'zip-example-zip' });

const zip = React.forwardRef((props: any, ref: any) => {
  const { classes } = useStyle();

  const [value, setValue] = React.useState();
  const [response, setResponse] = React.useState<any>();

  const onUnzip = React.useCallback(() => {
    try {
      setResponse(AmauiZip.decode(value as any));
    }
    catch (error) {
      console.log('Unzip error', error);
    }
  }, [value]);

  const onCopy = React.useCallback(async () => {
    await copyToClipboard(response.value);
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

          onClick={onUnzip}

          disabled={!value}
        >
          Run
        </Button>
      </Line>

      <TextField
        label='Text to unzip'

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
              Unzipped
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
                {response.value}
              </Type>
            </Line>
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
