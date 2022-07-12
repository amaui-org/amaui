import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalSplitOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplitOutlinedW100Filled'
      short_name='HorizontalSplit'

      {...props}
    >
      <path d="M4.3 7V6.3H19.7V7ZM4.3 9.7V9H19.7V9.7ZM4.3 17.7V11.7H19.7V17.7ZM5 17H19V12.4H5ZM5 17V12.4H19V17Z"/>
    </Icon>
  )
});

export default IconMaterialHorizontalSplitOutlinedW100Filled;
