import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellular1BarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular1BarSharpFilled'
      short_name='SignalCellular1Bar'

      {...props}
    >
      <path d="M2 22 22 2V22ZM10 20H20V6.825L10 16.825Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular1BarSharpFilled.displayName = 'AmauiIconMaterialSignalCellular1BarSharpFilled';

export default IconMaterialSignalCellular1BarSharpFilled;
