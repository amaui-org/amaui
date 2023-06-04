import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkRingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkRingW100Filled'

      short_name='PhonelinkRing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.55 16.4-.5-.5q.775-.775 1.188-1.787.412-1.013.412-2.113t-.412-2.113Q19.825 8.875 19.05 8.1l.5-.5q.875.875 1.338 2.013.462 1.137.462 2.387t-.462 2.387q-.463 1.138-1.338 2.013Zm-2.05-2.05-.5-.5q.425-.35.7-.825.275-.475.275-1.025 0-.55-.275-1.025-.275-.475-.7-.825l.5-.5q.525.45.85 1.05.325.6.325 1.3 0 .7-.325 1.3-.325.6-.85 1.05ZM6.3 21.7V2.3h11.4v4.6H17V5.35H7v13.3h10V17.1h.7v4.6Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkRingW100Filled.displayName = 'AmauiIconMaterialPhonelinkRingW100Filled';

export default IconMaterialPhonelinkRingW100Filled;
