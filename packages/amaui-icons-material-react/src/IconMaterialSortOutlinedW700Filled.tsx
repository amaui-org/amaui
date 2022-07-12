import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSortOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortOutlinedW700Filled'
      short_name='Sort'

      {...props}
    >
      <path d="M2.425 18.95V15.8H9.575V18.95ZM2.425 8.2V5.05H21.575V8.2ZM2.425 13.575V10.425H15.575V13.575Z"/>
    </Icon>
  )
});

export default IconMaterialSortOutlinedW700Filled;
