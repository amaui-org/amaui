import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoReadPlaySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlaySharpW100'
      short_name='AutoReadPlay'

      {...props}
    >
      <path d="M10 12.8 14.2 10 10 7.2ZM3.3 19.5V3.3H20.7V16.7H6.1ZM4 17.8 5.8 16H20V4H4ZM4 17.8V4V16Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPlaySharpW100.displayName = 'AmauiIconMaterialAutoReadPlaySharpW100';

export default IconMaterialAutoReadPlaySharpW100;
