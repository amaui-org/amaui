import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchVideoSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchVideoSharpW100'
      short_name='SwitchVideo'

      {...props}
    >
      <path d="M8.125 14.6 8.625 14.1 6.875 12.35H14.375L12.625 14.1L13.125 14.6L15.725 12L13.125 9.4L12.625 9.9L14.375 11.65H6.875L8.625 9.9L8.125 9.4L5.525 12ZM3.925 18.7V5.3H17.325V11.5L20.075 8.75V15.25L17.325 12.5V18.7ZM4.625 18H16.625V6H4.625ZM4.625 18V6V18Z"/>
    </Icon>
  );
});

export default IconMaterialSwitchVideoSharpW100;
