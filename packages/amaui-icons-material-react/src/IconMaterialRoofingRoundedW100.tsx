import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoofingRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoofingRoundedW100'
      short_name='Roofing'

      {...props}
    >
      <path d="M6.05 10.95Q5.8 10.95 5.7 10.725Q5.6 10.5 5.8 10.325L11.5 5.2Q11.7 5 12 5Q12.3 5 12.5 5.2L15.8 8.175V6.35Q15.8 6.2 15.9 6.1Q16 6 16.15 6H16.65Q16.8 6 16.9 6.1Q17 6.2 17 6.35V9.25L18.2 10.35Q18.375 10.525 18.288 10.737Q18.2 10.95 17.95 10.95Q17.9 10.95 17.838 10.925Q17.775 10.9 17.725 10.85L12 5.7L6.275 10.85Q6.225 10.9 6.175 10.925Q6.125 10.95 6.05 10.95ZM10.65 18.7Q10.325 18.7 10.113 18.487Q9.9 18.275 9.9 17.95V15Q9.9 14.675 10.113 14.462Q10.325 14.25 10.65 14.25H13.35Q13.675 14.25 13.888 14.462Q14.1 14.675 14.1 15V17.95Q14.1 18.275 13.888 18.487Q13.675 18.7 13.35 18.7ZM10.6 18H13.4V14.95H10.6Z"/>
    </Icon>
  );
});

IconMaterialRoofingRoundedW100.displayName = 'AmauiIconMaterialRoofingRoundedW100';

export default IconMaterialRoofingRoundedW100;
