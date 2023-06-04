import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoFlashW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlashW100Filled'

      short_name='NoFlash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-3.7-3.7v1.5H3.9V9.8h3.05l.875-.975L2.25 3.25l.5-.5L21.8 21.8ZM11.125 12.125q-.1-.025-.187-.025h-.188q-1.2 0-2.025.825T7.9 14.95q0 1.2.825 2.025t2.025.825q1.2 0 2.025-.825t.825-2.025v-.188q0-.087-.025-.187ZM10.75 17.1q-.875 0-1.512-.638-.638-.637-.638-1.512 0-.9.638-1.525.637-.625 1.512-.625.9 0 1.525.625.625.625.625 1.525 0 .875-.625 1.512-.625.638-1.525.638Zm6.85-2.3-6.4-6.4h2.1l1.275 1.4H17.6Zm.8-5.55v-2.9h-.5V3.4h2.175L19.1 5.55h1.175Z"/>
    </Icon>
  );
});

IconMaterialNoFlashW100Filled.displayName = 'AmauiIconMaterialNoFlashW100Filled';

export default IconMaterialNoFlashW100Filled;
