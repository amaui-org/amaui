import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdminMedsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdminMedsW100Filled'

      short_name='AdminMeds'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.675 15.325q.525.525 1.25.525t1.25-.525L13 13.5 10.5 11l-1.825 1.825q-.5.5-.5 1.25t.5 1.25Zm6.65-6.65q-.525-.5-1.25-.513-.725-.012-1.25.513L11 10.5l2.5 2.5 1.825-1.825q.525-.525.513-1.25-.013-.725-.513-1.25ZM5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h4.85q-.275-.725.15-1.363.425-.637 1.225-.637.775 0 1.2.637.425.638.125 1.363h4.85q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAdminMedsW100Filled.displayName = 'AmauiIconMaterialAdminMedsW100Filled';

export default IconMaterialAdminMedsW100Filled;
