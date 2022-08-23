import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderInnerRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderInnerRoundedW100'
      short_name='BorderInner'

      {...props}
    >
      <path d="M3.5 20.5V19.5H4.5V20.5ZM12 20.5Q11.8 20.5 11.65 20.35Q11.5 20.2 11.5 20V12.5H4Q3.8 12.5 3.65 12.35Q3.5 12.2 3.5 12Q3.5 11.775 3.65 11.637Q3.8 11.5 4 11.5H11.5V4Q11.5 3.775 11.65 3.637Q11.8 3.5 12 3.5Q12.225 3.5 12.363 3.637Q12.5 3.775 12.5 4V11.5H20Q20.225 11.5 20.363 11.637Q20.5 11.775 20.5 12Q20.5 12.2 20.363 12.35Q20.225 12.5 20 12.5H12.5V20Q12.5 20.2 12.363 20.35Q12.225 20.5 12 20.5ZM3.5 16.5V15.5H4.5V16.5ZM3.5 8.5V7.5H4.5V8.5ZM3.5 4.5V3.5H4.5V4.5ZM7.5 20.5V19.5H8.5V20.5ZM7.5 4.5V3.5H8.5V4.5ZM15.5 20.5V19.5H16.5V20.5ZM15.5 4.5V3.5H16.5V4.5ZM19.5 20.5V19.5H20.5V20.5ZM19.5 16.5V15.5H20.5V16.5ZM19.5 8.5V7.5H20.5V8.5ZM19.5 4.5V3.5H20.5V4.5Z"/>
    </Icon>
  );
});

IconMaterialBorderInnerRoundedW100.displayName = 'AmauiIconMaterialBorderInnerRoundedW100';

export default IconMaterialBorderInnerRoundedW100;
