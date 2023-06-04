import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarRepairW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarRepairW100Filled'

      short_name='CarRepair'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.4q-.15 0-.25-.1t-.1-.25V17.4H5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-6.65v2.65q0 .15-.1.25t-.25.1Zm-3.5-8.2q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q8.775 10.8 8.5 10.8t-.488.212q-.212.213-.212.488t.212.487q.213.213.488.213Zm7 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm-8.85 3.5q-.15 0-.25-.1t-.1-.25V9.8l1.45-4.15q.05-.175.188-.263.137-.087.312-.087h7.5q.175 0 .312.087.138.088.188.263L17.7 9.8v5.55q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V13.7H7v1.65q0 .15-.1.25t-.25.1Zm.55-6.4h9.6L15.65 6h-7.3Z"/>
    </Icon>
  );
});

IconMaterialCarRepairW100Filled.displayName = 'AmauiIconMaterialCarRepairW100Filled';

export default IconMaterialCarRepairW100Filled;
