import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpacityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpacityW100Filled'

      short_name='Opacity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.7q-2.8 0-4.75-1.9-1.95-1.9-1.95-4.65 0-1.35.538-2.55.537-1.2 1.412-2.15L12 3.8l4.75 4.65q.875.95 1.413 2.15.537 1.2.537 2.55 0 2.75-1.95 4.65-1.95 1.9-4.75 1.9ZM6.075 14h11.85q.3-1.8-.35-3.1-.65-1.3-1.325-1.95L12 4.75l-4.25 4.2q-.675.65-1.312 1.95-.638 1.3-.363 3.1Z"/>
    </Icon>
  );
});

IconMaterialOpacityW100Filled.displayName = 'AmauiIconMaterialOpacityW100Filled';

export default IconMaterialOpacityW100Filled;
