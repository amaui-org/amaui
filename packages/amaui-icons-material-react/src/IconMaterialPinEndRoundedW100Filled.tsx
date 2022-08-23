import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinEndRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinEndRoundedW100Filled'
      short_name='PinEnd'

      {...props}
    >
      <path d="M14.625 14.125 10.35 9.85V12.65Q10.35 12.8 10.25 12.9Q10.15 13 10 13Q9.85 13 9.75 12.9Q9.65 12.8 9.65 12.65V9.4Q9.65 9.075 9.863 8.862Q10.075 8.65 10.4 8.65H13.65Q13.8 8.65 13.9 8.75Q14 8.85 14 9Q14 9.15 13.9 9.25Q13.8 9.35 13.65 9.35H10.825L15.125 13.625Q15.25 13.75 15.25 13.875Q15.25 14 15.125 14.125Q15 14.25 14.875 14.25Q14.75 14.25 14.625 14.125ZM18.45 18.7Q17.5 18.7 16.85 18.05Q16.2 17.4 16.2 16.45Q16.2 15.5 16.85 14.85Q17.5 14.2 18.45 14.2Q19.4 14.2 20.05 14.85Q20.7 15.5 20.7 16.45Q20.7 17.4 20.05 18.05Q19.4 18.7 18.45 18.7ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V11.65H20V6.8Q20 6.5 19.75 6.25Q19.5 6 19.2 6H4.8Q4.5 6 4.25 6.25Q4 6.5 4 6.8V17.2Q4 17.5 4.25 17.75Q4.5 18 4.8 18H13.65V18.7Z"/>
    </Icon>
  );
});

IconMaterialPinEndRoundedW100Filled.displayName = 'AmauiIconMaterialPinEndRoundedW100Filled';

export default IconMaterialPinEndRoundedW100Filled;
