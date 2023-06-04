import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorbellW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellW100Filled'

      short_name='Doorbell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.15q.35 0 .6-.225t.3-.575h-1.8q.05.35.3.575.25.225.6.225Zm-3.6-1.3h7.2v-.7h-1V12.9q0-1.05-.512-1.912-.513-.863-1.488-1.138V8.9h-1.2v.95q-.975.275-1.487 1.138Q9.4 11.85 9.4 12.9v2.25h-1ZM5.3 19.7V9.65L12 4.6l6.7 5.05V19.7Z"/>
    </Icon>
  );
});

IconMaterialDoorbellW100Filled.displayName = 'AmauiIconMaterialDoorbellW100Filled';

export default IconMaterialDoorbellW100Filled;
