import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BadgeW100Filled'

      short_name='Badge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.65 13.5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.3q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0 2.2q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.3q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM13.7 8.3h5.5q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425H4.8q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V9.8q0-.65.425-1.075Q4.15 8.3 4.8 8.3h5.5V4q0-.3.2-.5t.5-.2h2q.3 0 .5.2t.2.5ZM11 9h2V4h-2Zm-2 6q.45 0 .775-.325t.325-.775q0-.45-.325-.775T9 12.8q-.45 0-.775.325T7.9 13.9q0 .45.325.775T9 15Zm-2.6 2.25h5.2v-.05q0-.325-.175-.6-.175-.275-.475-.4-.425-.2-.925-.3-.5-.1-1.025-.1-.525 0-1.025.1-.5.1-.925.3-.3.125-.475.4t-.175.6Z"/>
    </Icon>
  );
});

IconMaterialBadgeW100Filled.displayName = 'AmauiIconMaterialBadgeW100Filled';

export default IconMaterialBadgeW100Filled;
