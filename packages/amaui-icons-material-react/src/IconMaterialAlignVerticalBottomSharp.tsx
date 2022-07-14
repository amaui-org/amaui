import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalBottomSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalBottomSharp'
      short_name='AlignVerticalBottom'

      {...props}
    >
      <path d="M2 22V20H22V22ZM7 18V2H10V18ZM14 18V8H17V18Z"/>
    </Icon>
  );
});

export default IconMaterialAlignVerticalBottomSharp;
