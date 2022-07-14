import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalLeftSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalLeftSharp'
      short_name='AlignHorizontalLeft'

      {...props}
    >
      <path d="M2 22V2H4V22ZM6 10V7H22V10ZM6 17V14H16V17Z"/>
    </Icon>
  );
});

export default IconMaterialAlignHorizontalLeftSharp;
