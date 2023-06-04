import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUpW100'

      short_name='SwipeUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.175 13.4Q5.1 11.95 4.5 10.2q-.6-1.75-.6-3.7 0-.875.05-1.8t.175-1.75l-2.1 2.1-.5-.5L4.5 1.575 7.475 4.55l-.5.5L4.85 2.925q-.175.925-.212 1.912Q4.6 5.825 4.6 6.5q0 1.775.563 3.4.562 1.625 1.512 2.975Zm9.4 7.35L9.65 18.5l.375-.975 3.775-.875-3.975-8.9q-.2-.475-.025-.925.175-.45.65-.65.475-.2.925-.038.45.163.65.638l2.15 4.85 1.1-.5 5.35.2 1.6 6.45Zm-.025-.775 5.85-2.6-1.35-5.35-4.625-.2-1.6.725-2.45-5.5q-.1-.2-.275-.275-.175-.075-.375.025t-.275.287q-.075.188.025.388l4.3 9.675-4.225.95Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpW100.displayName = 'AmauiIconMaterialSwipeUpW100';

export default IconMaterialSwipeUpW100;
