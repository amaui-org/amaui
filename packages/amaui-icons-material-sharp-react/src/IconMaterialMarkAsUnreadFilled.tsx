import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkAsUnreadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadFilled'

      short_name='MarkAsUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17V6.25L10.5 2l8.35 4.175V7h-2.8L10.5 4.25 4 7.475V17Zm3 4V8h17v13Zm8.5-5.65L20 12v-2l-6.5 3.35L7 10v2Z"/>
    </Icon>
  );
});

IconMaterialMarkAsUnreadFilled.displayName = 'AmauiIconMaterialMarkAsUnreadFilled';

export default IconMaterialMarkAsUnreadFilled;
