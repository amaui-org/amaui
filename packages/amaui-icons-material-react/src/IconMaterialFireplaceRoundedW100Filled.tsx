import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFireplaceRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireplaceRoundedW100Filled'
      short_name='Fireplace'

      {...props}
    >
      <path d="M10.6 18.25Q11.575 19.05 12.713 18.638Q13.85 18.225 14 16.95Q14.125 15.775 13.275 15.213Q12.425 14.65 12 13.75Q11.875 14.1 11.875 14.4Q11.875 14.7 11.95 15.05Q12.025 15.475 12.125 15.85Q12.225 16.225 12.15 16.65Q12.025 17.1 11.6 17.575Q11.175 18.05 10.6 18.25ZM4 20.7Q3.725 20.7 3.513 20.487Q3.3 20.275 3.3 20V4Q3.3 3.725 3.513 3.512Q3.725 3.3 4 3.3H20Q20.275 3.3 20.488 3.512Q20.7 3.725 20.7 4V20Q20.7 20.275 20.488 20.487Q20.275 20.7 20 20.7ZM12.05 11.125Q12.4 11.95 13 12.65Q13.6 13.35 14.55 14.05Q15.125 14.5 15.413 15.075Q15.7 15.65 15.7 16.3Q15.7 17.1 15.338 17.9Q14.975 18.7 14.15 19.3H16.35Q16.625 19.3 16.863 19.513Q17.1 19.725 17.1 20H20V4H4V20H6.9Q6.9 19.725 7.138 19.513Q7.375 19.3 7.65 19.3H10.1Q9.3 18.775 8.8 17.913Q8.3 17.05 8.3 16.25Q8.3 14.45 9.163 13.137Q10.025 11.825 11.325 10.875Q11.525 10.725 11.725 10.787Q11.925 10.85 12.05 11.125Z"/>
    </Icon>
  );
});

IconMaterialFireplaceRoundedW100Filled.displayName = 'AmauiIconMaterialFireplaceRoundedW100Filled';

export default IconMaterialFireplaceRoundedW100Filled;
