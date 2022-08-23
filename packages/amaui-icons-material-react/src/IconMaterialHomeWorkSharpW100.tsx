import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeWorkSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkSharpW100'
      short_name='HomeWork'

      {...props}
    >
      <path d="M17.3 8.7H18.7V7.3H17.3ZM17.3 12.7H18.7V11.3H17.3ZM17.3 16.7H18.7V15.3H17.3ZM15.7 19.7V19H21V5H11.2V7.425L10.5 6.925V4.3H21.7V19.7ZM2.3 19.7V11.65L8 7.6L13.7 11.65V19.7ZM3 19H6.65V14.65H9.35V19H13V12L8 8.5L3 12ZM8 14.65ZM8 14.65ZM15.7 10.65Z"/>
    </Icon>
  );
});

IconMaterialHomeWorkSharpW100.displayName = 'AmauiIconMaterialHomeWorkSharpW100';

export default IconMaterialHomeWorkSharpW100;
