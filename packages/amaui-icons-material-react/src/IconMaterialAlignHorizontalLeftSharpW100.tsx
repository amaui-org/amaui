import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalLeftSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalLeftSharpW100'
      short_name='AlignHorizontalLeft'

      {...props}
    >
      <path d="M4.3 20.7V3.3H5V20.7ZM7.75 9.65V7.9H19.7V9.65ZM7.75 16.1V14.35H13.7V16.1Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalLeftSharpW100.displayName = 'AmauiIconMaterialAlignHorizontalLeftSharpW100';

export default IconMaterialAlignHorizontalLeftSharpW100;
