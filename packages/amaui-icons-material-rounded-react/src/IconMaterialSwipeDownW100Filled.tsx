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
      <path d="M4.5 14.125q-.15 0-.275-.05-.125-.05-.25-.175L1.75 11.7q-.1-.1-.1-.25t.1-.25q.1-.1.25-.1t.25.1l1.9 1.925q-.125-.725-.187-1.663Q3.9 10.525 3.9 9.5q0-1.85.525-3.463.525-1.612 1.5-3.087.1-.15.263-.163.162-.012.287.113.075.075.087.212.013.138-.062.238-.875 1.325-1.387 2.887Q4.6 7.8 4.6 9.5q0 1 .063 1.95.062.95.187 1.675l1.9-1.925q.1-.1.25-.1t.25.1q.1.1.1.25t-.1.25l-2.225 2.2q-.125.125-.25.175-.125.05-.275.05Zm10.725 6.5-5-1.9q-.225-.075-.338-.275-.112-.2-.087-.475.025-.2.2-.338.175-.137.375-.187l3.425-.8-3.975-8.9q-.2-.475-.037-.925.162-.45.637-.65t.938-.038q.462.163.662.638l2.15 4.85.95-.425q.1-.05.2-.05h.175l3.4.125q.825.05 1.412.637.588.588.788 1.388l1 3.925q.05.25-.062.463-.113.212-.363.337l-5.85 2.6q-.125.05-.287.05-.163 0-.313-.05Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownW100Filled.displayName = 'AmauiIconMaterialSwipeDownW100Filled';

export default IconMaterialSwipeDownW100Filled;
