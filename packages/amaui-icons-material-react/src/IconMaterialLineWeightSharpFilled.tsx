import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLineWeightSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineWeightSharpFilled'
      short_name='LineWeight'

      {...props}
    >
      <path d="M3 17V15H21V17ZM3 20V19H21V20ZM3 13V10H21V13ZM3 8V4H21V8Z"/>
    </Icon>
  );
});

export default IconMaterialLineWeightSharpFilled;
