import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeDownAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeDownAlt'

      short_name='SwipeDownAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.575q-.2 0-.375-.063-.175-.062-.325-.212l-2.6-2.6q-.275-.275-.275-.687 0-.413.275-.713.3-.3.713-.3.412 0 .712.3l.875.875V13.9q-1.725-.35-2.863-1.712Q7 10.825 7 9q0-2.075 1.463-3.537Q9.925 4 12 4t3.538 1.463Q17 6.925 17 9q0 1.825-1.137 3.188Q14.725 13.55 13 13.9v4.275l.9-.9q.275-.275.688-.275.412 0 .712.3.275.275.275.7 0 .425-.275.7l-2.6 2.6q-.15.15-.325.212-.175.063-.375.063ZM12 12q1.25 0 2.125-.875T15 9q0-1.25-.875-2.125T12 6q-1.25 0-2.125.875T9 9q0 1.25.875 2.125T12 12Zm0-3Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownAlt.displayName = 'AmauiIconMaterialSwipeDownAlt';

export default IconMaterialSwipeDownAlt;
