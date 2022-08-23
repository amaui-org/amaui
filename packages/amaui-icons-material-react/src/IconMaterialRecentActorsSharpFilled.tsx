import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRecentActorsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentActorsSharpFilled'
      short_name='RecentActors'

      {...props}
    >
      <path d="M1 19V5H15V19ZM17 19V5H19V19ZM21 19V5H23V19ZM3 15.35Q4.1 14.7 5.35 14.35Q6.6 14 8 14Q9.4 14 10.65 14.35Q11.9 14.7 13 15.35V7H3ZM8 13.25Q6.85 13.25 6.05 12.45Q5.25 11.65 5.25 10.5Q5.25 9.35 6.05 8.55Q6.85 7.75 8 7.75Q9.15 7.75 9.95 8.55Q10.75 9.35 10.75 10.5Q10.75 11.65 9.95 12.45Q9.15 13.25 8 13.25Z"/>
    </Icon>
  );
});

IconMaterialRecentActorsSharpFilled.displayName = 'AmauiIconMaterialRecentActorsSharpFilled';

export default IconMaterialRecentActorsSharpFilled;
