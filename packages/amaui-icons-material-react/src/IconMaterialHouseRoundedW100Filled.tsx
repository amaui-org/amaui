import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseRoundedW100Filled'
      short_name='House'

      {...props}
    >
      <path d="M10.5 18.7H7.05Q6.725 18.7 6.513 18.487Q6.3 18.275 6.3 17.95V10.95H6.175Q5.9 10.95 5.8 10.7Q5.7 10.45 5.9 10.25L11.5 5.2Q11.7 5 11.988 5Q12.275 5 12.4 5.125L16.2 8.55V6.25Q16.2 6.1 16.3 6Q16.4 5.9 16.55 5.9Q16.7 5.9 16.8 6Q16.9 6.1 16.9 6.25V9.15L18.1 10.25Q18.3 10.45 18.2 10.7Q18.1 10.95 17.825 10.95H17.7V17.95Q17.7 18.275 17.488 18.487Q17.275 18.7 16.95 18.7H13.5V14.45Q13.5 14.125 13.288 13.912Q13.075 13.7 12.75 13.7H11.25Q10.925 13.7 10.713 13.912Q10.5 14.125 10.5 14.45ZM10.25 10H13.75Q13.75 9.325 13.225 8.887Q12.7 8.45 12 8.45Q11.3 8.45 10.775 8.887Q10.25 9.325 10.25 10Z"/>
    </Icon>
  );
});

IconMaterialHouseRoundedW100Filled.displayName = 'AmauiIconMaterialHouseRoundedW100Filled';

export default IconMaterialHouseRoundedW100Filled;
