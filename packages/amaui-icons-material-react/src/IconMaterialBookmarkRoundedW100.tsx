import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRoundedW100'
      short_name='Bookmark'

      {...props}
    >
      <path d="M7 17.95 12 15.8 17 17.95V5.8Q17 5.5 16.75 5.25Q16.5 5 16.2 5H7.8Q7.5 5 7.25 5.25Q7 5.5 7 5.8ZM7.35 18.6Q6.975 18.775 6.638 18.55Q6.3 18.325 6.3 17.9V5.8Q6.3 5.15 6.725 4.725Q7.15 4.3 7.8 4.3H16.2Q16.85 4.3 17.275 4.725Q17.7 5.15 17.7 5.8V17.9Q17.7 18.325 17.363 18.55Q17.025 18.775 16.65 18.6L12 16.6ZM7 5Q7 5 7.25 5Q7.5 5 7.8 5H16.2Q16.5 5 16.75 5Q17 5 17 5H12Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRoundedW100.displayName = 'AmauiIconMaterialBookmarkRoundedW100';

export default IconMaterialBookmarkRoundedW100;
