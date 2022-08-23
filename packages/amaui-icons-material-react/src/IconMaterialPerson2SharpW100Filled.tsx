import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPerson2SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person2SharpW100Filled'
      short_name='Person2'

      {...props}
    >
      <path d="M9.85 11.2q-.35 0-.575-.25-.225-.25-.175-.6l.3-2.375q.125-.95.875-1.563Q11.025 5.8 12 5.8q.975 0 1.725.612.75.613.875 1.563l.3 2.375q.05.35-.175.6-.225.25-.575.25Zm-4.55 7v-1.3q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q10.65 13.8 12 13.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v1.3Z"/>
    </Icon>
  );
});

IconMaterialPerson2SharpW100Filled.displayName = 'AmauiIconMaterialPerson2SharpW100Filled';

export default IconMaterialPerson2SharpW100Filled;
