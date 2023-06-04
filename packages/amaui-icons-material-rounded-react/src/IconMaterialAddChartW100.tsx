import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddChartW100'

      short_name='AddChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 16.35q.15 0 .25-.1T8 16v-5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v5q0 .15.1.25t.25.1Zm3.7 0q.15 0 .25-.1t.1-.25V8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1T11 8v8q0 .15.1.25t.25.1Zm3.7 0q.15 0 .25-.1t.1-.25v-2q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2q0 .15.1.25t.25.1Zm-9.9 3.35q-.65 0-1.075-.425-.425-.425-.425-1.075V5.8q0-.65.425-1.075Q4.5 4.3 5.15 4.3h9.05q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.15q-.35 0-.575.225-.225.225-.225.575v12.4q0 .35.225.575Q4.8 19 5.15 19h12.4q.35 0 .575-.225.225-.225.225-.575V9.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v9.05q0 .65-.425 1.075-.425.425-1.075.425ZM18 7.7q-.15 0-.25-.1t-.1-.25V5.7H16q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T16 5h1.65V3.35q0-.15.1-.25T18 3q.15 0 .25.1t.1.25V5H20q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.65v1.65q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAddChartW100.displayName = 'AmauiIconMaterialAddChartW100';

export default IconMaterialAddChartW100;
