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
      <path d="M11.65 20.4v-3h-7v-.7h14.7v.7h-7v3ZM8.5 12.2q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q8.775 10.8 8.5 10.8t-.488.212q-.212.213-.212.488t.212.487q.213.213.488.213Zm7 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm-9.2 3.5V9.8l1.575-4.5h8.25L17.7 9.8v5.9H17v-2H7v2Zm.9-6.4h9.6L15.65 6h-7.3Z"/>
    </Icon>
  );
});

IconMaterialCarRepairW100Filled.displayName = 'AmauiIconMaterialCarRepairW100Filled';

export default IconMaterialCarRepairW100Filled;
