import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseRoundedW100'
      short_name='House'

      {...props}
    >
      <path d="M10.7 18.7H7.05Q6.725 18.7 6.513 18.487Q6.3 18.275 6.3 17.95V10.95H6.175Q5.9 10.95 5.8 10.7Q5.7 10.45 5.9 10.25L11.5 5.2Q11.7 5 11.988 5Q12.275 5 12.4 5.125L15.7 8.1V6.25Q15.7 6.1 15.8 6Q15.9 5.9 16.05 5.9H16.55Q16.7 5.9 16.8 6Q16.9 6.1 16.9 6.25V9.15L18.1 10.25Q18.3 10.45 18.2 10.7Q18.1 10.95 17.825 10.95H17.7V17.95Q17.7 18.275 17.488 18.487Q17.275 18.7 16.95 18.7H13.3V13.7Q13.3 13.7 13.3 13.7Q13.3 13.7 13.3 13.7H10.7Q10.7 13.7 10.7 13.7Q10.7 13.7 10.7 13.7ZM7 18H10V13.75Q10 13.425 10.213 13.212Q10.425 13 10.75 13H13.25Q13.575 13 13.788 13.212Q14 13.425 14 13.75V18H17V10.2L12 5.7L7 10.2ZM10.25 10H13.75Q13.75 9.325 13.225 8.887Q12.7 8.45 12 8.45Q11.3 8.45 10.775 8.887Q10.25 9.325 10.25 10ZM10.75 13H12H13.25H10.75Z"/>
    </Icon>
  );
});

IconMaterialHouseRoundedW100.displayName = 'AmauiIconMaterialHouseRoundedW100';

export default IconMaterialHouseRoundedW100;
