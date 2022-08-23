import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFrontHandSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontHandSharpW100'
      short_name='FrontHand'

      {...props}
    >
      <path d="M12.7 22.1Q9.8 22.1 8 20.3Q6.2 18.5 6.2 15.6V6.3H8.8V3.3H11.4V1.8H14V3.8H16.6V9.15H19.2V15.6Q19.2 18.5 17.4 20.3Q15.6 22.1 12.7 22.1ZM12.7 21.4Q14 21.4 15.062 20.975Q16.125 20.55 16.888 19.788Q17.65 19.025 18.075 17.962Q18.5 16.9 18.5 15.6V9.85H17.3V14.15L16.9 14.25Q15.575 14.625 14.788 15.488Q14 16.35 13.65 17.6H12.45Q12.775 15.95 13.675 14.912Q14.575 13.875 15.9 13.35V4.5H14.7V11.6H13.3V2.5H12.1V11.6H10.7V4H9.5V12.6H8.1V7H6.9V15.6Q6.9 16.9 7.325 17.962Q7.75 19.025 8.512 19.788Q9.275 20.55 10.338 20.975Q11.4 21.4 12.7 21.4Z"/>
    </Icon>
  );
});

IconMaterialFrontHandSharpW100.displayName = 'AmauiIconMaterialFrontHandSharpW100';

export default IconMaterialFrontHandSharpW100;
