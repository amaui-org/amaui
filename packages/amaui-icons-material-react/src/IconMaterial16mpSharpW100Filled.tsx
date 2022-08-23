import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial16mpSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='16mpSharpW100Filled'
      short_name='16mp'

      {...props}
    >
      <path d="M8.9 11.1H9.6V5.9H7.4V6.6H8.9ZM13.1 11.1H15.4Q15.7 11.1 15.9 10.9Q16.1 10.7 16.1 10.4V8.85Q16.1 8.55 15.9 8.35Q15.7 8.15 15.4 8.15H13.1V6.6H16.1V5.9H13.1Q12.8 5.9 12.6 6.1Q12.4 6.3 12.4 6.6V10.4Q12.4 10.7 12.6 10.9Q12.8 11.1 13.1 11.1ZM13.1 10.4V8.85H15.4V10.4ZM4.3 19.7V4.3H19.7V19.7ZM6.4 18.1H7.1V13.6H8.9V16.6H9.6V13.6H11.4V18.1H12.1V12.9H6.4ZM13.9 18.1H14.6V16.6H17.6V12.9H13.9ZM14.6 13.6H16.9V15.9H14.6Z"/>
    </Icon>
  );
});

IconMaterial16mpSharpW100Filled.displayName = 'AmauiIconMaterial16mpSharpW100Filled';

export default IconMaterial16mpSharpW100Filled;
