import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWebAssetOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetOffSharp'
      short_name='WebAssetOff'

      {...props}
    >
      <path d="M2 20V4.85L0.65 3.5L2.075 2.075L21.875 21.875L20.45 23.3L17.15 20ZM4 18H15.15L5.15 8H4ZM10.85 8 6.85 4H22V19.15L20 17.15V8Z"/>
    </Icon>
  )
});

export default IconMaterialWebAssetOffSharp;
