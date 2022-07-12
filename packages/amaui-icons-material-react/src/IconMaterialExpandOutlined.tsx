import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandOutlined'
      short_name='Expand'

      {...props}
    >
      <path d="M4 22V20H20V22ZM4 4V2H20V4ZM12 19 8 15 9.4 13.6 11 15.15V8.85L9.4 10.4L8 9L12 5L16 9L14.6 10.4L13 8.85V15.15L14.6 13.6L16 15Z"/>
    </Icon>
  )
});

export default IconMaterialExpandOutlined;
