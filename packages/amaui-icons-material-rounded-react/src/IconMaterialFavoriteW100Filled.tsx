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
      <path d="m11 18.35-1-.9q-2.675-2.425-4.688-4.688Q3.3 10.5 3.3 8.15q0-1.775 1.213-2.988Q5.725 3.95 7.5 3.95q1.025 0 2.213.55Q10.9 5.05 12 6.75q1.1-1.7 2.288-2.25 1.187-.55 2.212-.55 1.775 0 2.988 1.212Q20.7 6.375 20.7 8.15q0 2.425-2.125 4.737-2.125 2.313-4.6 4.563l-.975.875q-.425.4-1 .4t-1-.375Z"/>
    </Icon>
  );
});

IconMaterialFavoriteW100Filled.displayName = 'AmauiIconMaterialFavoriteW100Filled';

export default IconMaterialFavoriteW100Filled;
