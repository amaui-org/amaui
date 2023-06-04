import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLayersW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersW100'

      short_name='Layers'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.05 5.1 12.7l.55-.45 6.35 4.9 6.35-4.9.55.45Zm0-3.45L5.1 9.25 12 3.9l6.9 5.35Zm0-5.35Zm0 4.45 5.75-4.45L12 4.8 6.25 9.25Z"/>
    </Icon>
  );
});

IconMaterialLayersW100.displayName = 'AmauiIconMaterialLayersW100';

export default IconMaterialLayersW100;
