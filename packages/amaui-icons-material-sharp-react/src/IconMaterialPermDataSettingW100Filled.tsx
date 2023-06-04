import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermDataSettingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDataSettingW100Filled'

      short_name='PermDataSetting'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.4 20.2-.05-.7q-.65-.125-1.05-.35-.4-.225-.75-.65l-.65.3-.4-.55.55-.45q-.2-.6-.2-1.15 0-.55.2-1.15l-.55-.45.4-.55.65.3q.35-.45.75-.663.4-.212 1.05-.337l.05-.7h.7l.05.7q.65.125 1.05.337.4.213.75.663l.65-.3.4.55-.55.45q.2.6.2 1.15 0 .55-.2 1.15l.55.45-.4.55-.65-.3q-.35.425-.75.65-.4.225-1.05.35l-.05.7Zm.35-1.35q.9 0 1.55-.65t.65-1.55q0-.9-.65-1.55t-1.55-.65q-.9 0-1.55.65t-.65 1.55q0 .9.65 1.55t1.55.65ZM2.9 18.7 18.45 3.15v7.95h-1.7q-2.25 0-3.725 1.65t-1.475 3.9v2.05Z"/>
    </Icon>
  );
});

IconMaterialPermDataSettingW100Filled.displayName = 'AmauiIconMaterialPermDataSettingW100Filled';

export default IconMaterialPermDataSettingW100Filled;
