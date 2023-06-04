import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeftW100'

      short_name='SwipeLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.4 6.6V2.4h.7v2.975Q4.95 3.5 7.3 2.45 9.65 1.4 12 1.4q3.775 0 6.25 1.625t3.2 3.575h-.75q-.725-1.55-2.925-3.025Q15.575 2.1 12 2.1q-2.35 0-4.4.987-2.05.988-4.075 2.813H6.6v.7Zm7.85 15.1-4.5-4.45.75-.75 3.8.75V7.5q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.2l4.8 2.35-1.15 6.55Zm.3-.7h6.4l.95-5.425-4.15-2.075H12v-6q0-.225-.137-.363Q11.725 7 11.5 7q-.225 0-.363.137Q11 7.275 11 7.5v10.6l-4.25-.85Zm0 0h6.4Z"/>
    </Icon>
  );
});

IconMaterialSwipeLeftW100.displayName = 'AmauiIconMaterialSwipeLeftW100';

export default IconMaterialSwipeLeftW100;
