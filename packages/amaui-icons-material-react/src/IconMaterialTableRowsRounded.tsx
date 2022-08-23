import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableRowsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsRounded'
      short_name='TableRows'

      {...props}
    >
      <path d="M19 19V16Q19 16 19 16Q19 16 19 16H5Q5 16 5 16Q5 16 5 16V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19ZM19 14V10Q19 10 19 10Q19 10 19 10H5Q5 10 5 10Q5 10 5 10V14Q5 14 5 14Q5 14 5 14H19Q19 14 19 14Q19 14 19 14ZM19 8V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V8Q5 8 5 8Q5 8 5 8H19Q19 8 19 8Q19 8 19 8ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialTableRowsRounded.displayName = 'AmauiIconMaterialTableRowsRounded';

export default IconMaterialTableRowsRounded;
