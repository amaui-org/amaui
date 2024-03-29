import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkAddedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddedFilled'

      short_name='BookmarkAdded'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.825 8.575q-.2 0-.375-.063-.175-.062-.325-.212L15.7 6.875q-.3-.3-.3-.713 0-.412.3-.687.275-.3.7-.3.425 0 .7.275l.725.725 2.825-2.85q.3-.3.7-.3.4 0 .725.3.275.3.275.725t-.275.7l-3.55 3.55q-.15.15-.325.212-.175.063-.375.063ZM6.4 20.4q-.5.2-.95-.088-.45-.287-.45-.837V5q0-.825.588-1.413Q6.175 3 7 3h7q-.5.75-.75 1.438Q13 5.125 13 6q0 1.8 1.137 3.175Q15.275 10.55 17 10.9q.575.075 1 .075.425 0 1-.075v8.575q0 .55-.45.837-.45.288-.95.088L12 18Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddedFilled.displayName = 'AmauiIconMaterialBookmarkAddedFilled';

export default IconMaterialBookmarkAddedFilled;
