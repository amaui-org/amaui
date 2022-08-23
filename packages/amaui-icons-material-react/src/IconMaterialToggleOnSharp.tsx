import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToggleOnSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToggleOnSharp'
      short_name='ToggleOn'

      {...props}
    >
      <path d="M7 18Q4.5 18 2.75 16.25Q1 14.5 1 12Q1 9.5 2.75 7.75Q4.5 6 7 6H17Q19.5 6 21.25 7.75Q23 9.5 23 12Q23 14.5 21.25 16.25Q19.5 18 17 18ZM17 16Q18.65 16 19.825 14.825Q21 13.65 21 12Q21 10.35 19.825 9.175Q18.65 8 17 8H7Q5.35 8 4.175 9.175Q3 10.35 3 12Q3 13.65 4.175 14.825Q5.35 16 7 16ZM17 15Q18.25 15 19.125 14.125Q20 13.25 20 12Q20 10.75 19.125 9.875Q18.25 9 17 9Q15.75 9 14.875 9.875Q14 10.75 14 12Q14 13.25 14.875 14.125Q15.75 15 17 15ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialToggleOnSharp.displayName = 'AmauiIconMaterialToggleOnSharp';

export default IconMaterialToggleOnSharp;
