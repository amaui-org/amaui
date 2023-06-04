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
      <path d="M14 13.5h4v-.7h-4Zm0 2.2h4V15h-4Zm-.3-7.4h7v12.4H3.3V8.3h7v-5h3.4ZM11 9h2V4h-2Zm-2 6q.45 0 .775-.325t.325-.775q0-.45-.325-.775T9 12.8q-.45 0-.775.325T7.9 13.9q0 .45.325.775T9 15Zm-2.6 2.25h5.2v-.05q0-.325-.175-.6-.175-.275-.475-.4-.425-.2-.925-.3-.5-.1-1.025-.1-.525 0-1.025.1-.5.1-.925.3-.3.125-.475.4t-.175.6Z"/>
    </Icon>
  );
});

IconMaterialBadgeW100Filled.displayName = 'AmauiIconMaterialBadgeW100Filled';

export default IconMaterialBadgeW100Filled;
