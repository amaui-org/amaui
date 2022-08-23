import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLineWeightSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineWeightSharp'
      short_name='LineWeight'

      {...props}
    >
      <path d="M3 17V15H21V17ZM3 20V19H21V20ZM3 13V10H21V13ZM3 8V4H21V8Z"/>
    </Icon>
  );
});

IconMaterialLineWeightSharp.displayName = 'AmauiIconMaterialLineWeightSharp';

export default IconMaterialLineWeightSharp;
