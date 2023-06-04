import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDelete = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Delete'

      short_name='Delete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21V6H4V4h5V3h6v1h5v2h-1v15Zm2-2h10V6H7Zm2-2h2V8H9Zm4 0h2V8h-2ZM7 6v13Z"/>
    </Icon>
  );
});

IconMaterialDelete.displayName = 'AmauiIconMaterialDelete';

export default IconMaterialDelete;
