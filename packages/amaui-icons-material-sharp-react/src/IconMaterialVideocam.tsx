import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocam = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Videocam'

      short_name='Videocam'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h16v6.5l4-4v11l-4-4V20Zm2-2h12V6H4ZM4 6v12Z"/>
    </Icon>
  );
});

IconMaterialVideocam.displayName = 'AmauiIconMaterialVideocam';

export default IconMaterialVideocam;
