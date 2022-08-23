import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileFriendlyRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendlyRoundedW100Filled'
      short_name='MobileFriendly'

      {...props}
    >
      <path d="M14.95 14.8Q14.8 14.8 14.675 14.75Q14.55 14.7 14.425 14.575L11.85 12Q11.75 11.9 11.738 11.762Q11.725 11.625 11.85 11.5Q11.975 11.375 12.1 11.375Q12.225 11.375 12.35 11.5L14.95 14.1L20.4 8.65Q20.5 8.55 20.638 8.537Q20.775 8.525 20.9 8.65Q21.025 8.775 21.025 8.9Q21.025 9.025 20.9 9.15L15.475 14.575Q15.35 14.7 15.225 14.75Q15.1 14.8 14.95 14.8ZM6.8 21.7Q6.175 21.7 5.738 21.262Q5.3 20.825 5.3 20.2V3.8Q5.3 3.175 5.738 2.737Q6.175 2.3 6.8 2.3H15.2Q15.825 2.3 16.262 2.737Q16.7 3.175 16.7 3.8V6.9H16V5.35H6V18.65H16V17.1H16.7V20.2Q16.7 20.825 16.262 21.262Q15.825 21.7 15.2 21.7Z"/>
    </Icon>
  );
});

IconMaterialMobileFriendlyRoundedW100Filled.displayName = 'AmauiIconMaterialMobileFriendlyRoundedW100Filled';

export default IconMaterialMobileFriendlyRoundedW100Filled;
