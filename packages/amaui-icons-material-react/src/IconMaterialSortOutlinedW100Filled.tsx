import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSortOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortOutlinedW100Filled'
      short_name='Sort'

      {...props}
    >
      <path d="M3.65 17.35V16.65H8.35V17.35ZM3.65 6.35V5.65H20.35V6.35ZM3.65 11.85V11.15H14.35V11.85Z"/>
    </Icon>
  )
});

export default IconMaterialSortOutlinedW100Filled;
