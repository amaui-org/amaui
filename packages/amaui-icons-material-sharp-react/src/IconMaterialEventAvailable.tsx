import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventAvailable = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventAvailable'

      short_name='EventAvailable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.95 18.35 7.4 14.8l1.45-1.45 2.1 2.1 4.2-4.2 1.45 1.45ZM3 22V4h3V2h2v2h8V2h2v2h3v18Zm2-2h14V10H5ZM5 8h14V6H5Zm0 0V6v2Z"/>
    </Icon>
  );
});

IconMaterialEventAvailable.displayName = 'AmauiIconMaterialEventAvailable';

export default IconMaterialEventAvailable;
