import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeDownW100Filled'

      short_name='SwipeDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.5 14.425 1.525 11.45 2 10.975l2.15 2.15q-.125-.725-.187-1.663Q3.9 10.525 3.9 9.5q0-1.95.6-3.65T6.175 2.6l.5.525q-.95 1.35-1.512 2.975Q4.6 7.725 4.6 9.5q0 1 .063 1.95.062.95.187 1.675L7 10.975l.475.475Zm11.075 6.325L9.65 18.5l.375-.975 3.775-.875-3.975-8.9q-.2-.475-.025-.925.175-.45.65-.65.475-.2.925-.038.45.163.65.638l2.15 4.85 1.1-.5 5.35.2 1.6 6.45Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownW100Filled.displayName = 'AmauiIconMaterialSwipeDownW100Filled';

export default IconMaterialSwipeDownW100Filled;
