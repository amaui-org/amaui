import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEarbudsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsW100Filled'

      short_name='Earbuds'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20.35q-1.8 0-3.075-1.275Q3.65 17.8 3.65 16V6q0-.975.725-1.663Q5.1 3.65 6.05 3.65q.95 0 1.625.687.675.688.675 1.663 0 .975-.7 1.662-.7.688-1.65.688H4.35V16q0 1.525 1.063 2.587Q6.475 19.65 8 19.65q1.525 0 2.588-1.063Q11.65 17.525 11.65 16V8q0-1.8 1.275-3.075Q14.2 3.65 16 3.65q1.8 0 3.075 1.275Q20.35 6.2 20.35 8v10q0 .975-.7 1.663-.7.687-1.65.687t-1.65-.7q-.7-.7-.7-1.675 0-.95.7-1.638.7-.687 1.65-.687h1.65V8q0-1.525-1.062-2.588Q17.525 4.35 16 4.35q-1.525 0-2.587 1.062Q12.35 6.475 12.35 8v8q0 1.8-1.275 3.075Q9.8 20.35 8 20.35Z"/>
    </Icon>
  );
});

IconMaterialEarbudsW100Filled.displayName = 'AmauiIconMaterialEarbudsW100Filled';

export default IconMaterialEarbudsW100Filled;
