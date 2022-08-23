import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLayersSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersSharp'
      short_name='Layers'

      {...props}
    >
      <path d="M12 21.05 3 14.05 4.65 12.8 12 18.5 19.35 12.8 21 14.05ZM12 16 3 9 12 2 21 9ZM12 9ZM12 13.45 17.75 9 12 4.55 6.25 9Z"/>
    </Icon>
  );
});

IconMaterialLayersSharp.displayName = 'AmauiIconMaterialLayersSharp';

export default IconMaterialLayersSharp;
