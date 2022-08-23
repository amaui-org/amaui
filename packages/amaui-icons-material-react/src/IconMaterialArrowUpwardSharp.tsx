import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowUpwardSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardSharp'
      short_name='ArrowUpward'

      {...props}
    >
      <path d="M11 20V7.825L5.4 13.425L4 12L12 4L20 12L18.6 13.425L13 7.825V20Z"/>
    </Icon>
  );
});

IconMaterialArrowUpwardSharp.displayName = 'AmauiIconMaterialArrowUpwardSharp';

export default IconMaterialArrowUpwardSharp;
