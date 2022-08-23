import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFrontHandSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontHandSharp'
      short_name='FrontHand'

      {...props}
    >
      <path d="M12.5 24Q8.95 24 6.475 21.525Q4 19.05 4 15.5V4.5H7V1.5H10V0H15V2H18V8H21V15.5Q21 19.05 18.525 21.525Q16.05 24 12.5 24ZM12.5 22Q13.85 22 15.038 21.488Q16.225 20.975 17.1 20.1Q17.975 19.225 18.488 18.038Q19 16.85 19 15.5V10H18V15L17.65 15.025Q16.525 15.15 15.763 16Q15 16.85 15 18H13Q13 16.45 13.825 15.225Q14.65 14 16 13.425V4H15V11H13V2H12V11H10V3.5H9V12H7V6.5H6V15.5Q6 16.85 6.513 18.038Q7.025 19.225 7.9 20.1Q8.775 20.975 9.963 21.488Q11.15 22 12.5 22Z"/>
    </Icon>
  );
});

IconMaterialFrontHandSharp.displayName = 'AmauiIconMaterialFrontHandSharp';

export default IconMaterialFrontHandSharp;
