import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookOnlineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookOnlineW100Filled'

      short_name='BookOnline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.6 15.2q-.35 0-.575-.225Q8.8 14.75 8.8 14.4v-1.6q.35 0 .575-.225Q9.6 12.35 9.6 12t-.225-.575Q9.15 11.2 8.8 11.2V9.6q0-.35.225-.575Q9.25 8.8 9.6 8.8h4.8q.35 0 .575.225.225.225.225.575v1.6q-.35 0-.575.225-.225.225-.225.575t.225.575q.225.225.575.225v1.6q0 .35-.225.575-.225.225-.575.225Zm2.4-4.4q.175 0 .288-.112.112-.113.112-.288t-.112-.287Q12.175 10 12 10t-.287.113q-.113.112-.113.287t.113.288q.112.112.287.112Zm0 1.6q.175 0 .288-.113.112-.112.112-.287t-.112-.288Q12.175 11.6 12 11.6t-.287.112q-.113.113-.113.288t.113.287q.112.113.287.113Zm0 1.6q.175 0 .288-.113.112-.112.112-.287t-.112-.288Q12.175 13.2 12 13.2t-.287.112q-.113.113-.113.288t.113.287Q11.825 14 12 14Zm-5.7 7.7V2.3h11.4v19.4Zm.7-3.05h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialBookOnlineW100Filled.displayName = 'AmauiIconMaterialBookOnlineW100Filled';

export default IconMaterialBookOnlineW100Filled;
