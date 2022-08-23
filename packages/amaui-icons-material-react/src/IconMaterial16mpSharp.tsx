import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial16mpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='16mpSharp'
      short_name='16mp'

      {...props}
    >
      <path d="M8.5 11.5H10V5.5H7V7H8.5ZM13 11.5H15.5Q15.925 11.5 16.212 11.212Q16.5 10.925 16.5 10.5V9Q16.5 8.575 16.212 8.287Q15.925 8 15.5 8H13.5V7H16.5V5.5H13Q12.575 5.5 12.288 5.787Q12 6.075 12 6.5V10.5Q12 10.925 12.288 11.212Q12.575 11.5 13 11.5ZM13.5 10.5V9H15V10.5ZM3 21V3H21V21ZM5 19H19V5H5ZM6 18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V12.5H6ZM13.5 18.5H15V17H18V12.5H13.5ZM15 14H16.5V15.5H15ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterial16mpSharp.displayName = 'AmauiIconMaterial16mpSharp';

export default IconMaterial16mpSharp;
