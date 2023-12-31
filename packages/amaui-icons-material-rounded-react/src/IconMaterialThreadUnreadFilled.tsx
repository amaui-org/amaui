import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThreadUnreadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThreadUnreadFilled'

      short_name='ThreadUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-680q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM554-120q-54 0-91-37t-37-89q0-76 61.5-137.5T641-460q-3-36-18-54.5T582-533q-30 0-65 25t-83 82q-78 93-114.5 121T241-277q-51 0-86-38t-35-92q0-54 23.5-110.5T223-653q19-26 28-44t9-29q0-7-2.5-10.5T250-740q-5 0-12 3t-15 11q-15 14-34.5 15T155-724q-15-16-15.5-37.5T155-797q24-21 48-32t47-11q46 0 78 32t32 80q0 29-15 64t-50 84q-38 54-56.5 95T220-413q0 17 5.5 26.5T241-377q10 0 17.5-5.5T286-409q13-14 31-34.5t44-50.5q63-75 114-107t107-32q67 0 110 45t49 123h49q21 0 35.5 14.5T840-415q0 21-14.5 35.5T790-365h-49q-8 112-58.5 178.5T554-120Zm2-100q32 0 54-36.5T640-358q-46 11-80 43.5T526-250q0 14 8 22t22 8Z"/>
    </Icon>
  );
});

IconMaterialThreadUnreadFilled.displayName = 'AmauiIconMaterialThreadUnreadFilled';

export default IconMaterialThreadUnreadFilled;
