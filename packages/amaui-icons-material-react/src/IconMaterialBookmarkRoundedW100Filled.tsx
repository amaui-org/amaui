import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRoundedW100Filled'
      short_name='Bookmark'

      {...props}
    >
      <path d="M7.35 18.6Q6.975 18.775 6.638 18.55Q6.3 18.325 6.3 17.9V5.8Q6.3 5.15 6.725 4.725Q7.15 4.3 7.8 4.3H16.2Q16.85 4.3 17.275 4.725Q17.7 5.15 17.7 5.8V17.9Q17.7 18.325 17.363 18.55Q17.025 18.775 16.65 18.6L12 16.6Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRoundedW100Filled.displayName = 'AmauiIconMaterialBookmarkRoundedW100Filled';

export default IconMaterialBookmarkRoundedW100Filled;
