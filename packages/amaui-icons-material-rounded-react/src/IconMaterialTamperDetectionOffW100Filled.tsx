import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTamperDetectionOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOffW100Filled'

      short_name='TamperDetectionOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.575 20.3q-.3 0-.575-.125-.275-.125-.475-.325L2.675 18l.075-.1q.05-.1.15-.15.1-.05.225-.05.175 0 .275.037.1.038.225.163l.725.725v-4.6q0-.15.113-.25.112-.1.237-.1.15 0 .25.1t.1.25V16.3h.7v-3.4q0-.15.113-.25.112-.1.237-.1.15 0 .25.1t.1.25v3.4h.7v-2.9q0-.15.113-.25.112-.1.237-.1.15 0 .25.1t.1.25v2.9h.7v-2.15q0-.15.113-.25.112-.1.237-.1.15 0 .25.1t.1.25v4.65q0 .625-.425 1.063-.425.437-1.075.437Zm13.475-.05L2.95 4.15l.5-.5 16.1 16.1ZM4 10.55V6.8q0-.55.325-.938.325-.387.825-.512l5.2 5.2Zm16.15 4.7L17.4 12.5v2.25L7.95 5.3h7.95q.625 0 1.063.438.437.437.437 1.062v4.7l2.75-2.75Zm-8.4 3.45v-6.75l5.6 5.6q-.125.5-.513.825-.387.325-.937.325Z"/>
    </Icon>
  );
});

IconMaterialTamperDetectionOffW100Filled.displayName = 'AmauiIconMaterialTamperDetectionOffW100Filled';

export default IconMaterialTamperDetectionOffW100Filled;
