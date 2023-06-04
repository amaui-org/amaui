import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrailLengthShortW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthShortW100Filled'

      short_name='TrailLengthShort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 16.35q-1.725 0-2.95-1.137-1.225-1.138-1.4-2.863h-6v-.7h6q.075-.875.563-1.788.487-.912 1.412-1.512H6.65v-.7H15q1.8 0 3.075 1.275Q19.35 10.2 19.35 12q0 1.8-1.275 3.075Q16.8 16.35 15 16.35Zm-7.35 0v-.7h1.7v.7Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthShortW100Filled.displayName = 'AmauiIconMaterialTrailLengthShortW100Filled';

export default IconMaterialTrailLengthShortW100Filled;
