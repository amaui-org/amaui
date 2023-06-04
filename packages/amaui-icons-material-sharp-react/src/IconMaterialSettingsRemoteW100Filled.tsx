import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsRemoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsRemoteW100Filled'

      short_name='SettingsRemote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 22.35V9.65h6.7v12.7ZM12 13.7q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2ZM8.5 6.55l-.5-.5q.8-.65 1.812-1.025Q10.825 4.65 12 4.65q1.175 0 2.188.375Q15.2 5.4 16 6.05l-.5.5q-.725-.575-1.625-.888-.9-.312-1.875-.312t-1.875.312q-.9.313-1.625.888Zm-2.85-2.8-.5-.55Q6.5 2.025 8.275 1.337 10.05.65 12 .65q1.95 0 3.713.7 1.762.7 3.087 1.9l-.45.5q-1.275-1.125-2.887-1.763Q13.85 1.35 12 1.35t-3.462.637Q6.925 2.625 5.65 3.75Z"/>
    </Icon>
  );
});

IconMaterialSettingsRemoteW100Filled.displayName = 'AmauiIconMaterialSettingsRemoteW100Filled';

export default IconMaterialSettingsRemoteW100Filled;
