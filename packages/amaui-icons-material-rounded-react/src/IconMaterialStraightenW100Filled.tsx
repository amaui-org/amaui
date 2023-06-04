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
      <path d="M4.8 16.7q-.65 0-1.075-.425Q3.3 15.85 3.3 15.2V8.8q0-.65.425-1.075Q4.15 7.3 4.8 7.3h2.85v3.35q0 .15.1.25T8 11q.15 0 .25-.1t.1-.25V7.3h3.3v3.35q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V7.3h3.3v3.35q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V7.3h2.85q.65 0 1.075.425.425.425.425 1.075v6.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialStraightenW100Filled.displayName = 'AmauiIconMaterialStraightenW100Filled';

export default IconMaterialStraightenW100Filled;
