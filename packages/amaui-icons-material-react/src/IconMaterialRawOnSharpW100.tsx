import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRawOnSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RawOnSharpW100'
      short_name='RawOn'

      {...props}
    >
      <path d="M8.925 14.6 10.725 9.4H11.725L13.525 14.6H12.775L12.225 13.05H10.225L9.675 14.6ZM10.425 12.4H12.025L11.325 10.35H11.125ZM15.725 14.6 14.325 9.4H15.05L16.05 13.075L17 9.4H17.6L18.55 13.075L19.55 9.4H20.275L18.875 14.6H18.25L17.3 11.075L16.35 14.6ZM3.4 14.6V9.4H6.1Q6.7 9.4 7.15 9.85Q7.6 10.3 7.6 10.9V11.1Q7.6 11.525 7.338 11.938Q7.075 12.35 6.5 12.55L7.4 14.6H6.65L5.75 12.6H4.1V14.6ZM4.1 11.9H6.1Q6.4 11.9 6.65 11.65Q6.9 11.4 6.9 11.1V10.9Q6.9 10.6 6.65 10.35Q6.4 10.1 6.1 10.1H4.1Z"/>
    </Icon>
  );
});

IconMaterialRawOnSharpW100.displayName = 'AmauiIconMaterialRawOnSharpW100';

export default IconMaterialRawOnSharpW100;
