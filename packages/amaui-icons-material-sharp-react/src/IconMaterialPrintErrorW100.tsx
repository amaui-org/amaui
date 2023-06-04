import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintErrorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintErrorW100'

      short_name='PrintError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M292 884V724H162V448h623v28H190v220h102v-56h354v28H320v188h326v28H292Zm0-436V300h376v148h-28V328H320v120h-28Zm468.035 436Q749 884 741.5 876.535t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5ZM746 712V564h28v148h-28ZM190 476h595-595Z"/>
    </Icon>
  );
});

IconMaterialPrintErrorW100.displayName = 'AmauiIconMaterialPrintErrorW100';

export default IconMaterialPrintErrorW100;
