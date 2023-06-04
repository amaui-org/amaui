import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFmdBadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FmdBadW100Filled'

      short_name='FmdBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12.525q.15 0 .25-.1t.1-.25v-5.2q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v5.2q0 .15.1.25t.25.1Zm0 2.65q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm0 6.025q-.15 0-.275-.037-.125-.038-.25-.138-3.45-3.2-5.137-5.938Q4.65 12.35 4.65 10.2q0-3.45 2.225-5.5T12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 2.15-1.687 4.887-1.688 2.738-5.138 5.938-.1.1-.237.138-.138.037-.288.037Z"/>
    </Icon>
  );
});

IconMaterialFmdBadW100Filled.displayName = 'AmauiIconMaterialFmdBadW100Filled';

export default IconMaterialFmdBadW100Filled;
