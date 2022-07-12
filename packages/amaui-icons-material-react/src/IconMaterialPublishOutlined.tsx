import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPublishOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishOutlined'
      short_name='Publish'

      {...props}
    >
      <path d="M11 20V11.85L8.4 14.45L7 13L12 8L17 13L15.6 14.45L13 11.85V20ZM4 9V6Q4 5.175 4.588 4.588Q5.175 4 6 4H18Q18.825 4 19.413 4.588Q20 5.175 20 6V9H18V6Q18 6 18 6Q18 6 18 6H6Q6 6 6 6Q6 6 6 6V9Z"/>
    </Icon>
  )
});

export default IconMaterialPublishOutlined;
