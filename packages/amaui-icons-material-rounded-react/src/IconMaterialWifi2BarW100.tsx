import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifi2BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi2BarW100'

      short_name='Wifi2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 15q-.15-.15-.15-.363 0-.212.15-.337 1.2-1.1 2.725-1.7Q10.25 12 12 12t3.275.6q1.525.6 2.725 1.7.15.125.15.337 0 .213-.15.363t-.35.15q-.2 0-.35-.125-1.075-.95-2.425-1.488Q13.525 13 12 13t-2.875.537q-1.35.538-2.425 1.488-.15.125-.35.125-.2 0-.35-.15Zm6 5.25q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Z"/>
    </Icon>
  );
});

IconMaterialWifi2BarW100.displayName = 'AmauiIconMaterialWifi2BarW100';

export default IconMaterialWifi2BarW100;
