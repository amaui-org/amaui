import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseSidingRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseSidingRoundedW100'
      short_name='HouseSiding'

      {...props}
    >
      <path d="M6.65 18.7Q6.5 18.7 6.4 18.6Q6.3 18.5 6.3 18.35V10.95H6.175Q5.9 10.95 5.8 10.7Q5.7 10.45 5.9 10.25L11.5 5.2Q11.7 5 12 5Q12.3 5 12.5 5.2L18.1 10.25Q18.3 10.45 18.2 10.7Q18.1 10.95 17.825 10.95H17.7V18.35Q17.7 18.5 17.6 18.6Q17.5 18.7 17.35 18.7Q17.2 18.7 17.1 18.6Q17 18.5 17 18.35V17.35H7V18.35Q7 18.5 6.9 18.6Q6.8 18.7 6.65 18.7ZM8.725 8.65H15.275L12 5.7ZM7 12.65H17V10.2L16.05 9.35H7.95L7 10.2ZM7 16.65H17V13.35H7Z"/>
    </Icon>
  );
});

IconMaterialHouseSidingRoundedW100.displayName = 'AmauiIconMaterialHouseSidingRoundedW100';

export default IconMaterialHouseSidingRoundedW100;
