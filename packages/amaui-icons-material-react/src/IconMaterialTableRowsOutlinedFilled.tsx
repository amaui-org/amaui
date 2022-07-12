import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableRowsOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsOutlinedFilled'
      short_name='TableRows'

      {...props}
    >
      <path d="M3 21V16.35H21V21ZM3 14.35V9.625H21V14.35ZM3 7.625V3H21V7.625Z"/>
    </Icon>
  )
});

export default IconMaterialTableRowsOutlinedFilled;
