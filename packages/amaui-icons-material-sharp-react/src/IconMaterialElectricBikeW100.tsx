import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricBikeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricBikeW100'

      short_name='ElectricBike'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 16.35q-1.85 0-3.1-1.25T.65 12q0-1.8 1.275-3.1T5 7.6q1.65 0 2.925 1.162Q9.2 9.925 9.35 11.65h2.1L9.2 5.35H7.65v-.7h3.7v.7h-1.4l.8 2.25H17l-1.925-5.25H12.65v-.7h2.925L17.75 7.6H19q1.8 0 3.075 1.275 1.275 1.275 1.275 3.075 0 1.8-1.275 3.075Q20.8 16.3 19 16.3q-1.7 0-2.925-1.138-1.225-1.137-1.425-2.812h-5.3q-.15 1.725-1.437 2.863Q6.625 16.35 5 16.35Zm0-.7q1.325 0 2.35-.863 1.025-.862 1.3-2.437h-3v-.7h3q-.275-1.575-1.3-2.438Q6.325 8.35 5 8.35q-1.55 0-2.6 1.05T1.35 12q0 1.5 1.05 2.575Q3.45 15.65 5 15.65Zm7.25-4h2.4q.075-.725.563-1.788Q15.7 8.8 16.65 8.3H11Zm6.75 4q1.55 0 2.6-1.075T22.65 12q0-1.55-1.05-2.6T19 8.35q-.275 0-.525.013-.25.012-.475.087l1.05 2.8-.65.25-1-2.8q-.975.5-1.512 1.425-.538.925-.538 1.875 0 1.5 1.05 2.575 1.05 1.075 2.6 1.075Zm-6.2 6.9L7.95 20.1h3.2v-1.65L16 20.9h-3.2Z"/>
    </Icon>
  );
});

IconMaterialElectricBikeW100.displayName = 'AmauiIconMaterialElectricBikeW100';

export default IconMaterialElectricBikeW100;
