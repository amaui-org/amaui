import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial24mpSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='24mpSharpW100'
      short_name='24mp'

      {...props}
    >
      <path d="M6.9 11.1H10.6V10.4H7.6V8.85H10.6V5.9H6.9V6.6H9.9V8.15H6.9ZM15.65 11.1H16.35V9.6H17.65V8.9H16.35V5.9H15.65V8.9H13.65V5.9H12.95V9.6H15.65ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM6.4 18.1H7.1V13.6H8.9V16.6H9.6V13.6H11.4V18.1H12.1V12.9H6.4ZM13.9 18.1H14.6V16.6H17.6V12.9H13.9ZM14.6 13.6H16.9V15.9H14.6ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterial24mpSharpW100.displayName = 'AmauiIconMaterial24mpSharpW100';

export default IconMaterial24mpSharpW100;
