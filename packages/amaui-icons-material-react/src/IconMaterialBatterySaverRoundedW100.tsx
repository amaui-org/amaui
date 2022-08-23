import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatterySaverRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaverRoundedW100'
      short_name='BatterySaver'

      {...props}
    >
      <path d="M8.35 21.35Q8.05 21.35 7.85 21.15Q7.65 20.95 7.65 20.65V5.35Q7.65 5.05 7.85 4.85Q8.05 4.65 8.35 4.65H10.4V3.9Q10.4 3.575 10.613 3.362Q10.825 3.15 11.15 3.15H12.85Q13.175 3.15 13.388 3.362Q13.6 3.575 13.6 3.9V4.65H15.65Q15.95 4.65 16.15 4.85Q16.35 5.05 16.35 5.35V20.65Q16.35 20.95 16.15 21.15Q15.95 21.35 15.65 21.35ZM12 15.35Q12.15 15.35 12.25 15.25Q12.35 15.15 12.35 15V13.35H14Q14.15 13.35 14.25 13.25Q14.35 13.15 14.35 13Q14.35 12.85 14.25 12.75Q14.15 12.65 14 12.65H12.35V11Q12.35 10.85 12.25 10.75Q12.15 10.65 12 10.65Q11.85 10.65 11.75 10.75Q11.65 10.85 11.65 11V12.65H10Q9.85 12.65 9.75 12.75Q9.65 12.85 9.65 13Q9.65 13.15 9.75 13.25Q9.85 13.35 10 13.35H11.65V15Q11.65 15.15 11.75 15.25Q11.85 15.35 12 15.35Z"/>
    </Icon>
  );
});

IconMaterialBatterySaverRoundedW100.displayName = 'AmauiIconMaterialBatterySaverRoundedW100';

export default IconMaterialBatterySaverRoundedW100;
