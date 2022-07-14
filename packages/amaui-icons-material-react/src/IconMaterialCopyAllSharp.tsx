import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCopyAllSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyAllSharp'
      short_name='CopyAll'

      {...props}
    >
      <path d="M7 18V2H20V18ZM9 16H18V4H9ZM3 15H5V13H3ZM3 11.5H5V9.5H3ZM10 22H12V20H10ZM3 18.5H5V16.5H3ZM3 22H5V20H3ZM6.5 22H8.5V20H6.5ZM13.5 22H15.5V20H13.5ZM3 8H5V6H3Z"/>
    </Icon>
  );
});

export default IconMaterialCopyAllSharp;
