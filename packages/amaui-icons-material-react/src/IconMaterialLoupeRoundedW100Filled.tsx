import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoupeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoupeRoundedW100Filled'
      short_name='Loupe'

      {...props}
    >
      <path d="M12 16.35Q12.15 16.35 12.25 16.25Q12.35 16.15 12.35 16V12.35H16Q16.15 12.35 16.25 12.25Q16.35 12.15 16.35 12Q16.35 11.85 16.25 11.75Q16.15 11.65 16 11.65H12.35V8Q12.35 7.85 12.25 7.75Q12.15 7.65 12 7.65Q11.85 7.65 11.75 7.75Q11.65 7.85 11.65 8V11.65H8Q7.85 11.65 7.75 11.75Q7.65 11.85 7.65 12Q7.65 12.15 7.75 12.25Q7.85 12.35 8 12.35H11.65V16Q11.65 16.15 11.75 16.25Q11.85 16.35 12 16.35ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12V19.2Q20.7 19.825 20.263 20.262Q19.825 20.7 19.2 20.7Z"/>
    </Icon>
  );
});

IconMaterialLoupeRoundedW100Filled.displayName = 'AmauiIconMaterialLoupeRoundedW100Filled';

export default IconMaterialLoupeRoundedW100Filled;
