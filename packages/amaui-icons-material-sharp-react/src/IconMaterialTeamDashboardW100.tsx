import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTeamDashboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TeamDashboardW100'

      short_name='TeamDashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h12.4q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438Zm4.85-.7v-6.65H5v5.85q0 .35.225.575Q5.45 19 5.8 19Zm.7 0h6.85q.35 0 .575-.225Q19 18.55 19 18.2v-5.85h-7.65ZM5 11.65h14V5.8q0-.35-.225-.575Q18.55 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8Z"/>
    </Icon>
  );
});

IconMaterialTeamDashboardW100.displayName = 'AmauiIconMaterialTeamDashboardW100';

export default IconMaterialTeamDashboardW100;
