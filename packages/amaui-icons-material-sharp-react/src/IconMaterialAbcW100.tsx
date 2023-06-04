import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAbcW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AbcW100'

      short_name='Abc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.35 14.6V9.4h4.2V11h-.7v-.9h-2.8v3.8h2.8V13h.7v1.6Zm-6.45 0V9.4h3.5q.3 0 .5.2t.2.5v1.3q0 .25-.087.387-.088.138-.363.213.275.075.363.212.087.138.087.388v1.3q0 .3-.2.5t-.5.2Zm.7-2.95h2.8V10.1h-2.8Zm0 2.25h2.8v-1.55h-2.8Zm-7.15.7V9.4h4.2v5.2h-.7v-1.75h-2.8v1.75Zm.7-2.45h2.8V10.1h-2.8Z"/>
    </Icon>
  );
});

IconMaterialAbcW100.displayName = 'AmauiIconMaterialAbcW100';

export default IconMaterialAbcW100;
