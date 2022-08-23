import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFavoriteSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FavoriteSharpW100'
      short_name='Favorite'

      {...props}
    >
      <path d="M12 19.25 11.4 18.75Q7.825 15.425 5.562 13Q3.3 10.575 3.3 8.15Q3.3 6.375 4.513 5.162Q5.725 3.95 7.5 3.95Q8.525 3.95 9.713 4.5Q10.9 5.05 12 6.75Q13.1 5.05 14.288 4.5Q15.475 3.95 16.5 3.95Q18.275 3.95 19.488 5.162Q20.7 6.375 20.7 8.15Q20.7 10.575 18.438 13Q16.175 15.425 12.6 18.75ZM12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475ZM12 18.3Q15.575 15.05 17.788 12.7Q20 10.35 20 8.15Q20 6.65 19 5.65Q18 4.65 16.5 4.65Q15.325 4.65 14.312 5.287Q13.3 5.925 12.35 7.5H11.65Q10.7 5.925 9.688 5.287Q8.675 4.65 7.5 4.65Q6 4.65 5 5.65Q4 6.65 4 8.15Q4 10.35 6.213 12.7Q8.425 15.05 12 18.3Z"/>
    </Icon>
  );
});

IconMaterialFavoriteSharpW100.displayName = 'AmauiIconMaterialFavoriteSharpW100';

export default IconMaterialFavoriteSharpW100;
