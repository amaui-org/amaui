import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPedalBikeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PedalBikeW100'

      short_name='PedalBike'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19.35q-1.85 0-3.1-1.25T.65 15q0-1.8 1.275-3.1T5 10.6q1.65 0 2.925 1.162Q9.2 12.925 9.35 14.65h2.1L9.2 8.35H7.65v-.7h3.7v.7h-1.4l.8 2.25H17l-1.925-5.25H12.65v-.7h2.925l2.175 5.95H19q1.8 0 3.075 1.275 1.275 1.275 1.275 3.075 0 1.8-1.275 3.075Q20.8 19.3 19 19.3q-1.7 0-2.925-1.137-1.225-1.138-1.425-2.813h-5.3q-.15 1.725-1.437 2.862Q6.625 19.35 5 19.35Zm0-.7q1.325 0 2.35-.862 1.025-.863 1.3-2.438h-3v-.7h3q-.275-1.575-1.3-2.438Q6.325 11.35 5 11.35q-1.55 0-2.6 1.05T1.35 15q0 1.5 1.05 2.575Q3.45 18.65 5 18.65Zm7.25-4h2.4q.075-.725.563-1.788Q15.7 11.8 16.65 11.3H11Zm6.75 4q1.55 0 2.6-1.075T22.65 15q0-1.55-1.05-2.6T19 11.35q-.275 0-.525.013-.25.012-.475.087l1.05 2.8-.65.25-1-2.8q-.975.5-1.512 1.425-.538.925-.538 1.875 0 1.5 1.05 2.575 1.05 1.075 2.6 1.075Z"/>
    </Icon>
  );
});

IconMaterialPedalBikeW100.displayName = 'AmauiIconMaterialPedalBikeW100';

export default IconMaterialPedalBikeW100;
