import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellular2BarOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular2BarOutlinedFilled'
      short_name='SignalCellular2Bar'

      {...props}
    >
      <path d="M2 22 22 2V22ZM13 20H20V6.825L13 13.825Z"/>
    </Icon>
  )
});

export default IconMaterialSignalCellular2BarOutlinedFilled;
