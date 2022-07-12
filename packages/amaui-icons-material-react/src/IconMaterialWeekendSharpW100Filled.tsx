import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeekendSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendSharpW100Filled'
      short_name='Weekend'

      {...props}
    >
      <path d="M2.3 18V10.3H5V14.65H19V10.3H21.7V18ZM5.7 13.95V9.6H4V6.4H20V9.6H18.3V13.95Z"/>
    </Icon>
  )
});

export default IconMaterialWeekendSharpW100Filled;
