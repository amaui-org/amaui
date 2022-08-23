import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhonePausedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonePausedSharpW100Filled'
      short_name='PhonePaused'

      {...props}
    >
      <path d="M15.75 10V4.3H16.45V10ZM18.95 10V4.3H19.65V10ZM18.625 19.55Q16.2 19.575 13.662 18.275Q11.125 16.975 9.05 14.913Q6.975 12.85 5.663 10.312Q4.35 7.775 4.35 5.35Q4.35 5.1 4.363 4.825Q4.375 4.55 4.425 4.3H8.375L9.2 8.075L6.55 10.5Q7.95 12.85 9.675 14.55Q11.4 16.25 13.75 17.55L16.3 14.875L19.65 15.575V19.475Q19.425 19.525 19.138 19.538Q18.85 19.55 18.625 19.55Z"/>
    </Icon>
  );
});

IconMaterialPhonePausedSharpW100Filled.displayName = 'AmauiIconMaterialPhonePausedSharpW100Filled';

export default IconMaterialPhonePausedSharpW100Filled;
