import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVisibilityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityW100Filled'

      short_name='Visibility'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.9q1.425 0 2.413-.988.987-.987.987-2.412 0-1.425-.987-2.413Q13.425 8.1 12 8.1q-1.425 0-2.412.987-.988.988-.988 2.413 0 1.425.988 2.412.987.988 2.412.988Zm0-.7q-1.125 0-1.912-.788Q9.3 12.625 9.3 11.5t.788-1.913Q10.875 8.8 12 8.8t1.913.787q.787.788.787 1.913t-.787 1.912q-.788.788-1.913.788Zm0 3.5q-3.125 0-5.7-1.688-2.575-1.687-3.9-4.512 1.325-2.825 3.9-4.513Q8.875 5.3 12 5.3t5.7 1.687q2.575 1.688 3.9 4.513-1.325 2.825-3.9 4.512Q15.125 17.7 12 17.7Z"/>
    </Icon>
  );
});

IconMaterialVisibilityW100Filled.displayName = 'AmauiIconMaterialVisibilityW100Filled';

export default IconMaterialVisibilityW100Filled;
