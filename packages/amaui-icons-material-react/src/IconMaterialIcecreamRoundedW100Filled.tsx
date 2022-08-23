import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIcecreamRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IcecreamRoundedW100Filled'
      short_name='Icecream'

      {...props}
    >
      <path d="M12.05 19.3Q11.85 19.3 11.675 19.2Q11.5 19.1 11.375 18.9L8.1 12.45Q6.825 13.1 5.562 12.287Q4.3 11.475 4.3 10Q4.3 9.125 4.863 8.338Q5.425 7.55 6.75 7.2Q7.025 4.85 8.575 3.575Q10.125 2.3 12 2.3Q13.875 2.3 15.425 3.575Q16.975 4.85 17.25 7.2Q18.575 7.55 19.138 8.338Q19.7 9.125 19.7 10Q19.7 11.5 18.513 12.262Q17.325 13.025 16 12.45L12.725 18.9Q12.6 19.1 12.425 19.2Q12.25 19.3 12.05 19.3ZM12.05 18.65 15.4 12.1 15.05 11.8Q14.225 12.225 13.438 12.462Q12.65 12.7 12 12.7Q11.425 12.7 10.65 12.5Q9.875 12.3 9.05 11.8L8.7 12.1Z"/>
    </Icon>
  );
});

IconMaterialIcecreamRoundedW100Filled.displayName = 'AmauiIconMaterialIcecreamRoundedW100Filled';

export default IconMaterialIcecreamRoundedW100Filled;
