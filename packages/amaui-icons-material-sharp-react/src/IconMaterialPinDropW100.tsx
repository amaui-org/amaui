import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinDropW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinDropW100'

      short_name='PinDrop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.3q2.8-2.2 4.225-4.213 1.425-2.012 1.425-3.937 0-1.575-.575-2.688-.575-1.112-1.438-1.8-.862-.687-1.837-1-.975-.312-1.8-.312-.825 0-1.8.312-.975.313-1.837 1-.863.688-1.438 1.8Q6.35 7.575 6.35 9.15q0 1.925 1.425 3.937Q9.2 15.1 12 17.3Zm0 .9q-3.2-2.425-4.775-4.675Q5.65 11.275 5.65 9.15q0-1.6.575-2.812Q6.8 5.125 7.713 4.3q.912-.825 2.037-1.238Q10.875 2.65 12 2.65t2.25.412q1.125.413 2.038 1.238.912.825 1.487 2.038.575 1.212.575 2.812 0 2.125-1.575 4.375T12 18.2Zm0-7.85q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 7.65 12 7.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm-6.35 11v-.7h12.7v.7ZM12 9.15Z"/>
    </Icon>
  );
});

IconMaterialPinDropW100.displayName = 'AmauiIconMaterialPinDropW100';

export default IconMaterialPinDropW100;
