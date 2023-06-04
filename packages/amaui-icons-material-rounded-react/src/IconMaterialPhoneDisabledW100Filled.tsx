import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabledW100Filled'

      short_name='PhoneDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.2 13.45-.5-.5q.425-.525.887-1.188.463-.662.813-1.262l-2.1-1.925q-.275-.25-.362-.575-.088-.325-.013-.7l.45-2.05q.1-.425.413-.688.312-.262.762-.262h2q.45 0 .75.3t.3.75q0 2.075-.95 4.2t-2.45 3.9Zm-10.85 6.1q-.45 0-.75-.3t-.3-.75v-1.95q0-.45.262-.762.263-.313.688-.413l1.7-.35q.375-.075.65.012.275.088.55.363l2.05 2.15q.95-.525 1.875-1.188Q13 15.7 13.85 14.95L3.55 4.65q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l15.9 15.9q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125l-5.1-5.1q-2.25 2-4.525 3.05-2.275 1.05-4.475 1.05Z"/>
    </Icon>
  );
});

IconMaterialPhoneDisabledW100Filled.displayName = 'AmauiIconMaterialPhoneDisabledW100Filled';

export default IconMaterialPhoneDisabledW100Filled;
