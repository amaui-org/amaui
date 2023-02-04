import React from 'react';

import AmauiZip from '@amaui/zip';
import { stringify } from '@amaui/utils';
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
  const [response, setResponse] = React.useState<AmauiZip>();

  const onZip = React.useCallback(() => {
    setResponse(new AmauiZip(value));
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
            Zip
          </Type>

          <Button
            color='secondary'

            onClick={onZip}
          >
            Run
          </Button>
        </Line>

        <TextField
          label='Text to zip'

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
