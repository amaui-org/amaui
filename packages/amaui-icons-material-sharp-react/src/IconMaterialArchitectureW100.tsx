import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArchitectureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchitectureW100'

      short_name='Architecture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.25 19.6-.1-.7 2.5-6.9q.15.125.3.188.15.062.3.112L7.8 19.1Zm9.5 0-.55-.5-2.45-6.8q.15-.05.3-.112.15-.063.3-.188l2.5 6.9ZM12 10.35q-.975 0-1.662-.688Q9.65 8.975 9.65 8q0-.975.625-1.6.625-.625 1.375-.7V3h.7v2.7q.75.075 1.375.7T14.35 8q0 .975-.687 1.662-.688.688-1.663.688Zm0-.7q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.163Q12.675 6.35 12 6.35t-1.162.487Q10.35 7.325 10.35 8t.488 1.162q.487.488 1.162.488Z"/>
    </Icon>
  );
});

IconMaterialArchitectureW100.displayName = 'AmauiIconMaterialArchitectureW100';

export default IconMaterialArchitectureW100;
