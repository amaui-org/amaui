import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLayersW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersW100Filled'

      short_name='Layers'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.05 5.1 12.7l.55-.45 6.35 4.9 6.35-4.9.55.45Zm0-3.45L5.1 9.25 12 3.9l6.9 5.35Z"/>
    </Icon>
  );
});

IconMaterialLayersW100Filled.displayName = 'AmauiIconMaterialLayersW100Filled';

export default IconMaterialLayersW100Filled;
