import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkRemoveRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRemoveRoundedW100Filled'
      short_name='BookmarkRemove'

      {...props}
    >
      <path d="M15.35 7Q15.2 7 15.1 6.9Q15 6.8 15 6.65Q15 6.5 15.1 6.4Q15.2 6.3 15.35 6.3H19.35Q19.5 6.3 19.6 6.4Q19.7 6.5 19.7 6.65Q19.7 6.8 19.6 6.9Q19.5 7 19.35 7ZM7.35 18.6Q6.975 18.775 6.638 18.55Q6.3 18.325 6.3 17.9V5.8Q6.3 5.15 6.725 4.725Q7.15 4.3 7.8 4.3H13.7Q13.35 4.85 13.175 5.425Q13 6 13 6.65Q13 8.375 14.163 9.613Q15.325 10.85 17 10.975Q17.2 11 17.35 11Q17.5 11 17.7 10.975V17.9Q17.7 18.325 17.363 18.55Q17.025 18.775 16.65 18.6L12 16.6Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemoveRoundedW100Filled.displayName = 'AmauiIconMaterialBookmarkRemoveRoundedW100Filled';

export default IconMaterialBookmarkRemoveRoundedW100Filled;
