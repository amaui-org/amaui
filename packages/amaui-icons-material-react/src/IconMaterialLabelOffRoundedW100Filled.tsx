import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffRoundedW100Filled'
      short_name='LabelOff'

      {...props}
    >
      <path d="M5.825 17.7Q5.175 17.7 4.75 17.275Q4.325 16.85 4.325 16.2V7.8Q4.325 7.675 4.35 7.512Q4.375 7.35 4.425 7.2L2.675 5.45Q2.55 5.325 2.55 5.2Q2.55 5.075 2.675 4.95Q2.8 4.825 2.925 4.825Q3.05 4.825 3.175 4.95L18.575 20.35Q18.7 20.475 18.7 20.6Q18.7 20.725 18.575 20.85Q18.45 20.975 18.325 20.975Q18.2 20.975 18.075 20.85L14.825 17.6Q14.75 17.65 14.562 17.675Q14.375 17.7 14.225 17.7ZM16.775 15.7 7.325 6.3H14.225Q14.75 6.3 15.262 6.562Q15.775 6.825 16.075 7.25L18.8 11.125Q19.075 11.525 19.075 12Q19.075 12.475 18.8 12.875Z"/>
    </Icon>
  );
});

IconMaterialLabelOffRoundedW100Filled.displayName = 'AmauiIconMaterialLabelOffRoundedW100Filled';

export default IconMaterialLabelOffRoundedW100Filled;
