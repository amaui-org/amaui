import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoStableSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableSharpFilled'
      short_name='VideoStable'

      {...props}
    >
      <path d="M16.975 18 19.275 9.35 7.075 6 4.775 14.65ZM2 20V4H22V20Z"/>
    </Icon>
  );
});

IconMaterialVideoStableSharpFilled.displayName = 'AmauiIconMaterialVideoStableSharpFilled';

export default IconMaterialVideoStableSharpFilled;
