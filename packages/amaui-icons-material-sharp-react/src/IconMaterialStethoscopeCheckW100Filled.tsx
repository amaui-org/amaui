import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStethoscopeCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StethoscopeCheckW100Filled'

      short_name='StethoscopeCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.125 20.075 13.5 17.45l.5-.475 2.125 2.125 4.25-4.25.475.5ZM13.2 20.7q-2.175 0-3.7-1.512-1.525-1.513-1.525-3.688V15q-1.825-.125-3.087-1.475-1.263-1.35-1.263-3.225V4.95h3v-1h.7v2.7h-.7v-1h-2.3v4.65q0 1.65 1.175 2.825Q6.675 14.3 8.325 14.3q1.65 0 2.825-1.175 1.175-1.175 1.175-2.825V5.65h-2.3v1h-.7v-2.7h.7v1h3v5.35q0 1.875-1.263 3.225Q10.5 14.875 8.675 15v.5q0 1.875 1.325 3.188Q11.325 20 13.2 20Z"/>
    </Icon>
  );
});

IconMaterialStethoscopeCheckW100Filled.displayName = 'AmauiIconMaterialStethoscopeCheckW100Filled';

export default IconMaterialStethoscopeCheckW100Filled;
