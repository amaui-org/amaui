import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallSplitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSplitW100'

      short_name='CallSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.95 10.55-.5-.5 4.7-4.7H15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.6q.325 0 .538.212.212.213.212.538V9q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V5.85ZM12 19.35q-.15 0-.25-.1t-.1-.25v-6.9l-6.3-6.25V9q0 .15-.1.25t-.25.1q-.15 0-.25-.1T4.65 9V5.4q0-.325.213-.538.212-.212.537-.212H9q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.85l6.5 6.45V19q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCallSplitW100.displayName = 'AmauiIconMaterialCallSplitW100';

export default IconMaterialCallSplitW100;
