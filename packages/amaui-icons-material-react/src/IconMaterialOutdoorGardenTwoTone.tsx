import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutdoorGardenTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutdoorGardenTwoTone'
      short_name='OutdoorGarden'

      {...props}
    >
      <path d="M1.3 21.7V5.225l3.1-3.1 3.125 3.1V21.7Zm7.6 0V5.225l3.1-3.1 3.125 3.1V21.7Zm7.6 0V5.225l3.1-3.1 3.125 3.1V21.7Z"/>
    </Icon>
  )
});

export default IconMaterialOutdoorGardenTwoTone;
