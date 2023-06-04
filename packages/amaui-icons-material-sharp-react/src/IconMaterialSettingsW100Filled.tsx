import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsW100Filled'

      short_name='Settings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.4 20.7-.35-2.8q-.525-.15-1.163-.5-.637-.35-1.062-.75l-2.575 1.1-1.6-2.8 2.225-1.675q-.05-.3-.088-.625-.037-.325-.037-.625 0-.275.037-.587l.088-.713L3.65 9.05l1.6-2.75L7.8 7.375q.5-.425 1.087-.763.588-.337 1.138-.512l.375-2.8h3.2l.35 2.825q.65.225 1.138.512.487.288 1.012.738L18.75 6.3l1.6 2.75-2.325 1.75q.1.35.113.638.012.287.012.562 0 .25-.025.537-.025.288-.1.713l2.275 1.7-1.6 2.8-2.6-1.125q-.525.45-1.05.762-.525.313-1.1.488L13.6 20.7Zm1.55-6.5q.925 0 1.562-.638.638-.637.638-1.562t-.638-1.562Q12.875 9.8 11.95 9.8t-1.563.638Q9.75 11.075 9.75 12t.637 1.562q.638.638 1.563.638Z"/>
    </Icon>
  );
});

IconMaterialSettingsW100Filled.displayName = 'AmauiIconMaterialSettingsW100Filled';

export default IconMaterialSettingsW100Filled;
