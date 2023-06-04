import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFavoriteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FavoriteW100Filled'

      short_name='Favorite'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 19.25-.55-.5q-2.425-2.225-4.012-3.8-1.588-1.575-2.5-2.762Q4.025 11 3.663 10.05 3.3 9.1 3.3 8.15q0-1.775 1.213-2.988Q5.725 3.95 7.5 3.95q1.325 0 2.475.712 1.15.713 2.025 2.088.875-1.375 2.025-2.088 1.15-.712 2.475-.712 1.775 0 2.988 1.212Q20.7 6.375 20.7 8.15q0 .95-.362 1.9-.363.95-1.276 2.138-.912 1.187-2.487 2.762-1.575 1.575-4.025 3.8Z"/>
    </Icon>
  );
});

IconMaterialFavoriteW100Filled.displayName = 'AmauiIconMaterialFavoriteW100Filled';

export default IconMaterialFavoriteW100Filled;
