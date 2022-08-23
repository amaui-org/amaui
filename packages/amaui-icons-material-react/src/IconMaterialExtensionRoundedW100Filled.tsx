import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExtensionRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionRoundedW100Filled'
      short_name='Extension'

      {...props}
    >
      <path d="M5 19.7Q4.725 19.7 4.513 19.487Q4.3 19.275 4.3 19V15Q5.05 14.675 5.525 14Q6 13.325 6 12.5Q6 11.675 5.525 11Q5.05 10.325 4.3 10V6Q4.3 5.725 4.513 5.512Q4.725 5.3 5 5.3H9Q9.325 4.55 10 4.075Q10.675 3.6 11.5 3.6Q12.325 3.6 13 4.075Q13.675 4.55 14 5.3H18Q18.275 5.3 18.488 5.512Q18.7 5.725 18.7 6V10Q19.45 10.325 19.925 11Q20.4 11.675 20.4 12.5Q20.4 13.325 19.925 14Q19.45 14.675 18.7 15V19Q18.7 19.275 18.488 19.487Q18.275 19.7 18 19.7H14Q13.675 18.95 13 18.475Q12.325 18 11.5 18Q10.675 18 10 18.475Q9.325 18.95 9 19.7Z"/>
    </Icon>
  );
});

IconMaterialExtensionRoundedW100Filled.displayName = 'AmauiIconMaterialExtensionRoundedW100Filled';

export default IconMaterialExtensionRoundedW100Filled;
