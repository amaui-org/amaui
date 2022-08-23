import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLayersSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersSharpW100'
      short_name='Layers'

      {...props}
    >
      <path d="M12 18.05 5.1 12.7 5.65 12.25 12 17.15 18.35 12.25 18.9 12.7ZM12 14.6 5.1 9.25 12 3.9 18.9 9.25ZM12 9.25ZM12 13.7 17.75 9.25 12 4.8 6.25 9.25Z"/>
    </Icon>
  );
});

IconMaterialLayersSharpW100.displayName = 'AmauiIconMaterialLayersSharpW100';

export default IconMaterialLayersSharpW100;
