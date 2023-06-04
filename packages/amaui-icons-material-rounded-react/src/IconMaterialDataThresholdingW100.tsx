import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataThresholdingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataThresholdingW100'

      short_name='DataThresholding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h12.4q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438Zm10.55-.7h1.85q.35 0 .575-.225Q19 18.55 19 18.2v-1.85ZM5.475 19h2.65l3-3h.975l-3 3h2.65l3-3h.975l-3 3h2.65l3-3H19V5.8q0-.35-.225-.575Q18.55 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.7L7.5 16h.975ZM7.4 12.85q-.1-.1-.1-.25t.1-.25l2.75-2.725q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l1.475 1.475L16.1 7.65q.1-.1.25-.1t.25.1q.1.1.1.25t-.1.25l-3.4 3.4q-.125.125-.25.175-.125.05-.275.05-.15 0-.275-.05-.125-.05-.25-.175l-1.475-1.475L7.9 12.85q-.1.1-.25.1t-.25-.1ZM5 18.2V5v14V18.2Z"/>
    </Icon>
  );
});

IconMaterialDataThresholdingW100.displayName = 'AmauiIconMaterialDataThresholdingW100';

export default IconMaterialDataThresholdingW100;
