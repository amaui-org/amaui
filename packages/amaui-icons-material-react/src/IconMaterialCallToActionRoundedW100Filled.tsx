import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallToActionRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallToActionRoundedW100Filled'
      short_name='CallToAction'

      {...props}
    >
      <path d="M7.4 16.35H16.6Q16.925 16.35 17.138 16.137Q17.35 15.925 17.35 15.6V15.4Q17.35 15.075 17.138 14.863Q16.925 14.65 16.6 14.65H7.4Q7.075 14.65 6.863 14.863Q6.65 15.075 6.65 15.4V15.6Q6.65 15.925 6.863 16.137Q7.075 16.35 7.4 16.35ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialCallToActionRoundedW100Filled.displayName = 'AmauiIconMaterialCallToActionRoundedW100Filled';

export default IconMaterialCallToActionRoundedW100Filled;
