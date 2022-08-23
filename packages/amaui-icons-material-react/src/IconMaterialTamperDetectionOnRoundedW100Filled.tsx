import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTamperDetectionOnRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOnRoundedW100Filled'
      short_name='TamperDetectionOn'

      {...props}
    >
      <path d="M5.475 17.3q-.3 0-.575-.125-.275-.125-.475-.325l-1.65-1.675q-.125-.125-.125-.263 0-.137.125-.262t.263-.125q.137 0 .262.125l.95.975v-4.6q0-.15.113-.25.112-.1.237-.1.15 0 .25.1t.1.25V13.3h.7V9.9q0-.15.113-.25.112-.1.237-.1.15 0 .25.1t.1.25v3.4h.7v-2.9q0-.15.113-.25.112-.1.237-.1.15 0 .25.1t.1.25v2.9h.7v-2.15q0-.15.112-.25.113-.1.238-.1.15 0 .25.1t.1.25v4.65q0 .625-.425 1.063-.425.437-1.075.437Zm6.175-1.6V9.05q0-.625-.437-1.063-.438-.437-1.063-.437H3.9V3.8q0-.65.425-1.075Q4.75 2.3 5.4 2.3h10.4q.65 0 1.075.425.425.425.425 1.075v4.7l2.125-2.125q.175-.175.4-.088.225.088.225.363v4.675q0 .25-.225.35-.225.1-.4-.075L17.3 9.5v4.7q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialTamperDetectionOnRoundedW100Filled.displayName = 'AmauiIconMaterialTamperDetectionOnRoundedW100Filled';

export default IconMaterialTamperDetectionOnRoundedW100Filled;
