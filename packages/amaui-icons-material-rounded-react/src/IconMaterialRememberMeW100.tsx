import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRememberMeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RememberMeW100'

      short_name='RememberMe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 21.7q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v16.4q0 .625-.438 1.062-.437.438-1.062.438ZM7 19.35v.85q0 .35.225.575Q7.45 21 7.8 21h8.4q.35 0 .575-.225Q17 20.55 17 20.2v-.85Zm0-14.7h10V3.8q0-.35-.225-.575Q16.55 3 16.2 3H7.8q-.35 0-.575.225Q7 3.45 7 3.8Zm5 10.05q-1.35 0-2.625.387Q8.1 15.475 7 16.2v2.45h10V16.2q-1.1-.725-2.375-1.113Q13.35 14.7 12 14.7Zm0-.7q1.35 0 2.613.35 1.262.35 2.387 1v-10H7v10q1.125-.65 2.387-1Q10.65 14 12 14Zm0-1.65q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q12.975 7.65 12 7.65q-.975 0-1.662.687Q9.65 9.025 9.65 10q0 .975.688 1.662.687.688 1.662.688Zm0-.7q-.675 0-1.162-.488-.488-.487-.488-1.162 0-.675.488-1.163.487-.487 1.162-.487.675 0 1.163.487.487.488.487 1.163t-.487 1.162q-.488.488-1.163.488Zm0 7h5H7h5ZM12 10Zm0-5.35Zm0 14.7Z"/>
    </Icon>
  );
});

IconMaterialRememberMeW100.displayName = 'AmauiIconMaterialRememberMeW100';

export default IconMaterialRememberMeW100;
