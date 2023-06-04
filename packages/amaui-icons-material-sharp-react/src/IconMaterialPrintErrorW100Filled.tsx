import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintErrorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintErrorW100Filled'

      short_name='PrintError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M760.035 884Q749 884 741.5 876.535t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5ZM746 712V564h28v148h-28ZM292 884V724H162V448h623v28H646v192H320v188h326v28H292Zm0-464V300h376v120H292Z"/>
    </Icon>
  );
});

IconMaterialPrintErrorW100Filled.displayName = 'AmauiIconMaterialPrintErrorW100Filled';

export default IconMaterialPrintErrorW100Filled;
