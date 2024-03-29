import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricBikeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricBikeFilled'

      short_name='ElectricBike'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13 23-6-3h4v-2l6 3h-4Zm-8-6q-2.125 0-3.562-1.438Q0 14.125 0 12t1.463-3.562Q2.925 7 5 7q1.925 0 3.238 1.15Q9.55 9.3 9.9 11h.65l-1.8-5H7V4h5v2h-1.1l.35 1h4.8L14.6 3H12V1h4.025L18.2 6.95h.8q2.075 0 3.538 1.462Q24 9.875 24 11.95q0 2.1-1.45 3.575T19 17q-1.8 0-3.162-1.125Q14.475 14.75 14.1 13H9.9q-.35 1.725-1.7 2.863Q6.85 17 5 17Zm0-4h2.8v-2H5Zm13-.65 1.9-.7-1-2.65-1.85.7ZM12.7 11h1.4q.125-.575.338-1.075.212-.5.562-.925h-3.05Z"/>
    </Icon>
  );
});

IconMaterialElectricBikeFilled.displayName = 'AmauiIconMaterialElectricBikeFilled';

export default IconMaterialElectricBikeFilled;
