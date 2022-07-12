import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalSplitOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplitOutlinedW700Filled'
      short_name='VerticalSplit'

      {...props}
    >
      <path d="M1.625 7V3.85H10.3V7ZM12.3 20.15V3.85H22.375V20.15ZM1.625 11.375V8.225H10.3V11.375ZM1.625 15.775V12.625H10.3V15.775ZM1.625 20.15V17H10.3V20.15Z"/>
    </Icon>
  )
});

export default IconMaterialVerticalSplitOutlinedW700Filled;
