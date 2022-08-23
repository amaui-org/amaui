import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckBoxRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxRoundedW100Filled'
      short_name='CheckBox'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM10.6 15Q10.75 15 10.875 14.95Q11 14.9 11.125 14.775L16.575 9.325Q16.675 9.225 16.675 9.1Q16.675 8.975 16.55 8.85Q16.425 8.725 16.3 8.725Q16.175 8.725 16.05 8.85L10.6 14.3L7.975 11.675Q7.875 11.575 7.75 11.575Q7.625 11.575 7.5 11.7Q7.375 11.825 7.375 11.95Q7.375 12.075 7.5 12.2L10.075 14.775Q10.2 14.9 10.325 14.95Q10.45 15 10.6 15Z"/>
    </Icon>
  );
});

IconMaterialCheckBoxRoundedW100Filled.displayName = 'AmauiIconMaterialCheckBoxRoundedW100Filled';

export default IconMaterialCheckBoxRoundedW100Filled;
