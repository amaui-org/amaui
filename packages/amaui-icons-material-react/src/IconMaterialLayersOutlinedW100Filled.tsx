import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLayersOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersOutlinedW100Filled'
      short_name='Layers'

      {...props}
    >
      <path d="M12 18.05 5.1 12.7 5.65 12.25 12 17.15 18.35 12.25 18.9 12.7ZM12 14.6 5.1 9.25 12 3.9 18.9 9.25Z"/>
    </Icon>
  )
});

export default IconMaterialLayersOutlinedW100Filled;
