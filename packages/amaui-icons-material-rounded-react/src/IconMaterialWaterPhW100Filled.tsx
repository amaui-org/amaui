import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterPhW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPhW100Filled'

      short_name='WaterPh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.05 18.8h-2.8v1.55q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-4.3q0-.225.175-.388.175-.162.4-.162h2.925q.3 0 .5.225t.2.525v1.85q0 .3-.2.5t-.5.2Zm3.3-.6v2.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-4.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h2.8v-1.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.5q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V18.2Zm-6.1-.1h2.8v-1.85h-2.8Zm-2.7 2.575q-2.7-.175-4.475-2.113Q3.3 16.625 3.3 13.8q0-1.35.625-2.7t1.563-2.613Q6.425 7.225 7.5 6.112 8.575 5 9.475 4.175q.125-.1.263-.15.137-.05.262-.05t.25.05q.125.05.25.15.9.85 1.95 1.912 1.05 1.063 1.975 2.275.925 1.213 1.563 2.513.637 1.3.712 2.625h-5.65q-.625 0-1.062.438-.438.437-.438 1.062Z"/>
    </Icon>
  );
});

IconMaterialWaterPhW100Filled.displayName = 'AmauiIconMaterialWaterPhW100Filled';

export default IconMaterialWaterPhW100Filled;
