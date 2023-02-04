import React from 'react';

import AmauiZip from '@amaui/zip';
import { copyToClipboard, stringify } from '@amaui/utils';
import { Button, Surface, IconButton, Line, TextField, Type } from '@amaui/ui-react';
import { style } from '@amaui/style-react';

import IFrame from '../../ui/IFrame';

import IconMaterialContentCopyRounded from '@amaui/icons-material-react/IconMaterialContentCopyRounded';

const useStyle = style(theme => ({
  root: {
    background: 'none'
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
    await copyToClipboard(response?.response.value);
  }, [response]);

  return (
    <IFrame
      ref={ref}
    >
      <Surface
        tonal

        color='primary'

        direction='column'

        Component={Line}

        className={classes.root}
      >
        <Line
          direction='row'

          align='center'

          justify='space-between'

          style={{
            width: '100%'
          }}
        >
          <Type
            version='h3'
          >
            Zip
          </Type>

          <Button
            onClick={onZip}
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
                  {response.response.value}
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
                {response.response.compression_percentage} %
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
      </Surface>
    </IFrame>
  );
});

export default zip;
