import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRollerSkatingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerSkatingW100Filled'

      short_name='RollerSkating'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.15 15.35q-.625 0-1.062-.438-.438-.437-.438-1.062V3.15q0-.625.438-1.063.437-.437 1.062-.437h4.1q.625 0 1.062.437.438.438.438 1.063v1H9.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.25v.65q0 .125.075.65H9.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.575q.3.575.812.975.513.4 1.163.6l2.625.725q1.1.275 1.763 1.175.662.9.662 2.025v1.5q0 .625-.437 1.062-.438.438-1.063.438Zm-1.15 7q-.975 0-1.662-.687Q2.65 20.975 2.65 20q0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.663-.688.687-1.663.687Zm14 0q-.975 0-1.662-.687-.688-.688-.688-1.663 0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.663-.688.687-1.663.687Zm-7 0q-.975 0-1.662-.687Q9.65 20.975 9.65 20q0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.663-.688.687-1.663.687Z"/>
    </Icon>
  );
});

IconMaterialRollerSkatingW100Filled.displayName = 'AmauiIconMaterialRollerSkatingW100Filled';

export default IconMaterialRollerSkatingW100Filled;
