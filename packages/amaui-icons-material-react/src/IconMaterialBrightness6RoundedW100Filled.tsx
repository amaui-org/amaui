import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness6RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness6RoundedW100Filled'
      short_name='Brightness6'

      {...props}
    >
      <path d="M9.225 18.7H6.825Q6.2 18.7 5.763 18.262Q5.325 17.825 5.325 17.2V14.8L3.575 13.05Q3.15 12.625 3.15 12Q3.15 11.375 3.575 10.95L5.325 9.2V6.8Q5.325 6.175 5.763 5.738Q6.2 5.3 6.825 5.3H9.225L10.975 3.55Q11.4 3.125 12.025 3.125Q12.65 3.125 13.075 3.55L14.825 5.3H17.225Q17.85 5.3 18.288 5.738Q18.725 6.175 18.725 6.8V9.2L20.475 10.95Q20.9 11.375 20.9 12Q20.9 12.625 20.475 13.05L18.725 14.8V17.2Q18.725 17.825 18.288 18.262Q17.85 18.7 17.225 18.7H14.825L13.075 20.45Q12.65 20.875 12.025 20.875Q11.4 20.875 10.975 20.45ZM12.025 16Q13.675 16 14.85 14.825Q16.025 13.65 16.025 12Q16.025 10.35 14.85 9.175Q13.675 8 12.025 8Z"/>
    </Icon>
  );
});

IconMaterialBrightness6RoundedW100Filled.displayName = 'AmauiIconMaterialBrightness6RoundedW100Filled';

export default IconMaterialBrightness6RoundedW100Filled;
