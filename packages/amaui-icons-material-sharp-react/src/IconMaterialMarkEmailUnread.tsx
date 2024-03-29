import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkEmailUnread = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnread'

      short_name='MarkEmailUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h12.1q-.1.5-.1 1t.1 1H4l8 5 3.65-2.275q.35.325.763.562.412.238.862.413L12 13 4 8v10h16V9.9q.575-.125 1.075-.35.5-.225.925-.55v11ZM4 6v12V6Zm15 2q-1.25 0-2.125-.875T16 5q0-1.25.875-2.125T19 2q1.25 0 2.125.875T22 5q0 1.25-.875 2.125T19 8Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnread.displayName = 'AmauiIconMaterialMarkEmailUnread';

export default IconMaterialMarkEmailUnread;
