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
      <path d="M12 18.2q-3.2-2.425-4.775-4.675Q5.65 11.275 5.65 9.15q0-1.6.575-2.812Q6.8 5.125 7.713 4.3q.912-.825 2.037-1.238Q10.875 2.65 12 2.65t2.25.412q1.125.413 2.038 1.238.912.825 1.487 2.038.575 1.212.575 2.812 0 2.125-1.575 4.375T12 18.2Zm0-7.85q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 7.65 12 7.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm-6.35 11v-.7h12.7v.7Z"/>
    </Icon>
  );
});

IconMaterialPinDropW100Filled.displayName = 'AmauiIconMaterialPinDropW100Filled';

export default IconMaterialPinDropW100Filled;
