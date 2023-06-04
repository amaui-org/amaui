import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanToolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolW100Filled'

      short_name='PanTool'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.55 22q-.625 0-1.238-.25-.612-.25-.962-.6l-5.375-5.4q-.275-.275-.25-.688.025-.412.275-.687.275-.325.663-.388.387-.062.762.138l3.675 1.95v-10.9q0-.45.313-.763.312-.312.762-.312t.763.312q.312.313.312.763v6.475q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V2.875q0-.45.313-.763.312-.312.762-.312t.763.312q.312.313.312.763v8.775q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V3.775q0-.45.313-.763.312-.312.762-.312t.762.312q.313.313.313.763v7.875q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V6.525q0-.45.313-.763.312-.312.762-.312t.763.312q.312.313.312.763V19.3q0 1.125-.787 1.912Q19.225 22 18.1 22Z"/>
    </Icon>
  );
});

IconMaterialPanToolW100Filled.displayName = 'AmauiIconMaterialPanToolW100Filled';

export default IconMaterialPanToolW100Filled;
