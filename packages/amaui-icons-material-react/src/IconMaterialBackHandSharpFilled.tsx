import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackHandSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHandSharpFilled'
      short_name='BackHand'

      {...props}
    >
      <path d="M13 24Q10.2 24 8.275 22.45Q6.35 20.9 5.475 18.725L2.2 10.475L5 9.35L7.25 15H8V2H10.5V12H11.5V0H14V12H15V1.5H17.5V12H18.5V4.5H21V16Q21 19.35 18.675 21.675Q16.35 24 13 24Z"/>
    </Icon>
  );
});

export default IconMaterialBackHandSharpFilled;
