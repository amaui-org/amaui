import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnowmobile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Snowmobile'

      short_name='Snowmobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20H2q-.95 0-1.475-.625Q0 18.75 0 18q0-.5.25-.975t.8-.775l3.5-1.9L0 13l2-4 9 1 3.05-2.275-.8-.725H11V5h3.05l7.125 6.625q.475.425.65.837.175.413.175.788 0 1.075-.825 1.912-.825.838-2.5.838l2.15 2H21q.425 0 .712-.288Q22 17.425 22 17h2q0 1.25-.875 2.125T21 20h-6v-2h2.925l-2-2H12q0 1.65-1.175 2.825Q9.65 20 8 20Zm-6-2h6q.825 0 1.413-.587Q10 16.825 10 16l-2.75-.825L2 18Zm8.3-4h8.275q.675 0 1.05-.163.375-.162.375-.587L15.525 9.1l-3.95 2.975-8.425-.925-.3.6Zm1.125-2.45Z"/>
    </Icon>
  );
});

IconMaterialSnowmobile.displayName = 'AmauiIconMaterialSnowmobile';

export default IconMaterialSnowmobile;
