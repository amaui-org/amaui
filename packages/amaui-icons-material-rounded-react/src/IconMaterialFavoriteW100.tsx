import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFavoriteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FavoriteW100'

      short_name='Favorite'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11 18.35-1-.9q-2.675-2.425-4.688-4.688Q3.3 10.5 3.3 8.15q0-1.775 1.213-2.988Q5.725 3.95 7.5 3.95q1.025 0 2.213.55Q10.9 5.05 12 6.75q1.1-1.7 2.288-2.25 1.187-.55 2.212-.55 1.775 0 2.988 1.212Q20.7 6.375 20.7 8.15q0 2.425-2.125 4.737-2.125 2.313-4.6 4.563l-.975.875q-.425.375-1 .387-.575.013-1-.362Zm.65-10.85q-.95-1.575-1.962-2.213Q8.675 4.65 7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 1.05.537 2.125.538 1.075 1.525 2.25Q7.05 13.7 8.425 15t3.05 2.825q.225.2.525.2.3 0 .525-.2Q14.2 16.3 15.575 15q1.375-1.3 2.363-2.475.987-1.175 1.524-2.25Q20 9.2 20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.188.637Q13.3 5.925 12.35 7.5q-.05.1-.15.15-.1.05-.2.05t-.2-.05q-.1-.05-.15-.15Zm.35 3.875Z"/>
    </Icon>
  );
});

IconMaterialFavoriteW100.displayName = 'AmauiIconMaterialFavoriteW100';

export default IconMaterialFavoriteW100;
