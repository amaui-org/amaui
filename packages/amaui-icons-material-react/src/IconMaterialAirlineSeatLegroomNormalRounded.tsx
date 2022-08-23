import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomNormalRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomNormalRounded'
      short_name='AirlineSeatLegroomNormal'

      {...props}
    >
      <path d="M18 21Q17.175 21 16.587 20.413Q16 19.825 16 19V14H8Q7.175 14 6.588 13.412Q6 12.825 6 12V3H12V9H17Q17.825 9 18.413 9.587Q19 10.175 19 11V18H20.5Q21.15 18 21.575 18.425Q22 18.85 22 19.5Q22 20.15 21.575 20.575Q21.15 21 20.5 21ZM5 17Q4.175 17 3.587 16.413Q3 15.825 3 15V4Q3 3.575 3.288 3.287Q3.575 3 4 3Q4.425 3 4.713 3.287Q5 3.575 5 4V15Q5 15 5 15Q5 15 5 15H13Q13.425 15 13.713 15.287Q14 15.575 14 16Q14 16.425 13.713 16.712Q13.425 17 13 17Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomNormalRounded.displayName = 'AmauiIconMaterialAirlineSeatLegroomNormalRounded';

export default IconMaterialAirlineSeatLegroomNormalRounded;
