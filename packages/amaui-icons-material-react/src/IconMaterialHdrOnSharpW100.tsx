import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrOnSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOnSharpW100'
      short_name='HdrOn'

      {...props}
    >
      <path d="M16.4 14.6V9.4H20.6V12.55H19.5L20.4 14.6H19.65L18.75 12.6H17.1V14.6ZM17.1 11.9H19.9V10.1H17.1ZM3.4 14.6V9.4H4.1V11.4H6.9V9.4H7.6V14.6H6.9V12.1H4.1V14.6ZM9.9 14.6V9.4H12.6Q13.2 9.4 13.65 9.85Q14.1 10.3 14.1 10.9V13.1Q14.1 13.7 13.65 14.15Q13.2 14.6 12.6 14.6ZM10.6 13.9H12.6Q12.9 13.9 13.15 13.65Q13.4 13.4 13.4 13.1V10.9Q13.4 10.6 13.15 10.35Q12.9 10.1 12.6 10.1H10.6Z"/>
    </Icon>
  );
});

IconMaterialHdrOnSharpW100.displayName = 'AmauiIconMaterialHdrOnSharpW100';

export default IconMaterialHdrOnSharpW100;
