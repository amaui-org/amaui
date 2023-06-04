import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackgroundGridSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundGridSmallW100'

      short_name='BackgroundGridSmall'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 856h119V737H200v119Zm147 0h119V737H347v119Zm147 0h119V737H494v119Zm147 0h119V737H641v119ZM200 415h119V296H200v119Zm0 147h119V443H200v119Zm0 147h119V590H200v119Zm147-294h119V296H347v119Zm0 147h119V443H347v119Zm0 147h119V590H347v119Zm147-294h119V296H494v119Zm0 147h119V443H494v119Zm0 147h119V590H494v119Zm147-294h119V296H641v119Zm0 147h119V443H641v119Zm0 147h119V590H641v119ZM172 884V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialBackgroundGridSmallW100.displayName = 'AmauiIconMaterialBackgroundGridSmallW100';

export default IconMaterialBackgroundGridSmallW100;
