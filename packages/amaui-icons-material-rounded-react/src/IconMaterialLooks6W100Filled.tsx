import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks6W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks6W100Filled'

      short_name='Looks6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.35 11.65v-2.5q0-.35.225-.575.225-.225.575-.225h1.875q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.85q-.65 0-1.075.425Q9.65 8.5 9.65 9.15v5.7q0 .65.425 1.075.425.425 1.075.425h1.7q.65 0 1.075-.425.425-.425.425-1.075v-1.7q0-.65-.425-1.075-.425-.425-1.075-.425Zm0 .7h2.5q.35 0 .575.225.225.225.225.575v1.7q0 .35-.225.575-.225.225-.575.225h-1.7q-.35 0-.575-.225-.225-.225-.225-.575ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialLooks6W100Filled.displayName = 'AmauiIconMaterialLooks6W100Filled';

export default IconMaterialLooks6W100Filled;
