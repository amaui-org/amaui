import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalLeftTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalLeftTwoTone'
      short_name='AlignHorizontalLeft'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M4,22H2V2h2V22z M22,7H6v3h16V7z M16,14H6v3h10V14z"/>
    </Icon>
  );
});

export default IconMaterialAlignHorizontalLeftTwoTone;
