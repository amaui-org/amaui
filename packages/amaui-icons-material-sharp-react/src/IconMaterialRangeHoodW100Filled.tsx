import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRangeHoodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RangeHoodW100Filled'

      short_name='RangeHood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.7 13.15 4.6-4.6V4.3h7.4v4.25l4.6 4.6Zm1.1 5.55q-.625 0-1.063-.438Q3.3 17.825 3.3 17.2v-3.35h17.4v3.35q0 .625-.437 1.062-.438.438-1.063.438Zm5.2-2.4h4v-.7h-4Z"/>
    </Icon>
  );
});

IconMaterialRangeHoodW100Filled.displayName = 'AmauiIconMaterialRangeHoodW100Filled';

export default IconMaterialRangeHoodW100Filled;
