import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFavoriteRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FavoriteRoundedW100Filled'
      short_name='Favorite'

      {...props}
    >
      <path d="M11 18.35 10 17.45Q7.325 15.025 5.312 12.762Q3.3 10.5 3.3 8.15Q3.3 6.375 4.513 5.162Q5.725 3.95 7.5 3.95Q8.525 3.95 9.713 4.5Q10.9 5.05 12 6.75Q13.1 5.05 14.288 4.5Q15.475 3.95 16.5 3.95Q18.275 3.95 19.488 5.162Q20.7 6.375 20.7 8.15Q20.7 10.575 18.575 12.887Q16.45 15.2 13.975 17.45L13 18.325Q12.575 18.725 12 18.725Q11.425 18.725 11 18.35Z"/>
    </Icon>
  );
});

IconMaterialFavoriteRoundedW100Filled.displayName = 'AmauiIconMaterialFavoriteRoundedW100Filled';

export default IconMaterialFavoriteRoundedW100Filled;
