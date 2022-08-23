import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoStableSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableSharp'
      short_name='VideoStable'

      {...props}
    >
      <path d="M16.975 18 19.275 9.35 7.075 6 4.775 14.65ZM15.55 15.55 7.225 13.25 8.5 8.45 16.825 10.75ZM2 20V4H22V20ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialVideoStableSharp.displayName = 'AmauiIconMaterialVideoStableSharp';

export default IconMaterialVideoStableSharp;
