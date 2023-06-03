import React from 'react';
import Dynamic from 'next/dynamic';

import AmauiZip from '@amaui/zip';
import { copyToClipboard, stringify } from '@amaui/utils';
import { Button, IconButton, Line, TextField, Tooltip, Type } from '@amaui/ui-react';
import { style } from '@amaui/style-react';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'icons-material-react-examples-icons' });

const icons = React.forwardRef((props: any, ref: any) => {
  const { classes } = useStyle();
  const [elements, setElements] = React.useState<any>([]);

  const init = async () => {
    const value = 'IconMaterialContentCopyRounded';
    const element = Dynamic(() => import(`./icons/${value}`));

    setElements([element]);
  };

  React.useEffect(() => {
    init();
  }, []);

  return (
    <Line
      ref={ref}
    >
      Icons {elements.map((Item: any) => <Item />)}
    </Line>
  );
});

export default icons;
