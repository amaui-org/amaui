import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalTopSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalTopSharp'
      short_name='AlignVerticalTop'

      {...props}
    >
      <path d="M2 4V2H22V4ZM7 22V6H10V22ZM14 16V6H17V16Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalTopSharp.displayName = 'AmauiIconMaterialAlignVerticalTopSharp';

export default IconMaterialAlignVerticalTopSharp;
