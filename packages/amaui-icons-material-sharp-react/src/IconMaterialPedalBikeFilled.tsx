import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPedalBikeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PedalBikeFilled'

      short_name='PedalBike'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20q-2.125 0-3.562-1.438Q0 17.125 0 15t1.463-3.562Q2.925 10 5 10q1.925 0 3.238 1.15Q9.55 12.3 9.9 14h.65l-1.8-5H7V7h5v2h-1.1l.35 1h4.8L14.6 6H12V4h4.025L18.2 9.95h.8q2.075 0 3.538 1.462Q24 12.875 24 14.95q0 2.1-1.45 3.575T19 20q-1.8 0-3.162-1.125Q14.475 17.75 14.1 16H9.9q-.35 1.725-1.7 2.863Q6.85 20 5 20Zm7.7-6h1.4q.125-.575.338-1.075.212-.5.562-.925h-3.05Zm5.3 1.35 1.9-.7-1-2.65-1.85.7ZM5 16h2.8v-2H5Z"/>
    </Icon>
  );
});

IconMaterialPedalBikeFilled.displayName = 'AmauiIconMaterialPedalBikeFilled';

export default IconMaterialPedalBikeFilled;
