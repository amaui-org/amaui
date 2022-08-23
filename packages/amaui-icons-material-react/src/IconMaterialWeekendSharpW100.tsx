import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeekendSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendSharpW100'
      short_name='Weekend'

      {...props}
    >
      <path d="M2.3 18V9.6H4V6.4H20V9.6H21.7V18ZM5.7 13.95H18.3V9.6H19.3V7.1H4.7V9.6H5.7ZM3 17.3H21V10.3H19V14.65H5V10.3H3ZM12 14.65ZM12 13.95ZM12 14.65Z"/>
    </Icon>
  );
});

IconMaterialWeekendSharpW100.displayName = 'AmauiIconMaterialWeekendSharpW100';

export default IconMaterialWeekendSharpW100;
