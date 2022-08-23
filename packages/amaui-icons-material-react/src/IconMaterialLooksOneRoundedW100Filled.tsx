import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksOneRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOneRoundedW100Filled'
      short_name='LooksOne'

      {...props}
    >
      <path d="M13 16.35Q13.15 16.35 13.25 16.25Q13.35 16.15 13.35 16V8Q13.35 7.85 13.25 7.75Q13.15 7.65 13 7.65H10.975Q10.85 7.65 10.75 7.75Q10.65 7.85 10.65 8Q10.65 8.15 10.75 8.25Q10.85 8.35 11 8.35H12.65V16.025Q12.65 16.15 12.75 16.25Q12.85 16.35 13 16.35ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialLooksOneRoundedW100Filled.displayName = 'AmauiIconMaterialLooksOneRoundedW100Filled';

export default IconMaterialLooksOneRoundedW100Filled;
