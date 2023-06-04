import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewStream = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStream'

      short_name='ViewStream'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M19,17H5v-4h14V17z M5,11V7h14v4H5z" opacity=".3"/><path d="M3,7v10c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V7c0-1.1-0.9-2-2-2H5C3.9,5,3,5.9,3,7z M19,17H5v-4h14V17z M5,11V7h14v4H5z"/>
    </Icon>
  );
});

IconMaterialViewStream.displayName = 'AmauiIconMaterialViewStream';

export default IconMaterialViewStream;
