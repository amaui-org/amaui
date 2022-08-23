import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFavoriteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FavoriteSharpFilled'
      short_name='Favorite'

      {...props}
    >
      <path d="M12 21 10.55 19.7Q6.625 16.2 4.312 13.612Q2 11.025 2 8.15Q2 5.8 3.575 4.225Q5.15 2.65 7.5 2.65Q8.825 2.65 10 3.212Q11.175 3.775 12 4.75Q12.825 3.775 14 3.212Q15.175 2.65 16.5 2.65Q18.85 2.65 20.425 4.225Q22 5.8 22 8.15Q22 11.025 19.688 13.612Q17.375 16.2 13.45 19.7Z"/>
    </Icon>
  );
});

IconMaterialFavoriteSharpFilled.displayName = 'AmauiIconMaterialFavoriteSharpFilled';

export default IconMaterialFavoriteSharpFilled;
