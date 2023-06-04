import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineAxisW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineAxisW100Filled'

      short_name='LineAxis'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.6 11.9-5.85 5.85q-.1.1-.237.113-.138.012-.263-.113t-.125-.25q0-.125.125-.25l5.825-5.825Q9.3 11.2 9.6 11.2q.3 0 .525.225L13.6 14.9l2.575-2.975-6.55-6.05L3.75 11.75q-.1.1-.237.113-.138.012-.263-.113t-.125-.25q0-.125.125-.25L9.1 5.4q.2-.2.5-.2t.525.2l6.525 6 3.675-4.25q.1-.125.225-.125t.25.1q.1.1.113.225.012.125-.088.25l-3.65 4.275 3.6 3.325q.125.1.138.238.012.137-.113.262-.1.1-.238.112-.137.013-.262-.087L16.7 12.4l-2.525 2.925q-.2.25-.537.262-.338.013-.563-.212Z"/>
    </Icon>
  );
});

IconMaterialLineAxisW100Filled.displayName = 'AmauiIconMaterialLineAxisW100Filled';

export default IconMaterialLineAxisW100Filled;
