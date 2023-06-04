import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderClear = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderClear'

      short_name='BorderClear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 3h2v2H7zm0 16h2v2H7zM3 3h2v2H3zm16 0h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM3 7h2v2H3zm0 12h2v2H3zm16 0h2v2h-2zm0-4h2v2h-2zM3 15h2v2H3zm0-4h2v2H3zm4 0h2v2H7zm8 0h2v2h-2zm-4 8h2v2h-2zm4 0h2v2h-2zm0-16h2v2h-2zm-4 0h2v2h-2zm0 4h2v2h-2zm0 8h2v2h-2zm0-4h2v2h-2z"/>
    </Icon>
  );
});

IconMaterialBorderClear.displayName = 'AmauiIconMaterialBorderClear';

export default IconMaterialBorderClear;
