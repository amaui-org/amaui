import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkAsUnread = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnread'

      short_name='MarkAsUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17V6.25L10.5 2l8.35 4.175V7h-2.8L10.5 4.25 4 7.475V17Zm3 4V8h17v13Zm8.5-5.65L7 12v7h13v-7Zm0-2L20 10H7ZM7 19v-9 9Z"/>
    </Icon>
  );
});

IconMaterialMarkAsUnread.displayName = 'AmauiIconMaterialMarkAsUnread';

export default IconMaterialMarkAsUnread;
