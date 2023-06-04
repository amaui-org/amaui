import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoFlashW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlashW100'

      short_name='NoFlash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-3.7-3.7v1.5H3.9V9.8h3.05l.875-.975L2.25 3.25l.5-.5L21.8 21.8ZM4.6 19.4h12.3v-1.5l-3.325-3.325q.025.1.025.187v.188q0 1.2-.825 2.025t-2.025.825q-1.2 0-2.025-.825T7.9 14.95q0-1.2.825-2.025t2.025-.825h.188q.087 0 .187.025L9.5 10.5H4.6Zm13-4.6-.7-.7v-3.6h-3.6l-2.1-2.1h2.1l1.275 1.4H17.6Zm.8-5.55v-2.9h-.5V3.4h2.175L19.1 5.55h1.175Zm-1.5 4.85Zm-3.7.1Zm-2.45 2.9q.9 0 1.525-.638.625-.637.625-1.512 0-.9-.625-1.525-.625-.625-1.525-.625-.875 0-1.512.625-.638.625-.638 1.525 0 .875.638 1.512.637.638 1.512.638Z"/>
    </Icon>
  );
});

IconMaterialNoFlashW100.displayName = 'AmauiIconMaterialNoFlashW100';

export default IconMaterialNoFlashW100;
