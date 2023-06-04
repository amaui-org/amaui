import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarHalfW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarHalfW100Filled'

      short_name='StarHalf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 8.9v5.9l2.4 1.85-.9-3.05 2.25-1.6h-2.8Zm-3.75 9.65 1.4-4.65-3.6-2.6h4.5L12 6.5l1.45 4.8h4.5l-3.6 2.6 1.4 4.65L12 15.7Z"/>
    </Icon>
  );
});

IconMaterialStarHalfW100Filled.displayName = 'AmauiIconMaterialStarHalfW100Filled';

export default IconMaterialStarHalfW100Filled;
