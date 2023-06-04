import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeVerticalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeVerticalW100Filled'

      short_name='SwipeVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.4 21.2v-.7h2.9q-1.825-1.8-2.862-3.975Q.4 14.35.4 12q0-2.35 1.038-4.525Q2.475 5.3 4.3 3.5H1.4v-.7h4.2V7h-.7V3.85q-1.95 2-2.875 3.975T1.1 12q0 2.2.925 4.175Q2.95 18.15 4.9 20.15V17h.7v4.2Zm14.175-.45L9.65 18.5l.375-.975 3.775-.875-3.975-8.9q-.2-.475-.025-.925.175-.45.65-.65.475-.2.925-.038.45.163.65.638l2.15 4.85 1.1-.5 5.35.2 1.6 6.45Z"/>
    </Icon>
  );
});

IconMaterialSwipeVerticalW100Filled.displayName = 'AmauiIconMaterialSwipeVerticalW100Filled';

export default IconMaterialSwipeVerticalW100Filled;
