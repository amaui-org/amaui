import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotStepW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotStepW100'

      short_name='DoNotStep'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.8 14.95-.5-.5 3.475-3.475.5.5Zm-1.575-1.55-.5-.5L18.7 9.925l-4.25-4.25-2.975 2.975-.5-.5 3.475-3.475 5.25 5.25Zm5.075 8.9-6.975-6.975-3.1 3.1h-7.95V15.8q.925-.425 1.8-.862.875-.438 1.675-1.063l1.05 1.05.775-.775-1.025-1.025.238-.238q.112-.112.262-.237l1.025 1.025.65-.65-1.1-1.1q.125-.125.225-.275.1-.15.175-.325l1.2 1.2.65-.65L2.25 3.25l.5-.5L21.8 21.8ZM3.975 17.725h6.975l2.9-2.9-2.475-2.475L7.8 15.925 6.625 14.75q-.65.475-1.287.812-.638.338-1.363.688Zm7.4-5.375Zm2.525-1.275Z"/>
    </Icon>
  );
});

IconMaterialDoNotStepW100.displayName = 'AmauiIconMaterialDoNotStepW100';

export default IconMaterialDoNotStepW100;
