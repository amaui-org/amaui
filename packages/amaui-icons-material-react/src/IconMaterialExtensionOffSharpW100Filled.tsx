import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExtensionOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOffSharpW100Filled'
      short_name='ExtensionOff'

      {...props}
    >
      <path d="M19.85 20.85 18.7 19.7H14Q13.65 18.9 12.975 18.45Q12.3 18 11.5 18Q10.7 18 10.025 18.45Q9.35 18.9 9 19.7H4.3V15Q5.1 14.65 5.55 13.988Q6 13.325 6 12.5Q6 11.675 5.55 11.012Q5.1 10.35 4.3 10V5.3L3.15 4.15L3.65 3.65L20.35 20.35ZM18.7 15.9 8.1 5.3H9Q9.35 4.5 10.012 4.05Q10.675 3.6 11.5 3.6Q12.325 3.6 12.988 4.05Q13.65 4.5 14 5.3H18.7V10Q19.5 10.35 19.95 11.012Q20.4 11.675 20.4 12.5Q20.4 13.325 19.95 13.988Q19.5 14.65 18.7 15Z"/>
    </Icon>
  );
});

IconMaterialExtensionOffSharpW100Filled.displayName = 'AmauiIconMaterialExtensionOffSharpW100Filled';

export default IconMaterialExtensionOffSharpW100Filled;
