import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFrontHandSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontHandSharpFilled'
      short_name='FrontHand'

      {...props}
    >
      <path d="M12.775 24Q10.95 24 9.438 23.312Q7.925 22.625 6.825 21.488Q5.725 20.35 5.113 18.85Q4.5 17.35 4.5 15.75V4.5H7V12H8V1.5H10.5V11H11.5V0H14V11H15V2H17.5V14.025Q15.95 14.225 14.975 15.363Q14 16.5 14 18H15Q15 16.75 15.875 15.875Q16.75 15 18 15H18.5V8H21V15.75Q21 17.35 20.4 18.837Q19.8 20.325 18.712 21.475Q17.625 22.625 16.113 23.312Q14.6 24 12.775 24Z"/>
    </Icon>
  );
});

IconMaterialFrontHandSharpFilled.displayName = 'AmauiIconMaterialFrontHandSharpFilled';

export default IconMaterialFrontHandSharpFilled;
