import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToggleOnRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToggleOnRoundedFilled'
      short_name='ToggleOn'

      {...props}
    >
      <path d="M7 18Q4.5 18 2.75 16.25Q1 14.5 1 12Q1 9.5 2.75 7.75Q4.5 6 7 6H17Q19.5 6 21.25 7.75Q23 9.5 23 12Q23 14.5 21.25 16.25Q19.5 18 17 18ZM17 15Q18.25 15 19.125 14.125Q20 13.25 20 12Q20 10.75 19.125 9.875Q18.25 9 17 9Q15.75 9 14.875 9.875Q14 10.75 14 12Q14 13.25 14.875 14.125Q15.75 15 17 15Z"/>
    </Icon>
  );
});

export default IconMaterialToggleOnRoundedFilled;
