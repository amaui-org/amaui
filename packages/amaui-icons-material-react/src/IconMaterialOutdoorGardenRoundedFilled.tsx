import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutdoorGardenRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutdoorGardenRoundedFilled'
      short_name='OutdoorGarden'

      {...props}
    >
      <path d="M2 21V6l3-3 3 3v15Zm7 0V6l3-3 3 3v15Zm7 0V6l3-3 3 3v15Z"/>
    </Icon>
  );
});

export default IconMaterialOutdoorGardenRoundedFilled;
