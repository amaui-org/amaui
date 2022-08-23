import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoStableSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableSharpW100Filled'
      short_name='VideoStable'

      {...props}
    >
      <path d="M15.7 16.45 17.4 10 8.35 7.55 6.65 13.95ZM3.3 18.7V5.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialVideoStableSharpW100Filled.displayName = 'AmauiIconMaterialVideoStableSharpW100Filled';

export default IconMaterialVideoStableSharpW100Filled;
