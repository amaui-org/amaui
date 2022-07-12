import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalSplitOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplitOutlinedW100Filled'
      short_name='VerticalSplit'

      {...props}
    >
      <path d="M4.3 7V6.3H11V7ZM14.3 17.7V6.3H19.7V17.7ZM4.3 10.55V9.85H11V10.55ZM4.3 14.15V13.45H11V14.15ZM4.3 17.7V17H11V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialVerticalSplitOutlinedW100Filled;
