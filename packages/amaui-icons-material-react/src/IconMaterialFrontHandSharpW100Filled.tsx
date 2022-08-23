import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFrontHandSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontHandSharpW100Filled'
      short_name='FrontHand'

      {...props}
    >
      <path d="M12.7 22.1Q11.35 22.1 10.15 21.65Q8.95 21.2 8.05 20.4Q7.15 19.6 6.625 18.475Q6.1 17.35 6.1 16V5.45H8.2V11.65H8.9V2.7H11V11.65H11.7V1.8H13.75V11.65H14.45V4.1H16.5V13.35Q14.825 13.9 13.875 14.925Q12.925 15.95 12.6 17.6H13.3Q13.55 16.35 14.45 15.312Q15.35 14.275 17.2 13.85V10.3H19.3V16Q19.3 17.35 18.775 18.475Q18.25 19.6 17.35 20.4Q16.45 21.2 15.25 21.65Q14.05 22.1 12.7 22.1Z"/>
    </Icon>
  );
});

IconMaterialFrontHandSharpW100Filled.displayName = 'AmauiIconMaterialFrontHandSharpW100Filled';

export default IconMaterialFrontHandSharpW100Filled;
