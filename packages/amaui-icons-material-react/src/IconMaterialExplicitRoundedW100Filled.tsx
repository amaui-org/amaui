import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExplicitRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitRoundedW100Filled'
      short_name='Explicit'

      {...props}
    >
      <path d="M10.4 16.35H14Q14.15 16.35 14.25 16.25Q14.35 16.15 14.35 16Q14.35 15.85 14.25 15.75Q14.15 15.65 14 15.65H10.35V12.35H14Q14.15 12.35 14.25 12.25Q14.35 12.15 14.35 12Q14.35 11.85 14.25 11.75Q14.15 11.65 14 11.65H10.35V8.35H14Q14.15 8.35 14.25 8.25Q14.35 8.15 14.35 8Q14.35 7.85 14.25 7.75Q14.15 7.65 14 7.65H10.4Q10.075 7.65 9.863 7.862Q9.65 8.075 9.65 8.4V15.6Q9.65 15.925 9.863 16.137Q10.075 16.35 10.4 16.35ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialExplicitRoundedW100Filled.displayName = 'AmauiIconMaterialExplicitRoundedW100Filled';

export default IconMaterialExplicitRoundedW100Filled;
