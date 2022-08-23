import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddLocationRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationRoundedW100Filled'
      short_name='AddLocation'

      {...props}
    >
      <path d="M12 13.35Q12.15 13.35 12.25 13.25Q12.35 13.15 12.35 13V10.35H15Q15.15 10.35 15.25 10.25Q15.35 10.15 15.35 10Q15.35 9.85 15.25 9.75Q15.15 9.65 15 9.65H12.35V7Q12.35 6.85 12.25 6.75Q12.15 6.65 12 6.65Q11.85 6.65 11.75 6.75Q11.65 6.85 11.65 7V9.65H9Q8.85 9.65 8.75 9.75Q8.65 9.85 8.65 10Q8.65 10.15 8.75 10.25Q8.85 10.35 9 10.35H11.65V13Q11.65 13.15 11.75 13.25Q11.85 13.35 12 13.35ZM12 21.2Q11.85 21.2 11.725 21.163Q11.6 21.125 11.475 21.025Q8.025 17.825 6.338 15.087Q4.65 12.35 4.65 10.2Q4.65 6.75 6.875 4.7Q9.1 2.65 12 2.65Q14.9 2.65 17.125 4.7Q19.35 6.75 19.35 10.2Q19.35 12.35 17.663 15.087Q15.975 17.825 12.525 21.025Q12.425 21.125 12.288 21.163Q12.15 21.2 12 21.2Z"/>
    </Icon>
  );
});

IconMaterialAddLocationRoundedW100Filled.displayName = 'AmauiIconMaterialAddLocationRoundedW100Filled';

export default IconMaterialAddLocationRoundedW100Filled;
