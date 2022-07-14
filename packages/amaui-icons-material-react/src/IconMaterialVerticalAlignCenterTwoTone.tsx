import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalAlignCenterTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignCenterTwoTone'
      short_name='VerticalAlignCenter'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 1v4H8l4 4 4-4h-3V1zM4 11h16v2H4zm4 8h3v4h2v-4h3l-4-4z"/>
    </Icon>
  );
});

export default IconMaterialVerticalAlignCenterTwoTone;
