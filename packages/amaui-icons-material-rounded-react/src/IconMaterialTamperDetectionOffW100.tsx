import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTamperDetectionOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOffW100'

      short_name='TamperDetectionOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.15 15.25 17.4 12.5v2.25l-.7-.7V6.8q0-.35-.225-.575Q16.25 6 15.9 6H8.65l-.7-.7h7.95q.625 0 1.063.438.437.437.437 1.062v4.7l2.75-2.75Zm-15-9.9L5.8 6h-.3q-.35 0-.575.225Q4.7 6.45 4.7 6.8v3.75H4V6.8q0-.55.325-.938.325-.387.825-.512Zm6.6 13.35V18h4.15q.35 0 .575-.225.225-.225.225-.575v-.3l.65.65q-.125.5-.513.825-.387.325-.937.325Zm7.3 1.55L2.95 4.15l.5-.5 16.1 16.1ZM5.5 20.3q-.3 0-.575-.125-.275-.125-.475-.325L2.6 18l.075-.1q.05-.1.15-.15.1-.05.225-.05.175 0 .288.037.112.038.212.163l.725.725v-4.6q0-.15.113-.25.112-.1.237-.1.15 0 .25.1t.1.25V16.3h.7v-3.4q0-.15.113-.25.112-.1.237-.1.15 0 .25.1t.1.25v3.4h.7v-2.9q0-.15.113-.25.112-.1.237-.1.15 0 .25.1t.1.25v2.9h.7v-2.15q0-.15.113-.25.112-.1.237-.1.15 0 .25.1t.1.25v4.65q0 .625-.425 1.063-.425.437-1.075.437Zm5.55-9.05Zm1.625-1.225Z"/>
    </Icon>
  );
});

IconMaterialTamperDetectionOffW100.displayName = 'AmauiIconMaterialTamperDetectionOffW100';

export default IconMaterialTamperDetectionOffW100;
