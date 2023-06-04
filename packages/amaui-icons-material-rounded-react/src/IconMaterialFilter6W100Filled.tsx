import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter6W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter6W100Filled'

      short_name='Filter6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.45 19.4q-.65 0-1.075-.425-.425-.425-.425-1.075V7.125q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225h10.775q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Zm2.7-2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm3.55-7.05v-2.5q0-.35.225-.575.225-.225.575-.225h1.875q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1H12.5q-.65 0-1.075.425Q11 6.5 11 7.15v5.7q0 .65.425 1.075.425.425 1.075.425h1.7q.65 0 1.075-.425.425-.425.425-1.075v-1.7q0-.65-.425-1.075-.425-.425-1.075-.425Zm0 .7h2.5q.35 0 .575.225.225.225.225.575v1.7q0 .35-.225.575-.225.225-.575.225h-1.7q-.3 0-.55-.225-.25-.225-.25-.575Z"/>
    </Icon>
  );
});

IconMaterialFilter6W100Filled.displayName = 'AmauiIconMaterialFilter6W100Filled';

export default IconMaterialFilter6W100Filled;
