import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLineWeightTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineWeightTwoTone'
      short_name='LineWeight'

      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"/>
    </Icon>
  );
});

IconMaterialLineWeightTwoTone.displayName = 'AmauiIconMaterialLineWeightTwoTone';

export default IconMaterialLineWeightTwoTone;
