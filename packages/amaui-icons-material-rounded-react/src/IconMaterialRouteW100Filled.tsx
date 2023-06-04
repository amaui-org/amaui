import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRouteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RouteW100Filled'

      short_name='Route'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 20.35q-1.4 0-2.375-.975Q5.65 18.4 5.65 17V8.375q-.875-.325-1.437-.963Q3.65 6.775 3.65 6q0-.975.688-1.663Q5.025 3.65 6 3.65q.975 0 1.662.687.688.688.688 1.663 0 .775-.563 1.412-.562.638-1.437.963V17q0 1.1.775 1.875.775.775 1.875.775t1.875-.775q.775-.775.775-1.875V7q0-1.4.975-2.375Q13.6 3.65 15 3.65t2.375.975Q18.35 5.6 18.35 7v8.625q.875.325 1.438.962.562.638.562 1.413 0 .975-.687 1.663-.688.687-1.663.687-.975 0-1.662-.687-.688-.688-.688-1.663 0-.775.563-1.425.562-.65 1.437-.95V7q0-1.1-.775-1.875Q16.1 4.35 15 4.35t-1.875.775Q12.35 5.9 12.35 7v10q0 1.4-.975 2.375-.975.975-2.375.975Z"/>
    </Icon>
  );
});

IconMaterialRouteW100Filled.displayName = 'AmauiIconMaterialRouteW100Filled';

export default IconMaterialRouteW100Filled;
