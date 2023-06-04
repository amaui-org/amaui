import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRangeHoodW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RangeHoodW100'

      short_name='RangeHood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.625 0-1.063-.438Q3.3 17.825 3.3 17.2v-3.4q0-.125.05-.238.05-.112.175-.237L8.3 8.55V4.3h7.4v4.25l4.55 4.55q.2.2.325.475.125.275.125.575v3.05q0 .625-.437 1.062-.438.438-1.063.438Zm-.15-5.55h14.7L15 8.8V5H9v3.8ZM4.8 18h14.4q.35 0 .575-.225Q20 17.55 20 17.2v-3.35H4v3.35q0 .35.225.575Q4.45 18 4.8 18Zm5.2-1.7v-.7h4v.7Z"/>
    </Icon>
  );
});

IconMaterialRangeHoodW100.displayName = 'AmauiIconMaterialRangeHoodW100';

export default IconMaterialRangeHoodW100;
