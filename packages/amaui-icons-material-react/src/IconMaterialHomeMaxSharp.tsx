import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeMaxSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMaxSharp'
      short_name='HomeMax'

      {...props}
    >
      <path d="M7 19V18H5Q3.35 18 2.175 16.825Q1 15.65 1 14V9Q1 7.35 2.175 6.175Q3.35 5 5 5H19Q20.65 5 21.825 6.175Q23 7.35 23 9V14Q23 15.65 21.825 16.825Q20.65 18 19 18H17V19ZM3 7Q3 7 3 7.587Q3 8.175 3 9V14Q3 14.825 3 15.412Q3 16 3 16Q3 16 3 15.412Q3 14.825 3 14V9Q3 8.175 3 7.587Q3 7 3 7ZM5 16H19Q19.825 16 20.413 15.412Q21 14.825 21 14V9Q21 8.175 20.413 7.587Q19.825 7 19 7H5Q4.175 7 3.587 7.587Q3 8.175 3 9V14Q3 14.825 3.587 15.412Q4.175 16 5 16Z"/>
    </Icon>
  );
});

IconMaterialHomeMaxSharp.displayName = 'AmauiIconMaterialHomeMaxSharp';

export default IconMaterialHomeMaxSharp;
