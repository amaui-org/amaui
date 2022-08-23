import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRepeatOneOnSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOneOnSharpW100'
      short_name='RepeatOneOn'

      {...props}
    >
      <path d="M11.9 14.6H12.6V9.4H10.8V10.1H11.9ZM3.8 21.7Q3.15 21.7 2.725 21.275Q2.3 20.85 2.3 20.2V3.8Q2.3 3.15 2.725 2.725Q3.15 2.3 3.8 2.3H20.2Q20.85 2.3 21.275 2.725Q21.7 3.15 21.7 3.8V20.2Q21.7 20.85 21.275 21.275Q20.85 21.7 20.2 21.7ZM7.25 20.85 7.75 20.35 5.5 18.1H18.1V13.4H17.4V17.4H5.5L7.75 15.15L7.25 14.65L4.15 17.75ZM5.9 10.6H6.6V6.6H18.5L16.25 8.85L16.75 9.35L19.85 6.25L16.75 3.15L16.25 3.65L18.5 5.9H5.9Z"/>
    </Icon>
  );
});

IconMaterialRepeatOneOnSharpW100.displayName = 'AmauiIconMaterialRepeatOneOnSharpW100';

export default IconMaterialRepeatOneOnSharpW100;
