import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTamperDetectionOnRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOnRoundedW100'
      short_name='TamperDetectionOn'

      {...props}
    >
      <path d="M11.675 15.7V15h4.15q.35 0 .575-.225.225-.225.225-.575V3.8q0-.35-.225-.575Q16.175 3 15.825 3h-10.4q-.35 0-.575.225-.225.225-.225.575v3.75h-.7V3.8q0-.65.425-1.075.425-.425 1.075-.425h10.4q.65 0 1.075.425.425.425.425 1.075v4.7l2.125-2.125q.175-.175.4-.088.225.088.225.363v4.675q0 .25-.225.35-.225.1-.4-.075l-2.125-2.1v4.7q0 .65-.425 1.075-.425.425-1.075.425ZM5.5 17.3q-.3 0-.575-.125-.275-.125-.475-.325L2.8 15.175q-.125-.125-.125-.263 0-.137.125-.262t.262-.125q.138 0 .263.125l.95.975v-4.6q0-.15.113-.25.112-.1.237-.1.15 0 .25.1t.1.25V13.3h.7V9.9q0-.15.113-.25.112-.1.237-.1.15 0 .25.1t.1.25v3.4h.7v-2.9q0-.15.113-.25.112-.1.237-.1.15 0 .25.1t.1.25v2.9h.7v-2.15q0-.15.113-.25.112-.1.237-.1.15 0 .25.1t.1.25v4.65q0 .625-.425 1.063-.425.437-1.075.437ZM16.625 3v.8V3v12V3Z"/>
    </Icon>
  );
});

IconMaterialTamperDetectionOnRoundedW100.displayName = 'AmauiIconMaterialTamperDetectionOnRoundedW100';

export default IconMaterialTamperDetectionOnRoundedW100;
