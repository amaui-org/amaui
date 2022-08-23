import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarksRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksRoundedW100'
      short_name='Bookmarks'

      {...props}
    >
      <path d="M18.7 18.05Q18.55 18.05 18.45 17.95Q18.35 17.85 18.35 17.7V5.1Q18.35 4.8 18.1 4.55Q17.85 4.3 17.55 4.3H8.3Q8.15 4.3 8.05 4.2Q7.95 4.1 7.95 3.95Q7.95 3.8 8.05 3.7Q8.15 3.6 8.3 3.6H17.55Q18.2 3.6 18.625 4.025Q19.05 4.45 19.05 5.1V17.7Q19.05 17.85 18.95 17.95Q18.85 18.05 18.7 18.05ZM5.65 19.95 10.65 17.8 15.65 19.95V7.8Q15.65 7.5 15.4 7.25Q15.15 7 14.85 7H6.45Q6.15 7 5.9 7.25Q5.65 7.5 5.65 7.8ZM6 20.6Q5.625 20.775 5.287 20.55Q4.95 20.325 4.95 19.9V7.8Q4.95 7.15 5.375 6.725Q5.8 6.3 6.45 6.3H14.85Q15.5 6.3 15.925 6.725Q16.35 7.15 16.35 7.8V19.9Q16.35 20.325 16.013 20.55Q15.675 20.775 15.3 20.6L10.65 18.6ZM5.65 7Q5.65 7 5.9 7Q6.15 7 6.45 7H14.85Q15.15 7 15.4 7Q15.65 7 15.65 7H10.65Z"/>
    </Icon>
  );
});

IconMaterialBookmarksRoundedW100.displayName = 'AmauiIconMaterialBookmarksRoundedW100';

export default IconMaterialBookmarksRoundedW100;
