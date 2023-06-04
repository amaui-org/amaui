import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRouteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RouteW100'

      short_name='Route'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 20.35V8.375q-.875-.325-1.437-.963Q3.65 6.775 3.65 6q0-.975.688-1.663Q5.025 3.65 6 3.65q.975 0 1.662.687.688.688.688 1.663 0 .775-.563 1.412-.562.638-1.437.963V19.65h5.3v-16h6.7v11.975q.875.325 1.438.962.562.638.562 1.413 0 .975-.687 1.663-.688.687-1.663.687-.975 0-1.662-.687-.688-.688-.688-1.663 0-.775.563-1.425.562-.65 1.437-.95V4.35h-5.3v16ZM6 7.65q.675 0 1.163-.488Q7.65 6.675 7.65 6q0-.675-.487-1.163Q6.675 4.35 6 4.35t-1.162.487Q4.35 5.325 4.35 6t.488 1.162Q5.325 7.65 6 7.65Zm12 12q.675 0 1.163-.487.487-.488.487-1.163t-.487-1.163q-.488-.487-1.163-.487t-1.163.487q-.487.488-.487 1.163t.487 1.163q.488.487 1.163.487ZM6 6Zm12 12Z"/>
    </Icon>
  );
});

IconMaterialRouteW100.displayName = 'AmauiIconMaterialRouteW100';

export default IconMaterialRouteW100;
