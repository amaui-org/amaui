import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVapingRoomsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VapingRoomsSharp'
      short_name='VapingRooms'

      {...props}
    >
      <path d="M7 19Q6.025 18.75 5.013 18.625Q4 18.5 3 18.5H2V16.5H3Q4 16.5 5.013 16.375Q6.025 16.25 7 16ZM8 19V16H22V19ZM10.5 18Q10.7 18 10.85 17.85Q11 17.7 11 17.5Q11 17.3 10.85 17.15Q10.7 17 10.5 17Q10.3 17 10.15 17.15Q10 17.3 10 17.5Q10 17.7 10.15 17.85Q10.3 18 10.5 18ZM18 15V13.7Q18 12.725 17.425 12.212Q16.85 11.7 16.05 11.7H14.5Q13.1 11.7 12.125 10.725Q11.15 9.75 11.15 8.35Q11.15 6.95 12.125 5.975Q13.1 5 14.5 5V6.5Q13.75 6.5 13.2 7.025Q12.65 7.55 12.65 8.35Q12.65 9.15 13.2 9.675Q13.75 10.2 14.5 10.2H16.05Q17.45 10.2 18.475 11.1Q19.5 12 19.5 13.35V15ZM20.5 15V12.75Q20.5 11.1 19.35 9.9Q18.2 8.7 16.5 8.7V7.2Q17.25 7.2 17.8 6.65Q18.35 6.1 18.35 5.35Q18.35 4.6 17.8 4.05Q17.25 3.5 16.5 3.5V2Q17.9 2 18.875 2.975Q19.85 3.95 19.85 5.35Q19.85 6.075 19.575 6.662Q19.3 7.25 18.85 7.75Q20.25 8.4 21.125 9.75Q22 11.1 22 12.75V15Z"/>
    </Icon>
  );
});

IconMaterialVapingRoomsSharp.displayName = 'AmauiIconMaterialVapingRoomsSharp';

export default IconMaterialVapingRoomsSharp;
