import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSystemUpdateRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateRoundedW100Filled'
      short_name='SystemUpdate'

      {...props}
    >
      <path d="M12 14.8Q11.85 14.8 11.725 14.75Q11.6 14.7 11.475 14.575L9.15 12.25Q9.05 12.15 9.038 12.012Q9.025 11.875 9.15 11.75Q9.275 11.625 9.4 11.625Q9.525 11.625 9.65 11.75L11.65 13.75V9.25Q11.65 9.1 11.75 9Q11.85 8.9 12 8.9Q12.15 8.9 12.25 9Q12.35 9.1 12.35 9.25V13.75L14.35 11.75Q14.45 11.65 14.588 11.637Q14.725 11.625 14.85 11.75Q14.975 11.875 14.975 12Q14.975 12.125 14.85 12.25L12.525 14.575Q12.4 14.7 12.275 14.75Q12.15 14.8 12 14.8ZM7.8 21.7Q7.175 21.7 6.738 21.262Q6.3 20.825 6.3 20.2V3.8Q6.3 3.175 6.738 2.737Q7.175 2.3 7.8 2.3H16.2Q16.825 2.3 17.262 2.737Q17.7 3.175 17.7 3.8V20.2Q17.7 20.825 17.262 21.262Q16.825 21.7 16.2 21.7ZM7 18.65H17V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateRoundedW100Filled.displayName = 'AmauiIconMaterialSystemUpdateRoundedW100Filled';

export default IconMaterialSystemUpdateRoundedW100Filled;
