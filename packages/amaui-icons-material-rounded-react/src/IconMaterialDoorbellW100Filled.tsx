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
      <path d="M12 17.15q.35 0 .6-.225t.3-.575h-1.8q.05.35.3.575.25.225.6.225Zm-3.25-1.3h6.5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-.65V12.9q0-1.05-.512-1.912-.513-.863-1.488-1.138V9.5q0-.25-.175-.425T12 8.9q-.25 0-.425.175T11.4 9.5v.35q-.975.275-1.487 1.138Q9.4 11.85 9.4 12.9v2.25h-.65q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM6 19.7q-.275 0-.487-.213Q5.3 19.275 5.3 19v-9q0-.175.075-.312.075-.138.2-.238l6-4.525q.1-.075.2-.113.1-.037.225-.037t.225.037q.1.038.2.113l6 4.525q.125.1.2.238.075.137.075.312v9q0 .275-.212.487-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialDoorbellW100Filled.displayName = 'AmauiIconMaterialDoorbellW100Filled';

export default IconMaterialDoorbellW100Filled;
