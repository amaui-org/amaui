import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarHalfW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarHalfW100'

      short_name='StarHalf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 8.9v5.925l2.45 1.875-.925-3.075L15.775 12h-2.85Zm-3.75 9.65 1.4-4.65-3.575-2.6h4.475L12 6.5l1.45 4.8h4.475l-3.575 2.6 1.4 4.65L12 15.7Z"/>
    </Icon>
  );
});

IconMaterialStarHalfW100.displayName = 'AmauiIconMaterialStarHalfW100';

export default IconMaterialStarHalfW100;
