import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBalanceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalanceW100'

      short_name='Balance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.85v-.7h8.35V7.825q-.725-.1-1.287-.625-.563-.525-.688-1.35H6.15L9 13.125q-.075.925-.9 1.575-.825.65-1.95.65T4.2 14.7q-.825-.65-.9-1.575L6.15 5.85H4.3v-.7h5.375q.125-.825.763-1.413.637-.587 1.562-.587t1.562.587q.638.588.763 1.413H19.7v.7h-1.85l2.85 7.275q-.075.925-.9 1.575-.825.65-1.95.65t-1.95-.65q-.825-.65-.9-1.575l2.85-7.275h-3.525q-.125.825-.687 1.35-.563.525-1.288.625V19.15h8.35v.7ZM15.8 13h4.1l-2.05-5.225ZM4.1 13h4.1L6.15 7.775ZM12 7.15q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.163Q12.675 3.85 12 3.85t-1.162.487q-.488.488-.488 1.163t.488 1.162q.487.488 1.162.488Z"/>
    </Icon>
  );
});

IconMaterialBalanceW100.displayName = 'AmauiIconMaterialBalanceW100';

export default IconMaterialBalanceW100;
