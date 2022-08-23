import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableRowsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsSharp'
      short_name='TableRows'

      {...props}
    >
      <path d="M19 19V16H5V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19ZM19 14V10H5V14H19ZM19 8V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V8H19ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialTableRowsSharp.displayName = 'AmauiIconMaterialTableRowsSharp';

export default IconMaterialTableRowsSharp;
