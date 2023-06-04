import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintAddW100Filled'

      short_name='PrintAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M291.649 884V724H162V448h636v101q-7.849-1.4-16.424-2.2Q773 546 765 546q-65 0-119.5 32.5T560 668H320v188h223q2 8 5.5 14.5T555 884H291.649ZM292 420V300h376v120H292Zm459 495V795H631v-28h120V647h28v120h120v28H779v120h-28Z"/>
    </Icon>
  );
});

IconMaterialPrintAddW100Filled.displayName = 'AmauiIconMaterialPrintAddW100Filled';

export default IconMaterialPrintAddW100Filled;
