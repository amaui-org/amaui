import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatAlignLeftOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignLeftOutlined'
      short_name='FormatAlignLeft'

      {...props}
    >
      <path d="M3 17V15H15V17ZM3 9V7H15V9ZM3 13V11H21V13ZM3 21V19H21V21ZM3 5V3H21V5Z"/>
    </Icon>
  )
});

export default IconMaterialFormatAlignLeftOutlined;
