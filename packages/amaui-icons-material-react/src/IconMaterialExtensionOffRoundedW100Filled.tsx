import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExtensionOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOffRoundedW100Filled'
      short_name='ExtensionOff'

      {...props}
    >
      <path d="M19.625 20.6 18.525 19.5Q18.425 19.6 18.3 19.65Q18.175 19.7 18.025 19.7H14.025Q13.675 18.9 13 18.45Q12.325 18 11.525 18Q10.725 18 10.05 18.45Q9.375 18.9 9.025 19.7H5.025Q4.725 19.7 4.525 19.5Q4.325 19.3 4.325 19V15Q5.125 14.65 5.575 13.988Q6.025 13.325 6.025 12.5Q6.025 11.675 5.575 11.012Q5.125 10.35 4.325 10V6Q4.325 5.85 4.375 5.725Q4.425 5.6 4.525 5.5L3.425 4.4Q3.3 4.275 3.3 4.15Q3.3 4.025 3.425 3.9Q3.55 3.775 3.675 3.775Q3.8 3.775 3.925 3.9L20.125 20.1Q20.25 20.225 20.25 20.35Q20.25 20.475 20.125 20.6Q20 20.725 19.875 20.725Q19.75 20.725 19.625 20.6ZM18.725 15.9 8.125 5.3H9.025Q9.375 4.5 10.038 4.05Q10.7 3.6 11.525 3.6Q12.35 3.6 13.013 4.05Q13.675 4.5 14.025 5.3H18.025Q18.325 5.3 18.525 5.5Q18.725 5.7 18.725 6V10Q19.525 10.35 19.975 11.012Q20.425 11.675 20.425 12.5Q20.425 13.325 19.975 13.988Q19.525 14.65 18.725 15Z"/>
    </Icon>
  );
});

IconMaterialExtensionOffRoundedW100Filled.displayName = 'AmauiIconMaterialExtensionOffRoundedW100Filled';

export default IconMaterialExtensionOffRoundedW100Filled;
