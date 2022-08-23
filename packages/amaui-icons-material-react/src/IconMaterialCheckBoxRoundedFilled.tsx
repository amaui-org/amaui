import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckBoxRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxRoundedFilled'
      short_name='CheckBox'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM10.6 15.775Q10.8 15.775 10.975 15.713Q11.15 15.65 11.3 15.5L16.975 9.825Q17.25 9.55 17.25 9.15Q17.25 8.75 16.95 8.45Q16.675 8.175 16.25 8.175Q15.825 8.175 15.55 8.45L10.6 13.4L8.425 11.225Q8.15 10.95 7.75 10.95Q7.35 10.95 7.05 11.25Q6.775 11.525 6.775 11.95Q6.775 12.375 7.05 12.65L9.9 15.5Q10.05 15.65 10.225 15.713Q10.4 15.775 10.6 15.775Z"/>
    </Icon>
  );
});

IconMaterialCheckBoxRoundedFilled.displayName = 'AmauiIconMaterialCheckBoxRoundedFilled';

export default IconMaterialCheckBoxRoundedFilled;
