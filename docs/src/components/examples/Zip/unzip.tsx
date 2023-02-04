import React from 'react';

import AmauiZip from '@amaui/zip';
import { parse, stringify } from '@amaui/utils';
import { Button, Line, TextField, Type } from '@amaui/ui-react';
import { style } from '@amaui/style-react';

import IFrame from '../../ui/IFrame';

const useStyle = style(theme => ({
  pre: {
    fontSize: 14,
    fontFamily: theme.typography.font_family.tertiary
  }
}), { name: 'zip-example-zip' });

const zip = React.forwardRef((props: any, ref: any) => {
  const { classes } = useStyle();

  const [value, setValue] = React.useState();
  const [response, setResponse] = React.useState<any>();

  const onUnzip = React.useCallback(() => {
    try {
      setResponse(AmauiZip.decode(parse(value)));
    }
    catch (error) {
      console.log('Unzip error', error);
    }
  }, [value]);

  return (
    <IFrame
      ref={ref}
    >
      <Line
        direction='column'
      >
        <Line
          direction='row'

          justify='space-between'

          style={{
            width: '100%'
          }}
        >
          <Type
            version='h3'
          >
            Unzip
          </Type>

          <Button
            color='secondary'

            onClick={onUnzip}
          >
            Run
          </Button>
        </Line>

        <TextField
          label='Text to unzip'

          color='secondary'

          tonal={false}

          version='outlined'

          minRows={4}

          multiline

          value={value}

          onChange={setValue}

          style={{
            width: '100%'
          }}
        />

        {response && (
          <Line>
            <Type
              version='l2'
            >
              Result:
            </Type>

            <pre
              className={classes.pre}
            >
              {stringify(response, 2)}
            </pre>
          </Line>
        )}
      </Line>
    </IFrame>
  );
});

export default zip;
