import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellular4BarSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular4BarSharp'
      short_name='SignalCellular4Bar'

      {...props}
    >
      <path d="M2 22 22 2V22Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular4BarSharp.displayName = 'AmauiIconMaterialSignalCellular4BarSharp';

export default IconMaterialSignalCellular4BarSharp;
