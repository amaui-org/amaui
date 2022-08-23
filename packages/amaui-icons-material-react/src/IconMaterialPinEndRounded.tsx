import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinEndRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinEndRounded'
      short_name='PinEnd'

      {...props}
    >
      <path d="M13.225 13.65 11 11.425V12.65Q11 13.075 10.713 13.362Q10.425 13.65 10 13.65Q9.575 13.65 9.288 13.362Q9 13.075 9 12.65V9Q9 8.575 9.288 8.287Q9.575 8 10 8H13.65Q14.075 8 14.363 8.287Q14.65 8.575 14.65 9Q14.65 9.425 14.363 9.712Q14.075 10 13.65 10H12.4L14.65 12.25Q14.925 12.525 14.925 12.938Q14.925 13.35 14.65 13.65Q14.35 13.925 13.938 13.938Q13.525 13.95 13.225 13.65ZM19 20Q17.75 20 16.875 19.125Q16 18.25 16 17Q16 15.75 16.875 14.875Q17.75 14 19 14Q20.25 14 21.125 14.875Q22 15.75 22 17Q22 18.25 21.125 19.125Q20.25 20 19 20ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V12H20V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18H14V20Z"/>
    </Icon>
  );
});

IconMaterialPinEndRounded.displayName = 'AmauiIconMaterialPinEndRounded';

export default IconMaterialPinEndRounded;
