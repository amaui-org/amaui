import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRangeHoodRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RangeHoodRoundedW100Filled'
      short_name='RangeHood'

      {...props}
    >
      <path d="m3.7 13.15 4.6-4.6V4.3h7.4v4.25l4.6 4.6Zm1.1 5.55q-.625 0-1.063-.438Q3.3 17.825 3.3 17.2v-3.35h17.4v3.35q0 .625-.437 1.062-.438.438-1.063.438Zm5.2-2.4h4v-.7h-4Z"/>
    </Icon>
  );
});

export default IconMaterialRangeHoodRoundedW100Filled;
