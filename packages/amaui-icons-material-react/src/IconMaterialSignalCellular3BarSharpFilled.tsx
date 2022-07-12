import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellular3BarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular3BarSharpFilled'
      short_name='SignalCellular3Bar'

      {...props}
    >
      <path d="M2 22 22 2V22ZM15 20H20V6.825L15 11.825Z"/>
    </Icon>
  )
});

export default IconMaterialSignalCellular3BarSharpFilled;
