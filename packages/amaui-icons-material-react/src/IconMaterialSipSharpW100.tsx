import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSipSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SipSharpW100'
      short_name='Sip'

      {...props}
    >
      <path d="M11.65 14.6H12.35V9.4H11.65ZM14.4 14.6H15.1V12.6H18.6V9.4H14.4ZM15.1 11.9V10.1H17.9V11.9ZM5.4 14.6H9.6V11.65H6.1V10.1H9.6V9.4H5.4V12.35H8.9V13.9H5.4ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM4.8 18Q4.45 18 4.225 17.775Q4 17.55 4 17.2V6.8Q4 6.45 4.225 6.225Q4.45 6 4.8 6Q4.45 6 4.225 6.225Q4 6.45 4 6.8V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18ZM4.8 18H19.2Q19.55 18 19.775 17.775Q20 17.55 20 17.2V6.8Q20 6.45 19.775 6.225Q19.55 6 19.2 6H4.8Q4.45 6 4.225 6.225Q4 6.45 4 6.8V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18Z"/>
    </Icon>
  );
});

IconMaterialSipSharpW100.displayName = 'AmauiIconMaterialSipSharpW100';

export default IconMaterialSipSharpW100;
