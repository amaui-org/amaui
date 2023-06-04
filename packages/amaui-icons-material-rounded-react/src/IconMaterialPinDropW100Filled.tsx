import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinDropW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinDropW100Filled'

      short_name='PinDrop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.95q-.15 0-.287-.037-.138-.038-.263-.138-2.925-2.325-4.362-4.463Q5.65 11.175 5.65 9.15q0-1.6.575-2.812Q6.8 5.125 7.713 4.3q.912-.825 2.037-1.238Q10.875 2.65 12 2.65t2.25.412q1.125.413 2.038 1.238.912.825 1.487 2.038.575 1.212.575 2.812 0 2.025-1.437 4.162-1.438 2.138-4.363 4.463-.125.1-.262.138-.138.037-.288.037Zm0-7.6q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 7.65 12 7.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm-6 11q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialPinDropW100Filled.displayName = 'AmauiIconMaterialPinDropW100Filled';

export default IconMaterialPinDropW100Filled;
