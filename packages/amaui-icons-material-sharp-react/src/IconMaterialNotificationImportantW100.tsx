import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationImportantW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationImportantW100'

      short_name='NotificationImportant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 13.5h.7V8.75h-.7Zm.35 2.25q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm-7.35 2.9v-.7h2V10.3q0-1.875 1.25-3.413Q9.15 5.35 11.15 5V3.45h1.7V5q2 .35 3.25 1.887 1.25 1.538 1.25 3.413v7.65h2v.7ZM12 11.8Zm0 9.7q-.6 0-1.05-.425-.45-.425-.45-1.075h3q0 .65-.425 1.075-.425.425-1.075.425Zm-4.65-3.55h9.3V10.3q0-1.925-1.362-3.288Q13.925 5.65 12 5.65q-1.925 0-3.287 1.362Q7.35 8.375 7.35 10.3Z"/>
    </Icon>
  );
});

IconMaterialNotificationImportantW100.displayName = 'AmauiIconMaterialNotificationImportantW100';

export default IconMaterialNotificationImportantW100;
