import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLayersSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersSharpW700Filled'
      short_name='Layers'

      {...props}
    >
      <path d="M11.975 23.3 1.6 15.2 4.175 13.225 11.975 19.3 19.825 13.225 22.4 15.2ZM11.975 16.8 1.6 8.725 11.975 0.65 22.35 8.725Z"/>
    </Icon>
  )
});

export default IconMaterialLayersSharpW700Filled;
