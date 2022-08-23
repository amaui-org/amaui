import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFavoriteSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FavoriteSharpW100Filled'
      short_name='Favorite'

      {...props}
    >
      <path d="M12 19.25 11.4 18.75Q7.825 15.425 5.562 13Q3.3 10.575 3.3 8.15Q3.3 6.375 4.513 5.162Q5.725 3.95 7.5 3.95Q8.525 3.95 9.713 4.5Q10.9 5.05 12 6.75Q13.1 5.05 14.288 4.5Q15.475 3.95 16.5 3.95Q18.275 3.95 19.488 5.162Q20.7 6.375 20.7 8.15Q20.7 10.575 18.438 13Q16.175 15.425 12.6 18.75Z"/>
    </Icon>
  );
});

IconMaterialFavoriteSharpW100Filled.displayName = 'AmauiIconMaterialFavoriteSharpW100Filled';

export default IconMaterialFavoriteSharpW100Filled;
