import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRightW100'

      short_name='SwipeRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.4 6.6q.725-1.95 3.2-3.575Q8.075 1.4 11.85 1.4q2.575 0 4.85 1.05 2.275 1.05 4.05 2.85V2.4h.7v4.2h-4.2v-.7h3.075q-1.6-1.775-3.862-2.788Q14.2 2.1 11.85 2.1q-3.575 0-5.762 1.475Q3.9 5.05 3.175 6.6Zm7.85 15.1-4.5-4.45.75-.75 3.8.75V7.5q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.2l4.8 2.35-1.15 6.55Zm.3-.7h6.4l.95-5.425-4.15-2.075H12v-6q0-.225-.137-.363Q11.725 7 11.5 7q-.225 0-.363.137Q11 7.275 11 7.5v10.6l-4.25-.85Zm0 0h6.4Z"/>
    </Icon>
  );
});

IconMaterialSwipeRightW100.displayName = 'AmauiIconMaterialSwipeRightW100';

export default IconMaterialSwipeRightW100;
