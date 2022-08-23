import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutdoorGardenSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutdoorGardenSharpFilled'
      short_name='OutdoorGarden'

      {...props}
    >
      <path d="M2 21V6l3-3 3 3v15Zm7 0V6l3-3 3 3v15Zm7 0V6l3-3 3 3v15Z"/>
    </Icon>
  );
});

IconMaterialOutdoorGardenSharpFilled.displayName = 'AmauiIconMaterialOutdoorGardenSharpFilled';

export default IconMaterialOutdoorGardenSharpFilled;
