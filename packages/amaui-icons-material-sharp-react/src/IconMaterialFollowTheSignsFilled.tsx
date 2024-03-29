import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFollowTheSignsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FollowTheSignsFilled'

      short_name='FollowTheSigns'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 5.5q-.825 0-1.412-.588Q7.5 4.325 7.5 3.5t.588-1.413Q8.675 1.5 9.5 1.5t1.413.587q.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588ZM3 23 5.75 8.9 4 9.65V13H2V8.3l5.25-2.15q.675-.275 1.375-.062.7.212 1.075.862l.95 1.6q.675 1.1 1.813 1.775Q13.6 11 15 11v2q-1.65 0-3.062-.7-1.413-.7-2.388-1.9l-.6 3L11 15.45V23H9v-6l-2.15-2-1.75 8Zm13.75 0V9H13V2h9v7h-3.75v14Zm1.275-15.025L20.5 5.5l-2.475-2.475L16.95 4.1l.65.65h-3.1v1.5h3.1l-.65.65Z"/>
    </Icon>
  );
});

IconMaterialFollowTheSignsFilled.displayName = 'AmauiIconMaterialFollowTheSignsFilled';

export default IconMaterialFollowTheSignsFilled;
