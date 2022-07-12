import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalSplitOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplitOutlinedW700Filled'
      short_name='HorizontalSplit'

      {...props}
    >
      <path d="M2.15 7.375V4.225H21.85V7.375ZM2.15 12.15V9H21.85V12.15ZM2.15 19.775V13.775H21.85V19.775ZM4.55 17.375H19.45V16.15H4.55ZM4.55 17.375V16.15H19.45V17.375Z"/>
    </Icon>
  )
});

export default IconMaterialHorizontalSplitOutlinedW700Filled;
