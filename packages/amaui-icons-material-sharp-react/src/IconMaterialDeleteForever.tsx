import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteForever = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteForever'

      short_name='DeleteForever'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.4 16.5 2.6-2.6 2.6 2.6 1.4-1.4-2.6-2.6L16 9.9l-1.4-1.4-2.6 2.6-2.6-2.6L8 9.9l2.6 2.6L8 15.1ZM5 21V6H4V4h5V3h6v1h5v2h-1v15Zm2-2h10V6H7ZM7 6v13Z"/>
    </Icon>
  );
});

IconMaterialDeleteForever.displayName = 'AmauiIconMaterialDeleteForever';

export default IconMaterialDeleteForever;
