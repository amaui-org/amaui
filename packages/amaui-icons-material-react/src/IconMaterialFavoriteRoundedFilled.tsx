import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFavoriteRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FavoriteRoundedFilled'
      short_name='Favorite'

      {...props}
    >
      <path d="M10.65 19.8 8.925 18.225Q6.275 15.8 4.138 13.412Q2 11.025 2 8.15Q2 5.8 3.575 4.225Q5.15 2.65 7.5 2.65Q8.825 2.65 10 3.212Q11.175 3.775 12 4.75Q12.825 3.775 14 3.212Q15.175 2.65 16.5 2.65Q18.85 2.65 20.425 4.225Q22 5.8 22 8.15Q22 11.025 19.875 13.425Q17.75 15.825 15.05 18.25L13.35 19.8Q12.775 20.325 12 20.325Q11.225 20.325 10.65 19.8Z"/>
    </Icon>
  );
});

IconMaterialFavoriteRoundedFilled.displayName = 'AmauiIconMaterialFavoriteRoundedFilled';

export default IconMaterialFavoriteRoundedFilled;
