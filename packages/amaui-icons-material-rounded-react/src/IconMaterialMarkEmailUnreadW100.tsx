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
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h9.9q-.025.175-.037.337-.013.163-.013.363H4v11.2q0 .35.225.575Q4.45 18 4.8 18h14.4q.35 0 .575-.225Q20 17.55 20 17.2v-6.975q.2-.05.363-.1.162-.05.337-.125v7.2q0 .65-.425 1.075-.425.425-1.075.425ZM4 6V18 6Zm15 2.35q-.975 0-1.662-.688Q16.65 6.975 16.65 6q0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688ZM12 11l3.55-2.35q.125.125.238.262.112.138.237.263l-3.625 2.4q-.2.125-.4.137-.2.013-.4-.112L4 6.825V6Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnreadW100.displayName = 'AmauiIconMaterialMarkEmailUnreadW100';

export default IconMaterialMarkEmailUnreadW100;
