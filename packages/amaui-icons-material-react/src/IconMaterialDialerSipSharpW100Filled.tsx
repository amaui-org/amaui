import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDialerSipSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DialerSipSharpW100Filled'
      short_name='DialerSip'

      {...props}
    >
      <path d="M15.3 8.65V4.9H16V8.65ZM12.1 8.65V7.95H13.85V7.1H12.1V4.9H14.55V5.6H12.8V6.4H14.55V8.65ZM16.75 8.65V4.9H19.25V7.1H17.45V8.65ZM17.45 6.4H18.55V5.6H17.45ZM18.625 19.55Q16.2 19.575 13.662 18.275Q11.125 16.975 9.05 14.913Q6.975 12.85 5.663 10.312Q4.35 7.775 4.35 5.35Q4.35 5.1 4.363 4.825Q4.375 4.55 4.425 4.3H8.375L9.2 8.075L6.55 10.5Q7.95 12.85 9.675 14.55Q11.4 16.25 13.75 17.55L16.3 14.875L19.65 15.575V19.475Q19.425 19.525 19.138 19.538Q18.85 19.55 18.625 19.55Z"/>
    </Icon>
  );
});

IconMaterialDialerSipSharpW100Filled.displayName = 'AmauiIconMaterialDialerSipSharpW100Filled';

export default IconMaterialDialerSipSharpW100Filled;
