import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellular3BarTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular3BarTwoTone'
      short_name='SignalCellular3Bar'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 22h20V2L2 22z" fill-opacity=".3"/><path d="M17 7L2 22h15V7z"/>
    </Icon>
  );
});

IconMaterialSignalCellular3BarTwoTone.displayName = 'AmauiIconMaterialSignalCellular3BarTwoTone';

export default IconMaterialSignalCellular3BarTwoTone;
