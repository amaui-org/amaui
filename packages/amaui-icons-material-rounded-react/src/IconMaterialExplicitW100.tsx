import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExplicitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitW100'

      short_name='Explicit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.4 16.35H14q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.65v-3.3H14q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.65v-3.3H14q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.6q-.325 0-.537.212-.213.213-.213.538v7.2q0 .325.213.537.212.213.537.213ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425ZM18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19h12.4q.35 0 .575-.225Q19 18.55 19 18.2V5.8q0-.35-.225-.575Q18.55 5 18.2 5ZM5.8 19q-.35 0-.575-.225Q5 18.55 5 18.2V5.8q0-.35.225-.575Q5.45 5 5.8 5q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19Z"/>
    </Icon>
  );
});

IconMaterialExplicitW100.displayName = 'AmauiIconMaterialExplicitW100';

export default IconMaterialExplicitW100;
