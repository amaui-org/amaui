import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutdoorGarden = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutdoorGarden'

      short_name='OutdoorGarden'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V6l4-3 3 2.25L12 3l3 2.25L18 3l4 3v15Zm2-2h4V7L6 5.5 4 7Zm6 0h4V7l-2-1.5L10 7Zm6 0h4V7l-2-1.5L16 7Z"/>
    </Icon>
  );
});

IconMaterialOutdoorGarden.displayName = 'AmauiIconMaterialOutdoorGarden';

export default IconMaterialOutdoorGarden;
