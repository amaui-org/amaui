import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderTopRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderTopRoundedW100'
      short_name='BorderTop'

      {...props}
    >
      <path d="M7.5 20.5V19.5H8.5V20.5ZM7.5 12.5V11.5H8.5V12.5ZM11.5 12.5V11.5H12.5V12.5ZM11.5 20.5V19.5H12.5V20.5ZM3.5 16.5V15.5H4.5V16.5ZM3.5 20.5V19.5H4.5V20.5ZM3.5 12.5V11.5H4.5V12.5ZM3.5 8.5V7.5H4.5V8.5ZM11.5 16.5V15.5H12.5V16.5ZM19.5 8.5V7.5H20.5V8.5ZM19.5 12.5V11.5H20.5V12.5ZM4 4.5Q3.8 4.5 3.65 4.35Q3.5 4.2 3.5 4Q3.5 3.775 3.65 3.637Q3.8 3.5 4 3.5H20Q20.225 3.5 20.363 3.637Q20.5 3.775 20.5 4Q20.5 4.2 20.363 4.35Q20.225 4.5 20 4.5ZM19.5 16.5V15.5H20.5V16.5ZM15.5 20.5V19.5H16.5V20.5ZM11.5 8.5V7.5H12.5V8.5ZM19.5 20.5V19.5H20.5V20.5ZM15.5 12.5V11.5H16.5V12.5Z"/>
    </Icon>
  );
});

IconMaterialBorderTopRoundedW100.displayName = 'AmauiIconMaterialBorderTopRoundedW100';

export default IconMaterialBorderTopRoundedW100;
