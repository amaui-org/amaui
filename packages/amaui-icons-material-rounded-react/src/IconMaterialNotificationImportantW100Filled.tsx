import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationImportantW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationImportantW100Filled'

      short_name='NotificationImportant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.5q.15 0 .25-.1t.1-.25V9.1q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v4.05q0 .15.1.25t.25.1Zm0 2.25q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm-7 2.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V10.3q0-1.875 1.25-3.413Q9.15 5.35 11.15 5v-.7q0-.375.237-.613.238-.237.613-.237t.613.237q.237.238.237.613V5q2 .35 3.25 1.887 1.25 1.538 1.25 3.413v7.65H19q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7 2.85q-.6 0-1.05-.425-.45-.425-.45-1.075h3q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialNotificationImportantW100Filled.displayName = 'AmauiIconMaterialNotificationImportantW100Filled';

export default IconMaterialNotificationImportantW100Filled;
