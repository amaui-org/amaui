import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSipSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SipSharpW100Filled'
      short_name='Sip'

      {...props}
    >
      <path d="M11.65 14.6H12.35V9.4H11.65ZM14.4 14.6H15.1V12.6H18.6V9.4H14.4ZM15.1 11.9V10.1H17.9V11.9ZM5.4 14.6H9.6V11.65H6.1V10.1H9.6V9.4H5.4V12.35H8.9V13.9H5.4ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialSipSharpW100Filled.displayName = 'AmauiIconMaterialSipSharpW100Filled';

export default IconMaterialSipSharpW100Filled;
