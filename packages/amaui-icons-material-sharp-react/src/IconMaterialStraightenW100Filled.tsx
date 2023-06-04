import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStraightenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenW100Filled'

      short_name='Straighten'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 16.7V7.3h4.35V11h.7V7.3h3.3V11h.7V7.3h3.3V11h.7V7.3h4.35v9.4Z"/>
    </Icon>
  );
});

IconMaterialStraightenW100Filled.displayName = 'AmauiIconMaterialStraightenW100Filled';

export default IconMaterialStraightenW100Filled;
