import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlagRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagRoundedW100Filled'
      short_name='Flag'

      {...props}
    >
      <path d="M6.65 20.35Q6.5 20.35 6.4 20.25Q6.3 20.15 6.3 20V6.05Q6.3 5.725 6.513 5.512Q6.725 5.3 7.05 5.3H12.325Q12.6 5.3 12.812 5.463Q13.025 5.625 13.075 5.9L13.35 7.3H17.95Q18.275 7.3 18.488 7.512Q18.7 7.725 18.7 8.05V13.95Q18.7 14.275 18.488 14.487Q18.275 14.7 17.95 14.7H14.675Q14.4 14.7 14.188 14.537Q13.975 14.375 13.925 14.1L13.65 12.7H7V20Q7 20.15 6.9 20.25Q6.8 20.35 6.65 20.35Z"/>
    </Icon>
  );
});

IconMaterialFlagRoundedW100Filled.displayName = 'AmauiIconMaterialFlagRoundedW100Filled';

export default IconMaterialFlagRoundedW100Filled;
