import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeMaxSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMaxSharpW100'
      short_name='HomeMax'

      {...props}
    >
      <path d="M8.3 17.4V16.7H5Q3.875 16.7 3.088 15.912Q2.3 15.125 2.3 14V9Q2.3 7.875 3.088 7.088Q3.875 6.3 5 6.3H19Q20.125 6.3 20.913 7.088Q21.7 7.875 21.7 9V14Q21.7 15.125 20.913 15.912Q20.125 16.7 19 16.7H15.7V17.4ZM3 7Q3 7 3 7.587Q3 8.175 3 9V14Q3 14.825 3 15.412Q3 16 3 16Q3 16 3 15.412Q3 14.825 3 14V9Q3 8.175 3 7.587Q3 7 3 7ZM5 16H19Q19.825 16 20.413 15.412Q21 14.825 21 14V9Q21 8.175 20.413 7.587Q19.825 7 19 7H5Q4.175 7 3.587 7.587Q3 8.175 3 9V14Q3 14.825 3.587 15.412Q4.175 16 5 16Z"/>
    </Icon>
  );
});

IconMaterialHomeMaxSharpW100.displayName = 'AmauiIconMaterialHomeMaxSharpW100';

export default IconMaterialHomeMaxSharpW100;
