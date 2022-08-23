import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomExtraRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomExtraRounded'
      short_name='AirlineSeatLegroomExtra'

      {...props}
    >
      <path d="M4 17Q3.175 17 2.588 16.413Q2 15.825 2 15V4Q2 3.575 2.288 3.287Q2.575 3 3 3Q3.425 3 3.713 3.287Q4 3.575 4 4V15Q4 15 4 15Q4 15 4 15H12Q12.425 15 12.713 15.287Q13 15.575 13 16Q13 16.425 12.713 16.712Q12.425 17 12 17ZM20.175 20.2Q19.45 20.55 18.675 20.263Q17.9 19.975 17.55 19.25L15 14H8.5Q7.25 14 6.375 13.125Q5.5 12.25 5.5 11V3H11.5V9H14.5Q15.075 9 15.55 9.312Q16.025 9.625 16.3 10.15L19.7 17.1L20.8 16.6Q21.375 16.325 21.962 16.512Q22.55 16.7 22.85 17.25Q23.15 17.825 22.938 18.425Q22.725 19.025 22.15 19.3Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomExtraRounded.displayName = 'AmauiIconMaterialAirlineSeatLegroomExtraRounded';

export default IconMaterialAirlineSeatLegroomExtraRounded;
