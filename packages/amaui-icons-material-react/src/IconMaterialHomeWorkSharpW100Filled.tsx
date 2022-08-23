import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeWorkSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkSharpW100Filled'
      short_name='HomeWork'

      {...props}
    >
      <path d="M17.3 8.7H18.7V7.3H17.3ZM17.3 12.7H18.7V11.3H17.3ZM17.3 16.7H18.7V15.3H17.3ZM15.7 19.7V10.625L10.5 6.9V4.3H21.7V19.7ZM2.3 19.7V11.65L8 7.6L13.7 11.65V19.7ZM9.35 19V14.65H6.65V19Z"/>
    </Icon>
  );
});

IconMaterialHomeWorkSharpW100Filled.displayName = 'AmauiIconMaterialHomeWorkSharpW100Filled';

export default IconMaterialHomeWorkSharpW100Filled;
