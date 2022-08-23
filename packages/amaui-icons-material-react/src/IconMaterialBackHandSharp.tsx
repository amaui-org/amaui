import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackHandSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHandSharp'
      short_name='BackHand'

      {...props}
    >
      <path d="M13 24Q10.425 24 8.3 22.562Q6.175 21.125 5.225 18.725L1.925 10.35L6.225 8.6L7 10.4V2H10V0H15V1.5H18V4.5H21V16Q21 19.35 18.675 21.675Q16.35 24 13 24ZM13 22Q15.5 22 17.25 20.25Q19 18.5 19 16V6.5H18V12H16V3.5H15V12H13V2H12V12H10V4H9V15H7L5.475 11.1L4.5 11.45L7.1 18Q7.825 19.8 9.438 20.9Q11.05 22 13 22Z"/>
    </Icon>
  );
});

IconMaterialBackHandSharp.displayName = 'AmauiIconMaterialBackHandSharp';

export default IconMaterialBackHandSharp;
