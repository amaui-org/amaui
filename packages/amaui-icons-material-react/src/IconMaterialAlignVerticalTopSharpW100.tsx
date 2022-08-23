import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalTopSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalTopSharpW100'
      short_name='AlignVerticalTop'

      {...props}
    >
      <path d="M3.3 4.625V3.925H20.7V4.625ZM7.9 20.05V7.375H9.65V20.05ZM14.35 14.05V7.375H16.1V14.05Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalTopSharpW100.displayName = 'AmauiIconMaterialAlignVerticalTopSharpW100';

export default IconMaterialAlignVerticalTopSharpW100;
