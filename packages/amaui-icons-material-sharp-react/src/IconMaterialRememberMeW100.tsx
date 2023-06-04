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
      <path d="M6.3 21.7V2.3h11.4v19.4ZM7 21h10v-1.65H7ZM7 4.65h10V3H7Zm5 10.05q-1.35 0-2.625.387Q8.1 15.475 7 16.2v2.45h10V16.2q-1.1-.725-2.375-1.113Q13.35 14.7 12 14.7Zm0-.7q1.35 0 2.613.35 1.262.35 2.387 1v-10H7v10q1.125-.65 2.387-1Q10.65 14 12 14Zm0-1.65q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q12.975 7.65 12 7.65q-.975 0-1.662.687Q9.65 9.025 9.65 10q0 .975.688 1.662.687.688 1.662.688Zm0-.7q-.675 0-1.162-.488-.488-.487-.488-1.162 0-.675.488-1.163.487-.487 1.162-.487.675 0 1.163.487.487.488.487 1.163t-.487 1.162q-.488.488-1.163.488Zm0 7h5H7h5ZM12 10Zm0-5.35Zm0 14.7Z"/>
    </Icon>
  );
});

IconMaterialRememberMeW100.displayName = 'AmauiIconMaterialRememberMeW100';

export default IconMaterialRememberMeW100;
