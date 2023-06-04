import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestorePageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestorePageW100'

      short_name='RestorePage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.2 20.7H6.8q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h6.025q.3 0 .575.112.275.113.5.338l4.35 4.35q.225.225.337.5.113.275.113.575V19.2q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7q.3 0 .55-.25.25-.25.25-.55V8.85L13.15 4H6.8q-.3 0-.55.25Q6 4.5 6 4.8v14.4q0 .3.25.55.25.25.55.25ZM12 16.95q1.65 0 2.8-1.15t1.15-2.8q0-1.65-1.15-2.8T12 9.05q-1.1 0-1.875.5-.775.5-1.275 1.1v-1.4q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v1.85q0 .325.213.537.212.213.537.213h1.85q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.4q.375-.575 1.075-.988.7-.412 1.575-.412 1.35 0 2.3.95.95.95.95 2.3 0 1.35-.95 2.3-.95.95-2.3.95-1.05 0-1.85-.575t-1.175-1.45q-.05-.1-.137-.163Q8.75 14 8.65 14q-.2 0-.3.137-.1.138-.025.338.5 1.175 1.487 1.825.988.65 2.188.65ZM6 20V4v16Z"/>
    </Icon>
  );
});

IconMaterialRestorePageW100.displayName = 'AmauiIconMaterialRestorePageW100';

export default IconMaterialRestorePageW100;
