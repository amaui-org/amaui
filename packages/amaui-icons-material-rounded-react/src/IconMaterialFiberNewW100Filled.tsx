import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberNewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberNewW100Filled'

      short_name='FiberNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.35 14.6q.15 0 .25-.1t.1-.25v-3.8l2.6 3.925q.05.1.188.162.137.063.262.063.2 0 .325-.125t.125-.325v-4.4q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3.8l-2.525-3.9q-.075-.125-.212-.188Q4.625 9.4 4.5 9.4q-.2 0-.35.15Q4 9.7 4 9.9v4.35q0 .15.1.25t.25.1Zm5.95 0h2.45q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H10.6v-1.5h2.15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H10.6v-1.6h2.15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H10.3q-.175 0-.288.112-.112.113-.112.288v4.4q0 .175.112.288.113.112.288.112Zm5.1 0h4q.275 0 .437-.162Q20 14.275 20 14V9.75q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v4.15h-1.55v-3.15q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3.15H15.5V9.75q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25V14q0 .275.163.438.162.162.437.162ZM3.8 18.7q-.65 0-1.075-.425Q2.3 17.85 2.3 17.2V6.8q0-.65.425-1.075Q3.15 5.3 3.8 5.3h16.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialFiberNewW100Filled.displayName = 'AmauiIconMaterialFiberNewW100Filled';

export default IconMaterialFiberNewW100Filled;
