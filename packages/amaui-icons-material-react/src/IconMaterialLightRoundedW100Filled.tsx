import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightRoundedW100Filled'
      short_name='Light'

      {...props}
    >
      <path d="M12 18.5Q10.825 18.5 10.013 17.688Q9.2 16.875 9.2 15.7H5Q4.7 15.7 4.5 15.5Q4.3 15.3 4.3 15Q4.3 11.975 6.425 9.7Q8.55 7.425 11.65 7.3V5.15Q11.65 5 11.75 4.9Q11.85 4.8 12 4.8Q12.15 4.8 12.25 4.9Q12.35 5 12.35 5.15V7.3Q15.45 7.425 17.575 9.7Q19.7 11.975 19.7 15Q19.7 15.3 19.5 15.5Q19.3 15.7 19 15.7H14.8Q14.8 16.875 13.988 17.688Q13.175 18.5 12 18.5ZM5 15H19Q19 12.1 16.95 10.05Q14.9 8 12 8Q9.1 8 7.05 10.05Q5 12.1 5 15ZM12 17.8Q12.875 17.8 13.488 17.188Q14.1 16.575 14.1 15.7H9.9Q9.9 16.575 10.512 17.188Q11.125 17.8 12 17.8ZM12 17.8Q11.125 17.8 10.512 17.188Q9.9 16.575 9.9 15.7H14.1Q14.1 16.575 13.488 17.188Q12.875 17.8 12 17.8Z"/>
    </Icon>
  );
});

IconMaterialLightRoundedW100Filled.displayName = 'AmauiIconMaterialLightRoundedW100Filled';

export default IconMaterialLightRoundedW100Filled;
