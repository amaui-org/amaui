import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinInvokeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinInvokeRounded'
      short_name='PinInvoke'

      {...props}
    >
      <path d="M9.35 15.65Q9.075 15.35 9.075 14.938Q9.075 14.525 9.35 14.25L11.6 12H10.35Q9.925 12 9.637 11.712Q9.35 11.425 9.35 11Q9.35 10.575 9.637 10.287Q9.925 10 10.35 10H14Q14.425 10 14.713 10.287Q15 10.575 15 11V14.65Q15 15.075 14.713 15.363Q14.425 15.65 14 15.65Q13.575 15.65 13.288 15.363Q13 15.075 13 14.65V13.425L10.75 15.675Q10.6 15.825 10.425 15.9Q10.25 15.975 10.062 15.962Q9.875 15.95 9.688 15.875Q9.5 15.8 9.35 15.65ZM19 10Q17.75 10 16.875 9.125Q16 8.25 16 7Q16 5.75 16.875 4.875Q17.75 4 19 4Q20.25 4 21.125 4.875Q22 5.75 22 7Q22 8.25 21.125 9.125Q20.25 10 19 10ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H14V6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V12H22V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialPinInvokeRounded.displayName = 'AmauiIconMaterialPinInvokeRounded';

export default IconMaterialPinInvokeRounded;
