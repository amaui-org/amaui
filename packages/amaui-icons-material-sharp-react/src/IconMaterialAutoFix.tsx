import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoFix = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoFix'

      short_name='AutoFix'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20 7-.95-2.05L17 4l2.05-.95L20 1l.95 2.05L23 4l-2.05.95ZM8.5 7l-.95-2.05L5.5 4l2.05-.95L8.5 1l.95 2.05L11.5 4l-2.05.95ZM20 18.5l-.95-2.05L17 15.5l2.05-.95.95-2.05.95 2.05 2.05.95-2.05.95ZM5.1 21.7l-2.8-2.8q-.3-.3-.3-.725t.3-.725L13.45 6.3q.3-.3.725-.3t.725.3l2.8 2.8q.3.3.3.725t-.3.725L6.55 21.7q-.3.3-.725.3t-.725-.3Zm.75-2.1L13 12.4 11.6 11l-7.2 7.15Z"/>
    </Icon>
  );
});

IconMaterialAutoFix.displayName = 'AmauiIconMaterialAutoFix';

export default IconMaterialAutoFix;
