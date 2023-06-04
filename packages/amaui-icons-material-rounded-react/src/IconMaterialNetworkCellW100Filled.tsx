import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkCellW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCellW100Filled'

      short_name='NetworkCell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.025 20.7q-.5 0-.687-.463-.188-.462.162-.812l13-13q.35-.35.812-.163.463.188.463.688v13q0 .325-.213.537-.212.213-.537.213Zm10.05-.7h3V6.85l-3 3Z"/>
    </Icon>
  );
});

IconMaterialNetworkCellW100Filled.displayName = 'AmauiIconMaterialNetworkCellW100Filled';

export default IconMaterialNetworkCellW100Filled;
