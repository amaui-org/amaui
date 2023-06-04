import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkEmailUnreadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnreadW100'

      short_name='MarkEmailUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h11.4q-.025.175-.037.337-.013.163-.013.363H4.4l7.6 5 3.55-2.35q.125.125.238.262.112.138.237.263L12 11.85l-8-5.3V18h16v-7.775q.2-.05.363-.1.162-.05.337-.125v8.7ZM4 6v12V6Zm15 2.35q-.975 0-1.662-.688Q16.65 6.975 16.65 6q0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnreadW100.displayName = 'AmauiIconMaterialMarkEmailUnreadW100';

export default IconMaterialMarkEmailUnreadW100;
