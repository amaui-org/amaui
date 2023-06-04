import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter9PlusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9PlusW100Filled'

      short_name='Filter9Plus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.825 13.35H11.2q.65 0 1.075-.425.425-.425.425-1.075v-3.7q0-.65-.425-1.075-.425-.425-1.075-.425h-.7q-.65 0-1.075.425Q9 7.5 9 8.15v.7q0 .65.425 1.075.425.425 1.075.425H12v1.5q0 .35-.225.575-.225.225-.575.225H9.825q-.125 0-.225.1t-.1.25q0 .15.1.25t.225.1ZM12 9.65h-1.5q-.35 0-.575-.225Q9.7 9.2 9.7 8.85v-.7q0-.35.225-.575.225-.225.575-.225h.7q.35 0 .575.225Q12 7.8 12 8.15Zm4 .7v1.675q0 .125.1.225t.25.1q.15 0 .25-.1t.1-.225V10.35h1.675q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.225-.1H16.7V7.975q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.225V9.65h-1.675q-.125 0-.225.1T14 10q0 .15.1.25t.225.1ZM8.15 16.7q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-2.7 2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.125q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225h10.775q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFilter9PlusW100Filled.displayName = 'AmauiIconMaterialFilter9PlusW100Filled';

export default IconMaterialFilter9PlusW100Filled;
