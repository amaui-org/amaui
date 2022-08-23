import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovingSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingSharpW100Filled'
      short_name='Moving'

      {...props}
    >
      <path d="M3.275 17.1 2.775 16.6 7.625 11.75Q8.325 11.075 9.288 11.062Q10.25 11.05 10.95 11.75L12.1 12.9Q12.6 13.4 13.275 13.387Q13.95 13.375 14.45 12.9L20.025 7.35H16.525V6.65H21.225V11.35H20.525V7.85L14.95 13.4Q14.25 14.075 13.275 14.087Q12.3 14.1 11.625 13.425L10.45 12.25Q9.95 11.75 9.288 11.762Q8.625 11.775 8.125 12.25Z"/>
    </Icon>
  );
});

IconMaterialMovingSharpW100Filled.displayName = 'AmauiIconMaterialMovingSharpW100Filled';

export default IconMaterialMovingSharpW100Filled;
