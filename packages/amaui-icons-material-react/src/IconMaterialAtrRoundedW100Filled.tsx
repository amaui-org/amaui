import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAtrRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtrRoundedW100Filled'
      short_name='Atr'

      {...props}
    >
      <path d="M7.2 18.25Q6.275 18.25 5.613 17.587Q4.95 16.925 4.95 16Q4.95 15.05 5.613 14.4Q6.275 13.75 7.2 13.75Q8.15 13.75 8.8 14.4Q9.45 15.05 9.45 16Q9.45 16.925 8.8 17.587Q8.15 18.25 7.2 18.25ZM12 10.25Q11.075 10.25 10.413 9.587Q9.75 8.925 9.75 8Q9.75 7.05 10.413 6.4Q11.075 5.75 12 5.75Q12.95 5.75 13.6 6.4Q14.25 7.05 14.25 8Q14.25 8.925 13.6 9.587Q12.95 10.25 12 10.25ZM16.8 18.25Q15.875 18.25 15.213 17.587Q14.55 16.925 14.55 16Q14.55 15.05 15.213 14.4Q15.875 13.75 16.8 13.75Q17.75 13.75 18.4 14.4Q19.05 15.05 19.05 16Q19.05 16.925 18.4 17.587Q17.75 18.25 16.8 18.25Z"/>
    </Icon>
  );
});

IconMaterialAtrRoundedW100Filled.displayName = 'AmauiIconMaterialAtrRoundedW100Filled';

export default IconMaterialAtrRoundedW100Filled;
