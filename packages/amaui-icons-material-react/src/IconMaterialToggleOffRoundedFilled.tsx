import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToggleOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToggleOffRoundedFilled'
      short_name='ToggleOff'

      {...props}
    >
      <path d="M7 18Q4.5 18 2.75 16.25Q1 14.5 1 12Q1 9.5 2.75 7.75Q4.5 6 7 6H17Q19.5 6 21.25 7.75Q23 9.5 23 12Q23 14.5 21.25 16.25Q19.5 18 17 18ZM7 15Q8.25 15 9.125 14.125Q10 13.25 10 12Q10 10.75 9.125 9.875Q8.25 9 7 9Q5.75 9 4.875 9.875Q4 10.75 4 12Q4 13.25 4.875 14.125Q5.75 15 7 15Z"/>
    </Icon>
  );
});

IconMaterialToggleOffRoundedFilled.displayName = 'AmauiIconMaterialToggleOffRoundedFilled';

export default IconMaterialToggleOffRoundedFilled;
