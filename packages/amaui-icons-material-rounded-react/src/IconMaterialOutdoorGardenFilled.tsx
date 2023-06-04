import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutdoorGardenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutdoorGardenFilled'

      short_name='OutdoorGarden'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V6l3-3 3 3v15Zm7 0V6l3-3 3 3v15Zm7 0V6l3-3 3 3v15Z"/>
    </Icon>
  );
});

IconMaterialOutdoorGardenFilled.displayName = 'AmauiIconMaterialOutdoorGardenFilled';

export default IconMaterialOutdoorGardenFilled;
