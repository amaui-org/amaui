import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIndeterminateCheckBoxRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBoxRoundedW100'
      short_name='IndeterminateCheckBox'

      {...props}
    >
      <path d="M8 12.35H16Q16.15 12.35 16.25 12.25Q16.35 12.15 16.35 12Q16.35 11.85 16.25 11.75Q16.15 11.65 16 11.65H8Q7.85 11.65 7.75 11.75Q7.65 11.85 7.65 12Q7.65 12.15 7.75 12.25Q7.85 12.35 8 12.35ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM5.8 19H18.2Q18.5 19 18.75 18.75Q19 18.5 19 18.2V5.8Q19 5.5 18.75 5.25Q18.5 5 18.2 5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19ZM5 19Q5 19 5 18.75Q5 18.5 5 18.2V5.8Q5 5.5 5 5.25Q5 5 5 5Q5 5 5 5.25Q5 5.5 5 5.8V18.2Q5 18.5 5 18.75Q5 19 5 19Z"/>
    </Icon>
  );
});

IconMaterialIndeterminateCheckBoxRoundedW100.displayName = 'AmauiIconMaterialIndeterminateCheckBoxRoundedW100';

export default IconMaterialIndeterminateCheckBoxRoundedW100;
