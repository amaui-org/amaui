import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial60fpsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsW100Filled'

      short_name='60fps'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 17.85q-.65 0-1.075-.425Q3.15 17 3.15 16.35v-8.7q0-.65.425-1.075Q4 6.15 4.65 6.15H8.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H4.65q-.35 0-.575.225-.225.225-.225.575v3.5h4.5q.65 0 1.075.425.425.425.425 1.075v3.7q0 .65-.425 1.075-.425.425-1.075.425Zm-.8-6v4.5q0 .35.225.575.225.225.575.225h3.7q.35 0 .575-.225.225-.225.225-.575v-3.7q0-.35-.225-.575-.225-.225-.575-.225Zm10.8 5.3h4.7q.35 0 .575-.225.225-.225.225-.575v-8.7q0-.35-.225-.575-.225-.225-.575-.225h-4.7q-.35 0-.575.225-.225.225-.225.575v8.7q0 .35.225.575.225.225.575.225Zm0 .7q-.65 0-1.075-.425-.425-.425-.425-1.075v-8.7q0-.65.425-1.075Q14 6.15 14.65 6.15h4.7q.65 0 1.075.425.425.425.425 1.075v8.7q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterial60fpsW100Filled.displayName = 'AmauiIconMaterial60fpsW100Filled';

export default IconMaterial60fpsW100Filled;
