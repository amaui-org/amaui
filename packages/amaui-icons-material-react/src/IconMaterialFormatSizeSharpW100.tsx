import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatSizeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatSizeSharpW100'
      short_name='FormatSize'

      {...props}
    >
      <path d="M15.15 18.85V5.85H10.15V5.15H20.85V5.85H15.85V18.85ZM6.15 18.85V10.85H3.15V10.15H9.85V10.85H6.85V18.85Z"/>
    </Icon>
  )
});

export default IconMaterialFormatSizeSharpW100;
