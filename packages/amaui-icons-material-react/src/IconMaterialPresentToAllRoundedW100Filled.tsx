import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPresentToAllRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAllRoundedW100Filled'
      short_name='PresentToAll'

      {...props}
    >
      <path d="M12 15.1Q12.15 15.1 12.25 15Q12.35 14.9 12.35 14.75V10.25L14.375 12.275Q14.475 12.375 14.6 12.375Q14.725 12.375 14.85 12.25Q14.975 12.125 14.975 12Q14.975 11.875 14.85 11.75L12.525 9.425Q12.4 9.3 12.275 9.25Q12.15 9.2 12 9.2Q11.85 9.2 11.725 9.25Q11.6 9.3 11.475 9.425L9.125 11.775Q9.025 11.875 9.025 12Q9.025 12.125 9.15 12.25Q9.275 12.375 9.4 12.375Q9.525 12.375 9.65 12.25L11.65 10.25V14.75Q11.65 14.9 11.75 15Q11.85 15.1 12 15.1ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialPresentToAllRoundedW100Filled.displayName = 'AmauiIconMaterialPresentToAllRoundedW100Filled';

export default IconMaterialPresentToAllRoundedW100Filled;
