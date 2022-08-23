import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightnessAutoRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoRoundedW100Filled'
      short_name='BrightnessAuto'

      {...props}
    >
      <path d="M11.775 7.15 8.475 15.525Q8.4 15.7 8.512 15.85Q8.625 16 8.825 16Q8.95 16 9.025 15.938Q9.1 15.875 9.15 15.775L10.15 13.3H13.9L14.9 15.775Q14.95 15.9 15.05 15.95Q15.15 16 15.25 16Q15.45 16 15.562 15.85Q15.675 15.7 15.6 15.5L12.275 7.15Q12.25 7.075 12.175 7.037Q12.1 7 12.025 7Q11.95 7 11.875 7.037Q11.8 7.075 11.775 7.15ZM10.4 12.65 11.95 8.55H12.05L13.65 12.65ZM9.2 18.7H6.8Q6.175 18.7 5.738 18.262Q5.3 17.825 5.3 17.2V14.8L3.55 13.05Q3.125 12.625 3.125 12Q3.125 11.375 3.55 10.95L5.3 9.2V6.8Q5.3 6.175 5.738 5.738Q6.175 5.3 6.8 5.3H9.2L10.95 3.55Q11.375 3.125 12 3.125Q12.625 3.125 13.05 3.55L14.8 5.3H17.2Q17.825 5.3 18.262 5.738Q18.7 6.175 18.7 6.8V9.2L20.45 10.95Q20.875 11.375 20.875 12Q20.875 12.625 20.45 13.05L18.7 14.8V17.2Q18.7 17.825 18.262 18.262Q17.825 18.7 17.2 18.7H14.8L13.05 20.45Q12.625 20.875 12 20.875Q11.375 20.875 10.95 20.45Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAutoRoundedW100Filled.displayName = 'AmauiIconMaterialBrightnessAutoRoundedW100Filled';

export default IconMaterialBrightnessAutoRoundedW100Filled;
