import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkAdded = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAdded'

      short_name='BookmarkAdded'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.825 8.575q-.2 0-.375-.063-.175-.062-.325-.212L15.7 6.875q-.3-.3-.3-.713 0-.412.3-.687.275-.3.7-.3.425 0 .7.275l.725.725 2.825-2.85q.3-.3.7-.3.4 0 .725.3.275.3.275.725t-.275.7l-3.55 3.55q-.15.15-.325.212-.175.063-.375.063ZM6.4 20.4q-.5.2-.95-.088-.45-.287-.45-.837V5q0-.825.588-1.413Q6.175 3 7 3h6v2H7v12.95l5-2.15 5 2.15V11h2v8.475q0 .55-.45.837-.45.288-.95.088L12 18ZM7 5h6-1Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAdded.displayName = 'AmauiIconMaterialBookmarkAdded';

export default IconMaterialBookmarkAdded;
