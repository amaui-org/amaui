import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricMopedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMopedW100Filled'

      short_name='ElectricMoped'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.25 16.5q-.975 0-1.662-.688-.688-.687-.688-1.662h-2v-5.7h6.7v5h4.45L17.9 8.7V5.4h-3v-.7h3.7v4.2l-4.15 5.25H9.6q0 .975-.687 1.662-.688.688-1.663.688Zm0-.7q.675 0 1.163-.488.487-.487.487-1.162H5.6q0 .675.488 1.162.487.488 1.162.488ZM5.9 6.4v-.7h3.7v.7Zm12.85 10.1q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688Zm0-.7q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.162-.488-.488-1.163-.488t-1.163.488q-.487.487-.487 1.162 0 .675.487 1.162.488.488 1.163.488Zm-5.7 6.75L8.2 20.1h3.2v-1.65l4.85 2.45h-3.2Z"/>
    </Icon>
  );
});

IconMaterialElectricMopedW100Filled.displayName = 'AmauiIconMaterialElectricMopedW100Filled';

export default IconMaterialElectricMopedW100Filled;
