import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAspectRatioRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatioRoundedW100Filled'
      short_name='AspectRatio'

      {...props}
    >
      <path d="M6 11.35Q6.15 11.35 6.25 11.25Q6.35 11.15 6.35 11V8.35H9.025Q9.15 8.35 9.25 8.25Q9.35 8.15 9.35 8Q9.35 7.85 9.25 7.75Q9.15 7.65 9 7.65H6.4Q6.075 7.65 5.863 7.862Q5.65 8.075 5.65 8.4V11.025Q5.65 11.15 5.75 11.25Q5.85 11.35 6 11.35ZM15 16.35H17.6Q17.925 16.35 18.138 16.137Q18.35 15.925 18.35 15.6V12.975Q18.35 12.85 18.25 12.75Q18.15 12.65 18 12.65Q17.85 12.65 17.75 12.75Q17.65 12.85 17.65 13V15.65H14.975Q14.85 15.65 14.75 15.75Q14.65 15.85 14.65 16Q14.65 16.15 14.75 16.25Q14.85 16.35 15 16.35ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialAspectRatioRoundedW100Filled.displayName = 'AmauiIconMaterialAspectRatioRoundedW100Filled';

export default IconMaterialAspectRatioRoundedW100Filled;
