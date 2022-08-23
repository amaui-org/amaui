import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRecentActorsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentActorsSharp'
      short_name='RecentActors'

      {...props}
    >
      <path d="M1 19V5H15V19ZM8 17Q8 17 8 17Q8 17 8 17Q8 17 8 17Q8 17 8 17ZM3 15.35Q4.1 14.7 5.35 14.35Q6.6 14 8 14Q9.4 14 10.65 14.35Q11.9 14.7 13 15.35V7H3ZM17 19V5H19V19ZM21 19V5H23V19ZM8 13.25Q6.875 13.25 6.062 12.438Q5.25 11.625 5.25 10.5Q5.25 9.375 6.062 8.562Q6.875 7.75 8 7.75Q9.125 7.75 9.938 8.562Q10.75 9.375 10.75 10.5Q10.75 11.625 9.938 12.438Q9.125 13.25 8 13.25ZM8 10.5Q8 10.5 8 10.5Q8 10.5 8 10.5Q8 10.5 8 10.5Q8 10.5 8 10.5Q8 10.5 8 10.5Q8 10.5 8 10.5Q8 10.5 8 10.5Q8 10.5 8 10.5ZM4.15 17H11.85Q10.975 16.5 10 16.25Q9.025 16 8 16Q6.975 16 6 16.25Q5.025 16.5 4.15 17ZM8 11.4Q8.375 11.4 8.637 11.137Q8.9 10.875 8.9 10.5Q8.9 10.125 8.637 9.863Q8.375 9.6 8 9.6Q7.625 9.6 7.363 9.863Q7.1 10.125 7.1 10.5Q7.1 10.875 7.363 11.137Q7.625 11.4 8 11.4Z"/>
    </Icon>
  );
});

IconMaterialRecentActorsSharp.displayName = 'AmauiIconMaterialRecentActorsSharp';

export default IconMaterialRecentActorsSharp;
