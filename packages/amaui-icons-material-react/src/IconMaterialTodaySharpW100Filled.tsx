import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTodaySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TodaySharpW100Filled'
      short_name='Today'

      {...props}
    >
      <path d="M9 15.35Q8.175 15.35 7.588 14.762Q7 14.175 7 13.35Q7 12.525 7.588 11.938Q8.175 11.35 9 11.35Q9.825 11.35 10.413 11.938Q11 12.525 11 13.35Q11 14.175 10.413 14.762Q9.825 15.35 9 15.35ZM4.3 20.7V5.3H7.8V3H8.6V5.3H15.5V3H16.2V5.3H19.7V20.7ZM5 20H19V10.8H5Z"/>
    </Icon>
  );
});

export default IconMaterialTodaySharpW100Filled;
