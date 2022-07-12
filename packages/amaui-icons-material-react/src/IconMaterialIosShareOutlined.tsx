import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIosShareOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IosShareOutlined'
      short_name='IosShare'

      {...props}
    >
      <path d="M13 16H11V4.825L9.4 6.425L8 5L12 1L16 5L14.6 6.425L13 4.825ZM9 10H6Q6 10 6 10Q6 10 6 10V21Q6 21 6 21Q6 21 6 21H18Q18 21 18 21Q18 21 18 21V10Q18 10 18 10Q18 10 18 10H15V8H18Q18.825 8 19.413 8.587Q20 9.175 20 10V21Q20 21.825 19.413 22.413Q18.825 23 18 23H6Q5.175 23 4.588 22.413Q4 21.825 4 21V10Q4 9.175 4.588 8.587Q5.175 8 6 8H9Z"/>
    </Icon>
  )
});

export default IconMaterialIosShareOutlined;
