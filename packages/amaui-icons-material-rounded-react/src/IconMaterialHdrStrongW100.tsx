import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrStrongW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrStrongW100'

      short_name='HdrStrong'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 14.7q-1.125 0-1.912-.788Q3.1 13.125 3.1 12t.788-1.913Q4.675 9.3 5.8 9.3t1.913.787Q8.5 10.875 8.5 12t-.787 1.912q-.788.788-1.913.788Zm0-.7q.825 0 1.413-.588Q7.8 12.825 7.8 12t-.587-1.413Q6.625 10 5.8 10q-.825 0-1.412.587Q3.8 11.175 3.8 12q0 .825.588 1.412Q4.975 14 5.8 14Zm10.4 2.7q-1.95 0-3.325-1.375Q11.5 13.95 11.5 12q0-1.95 1.375-3.325Q14.25 7.3 16.2 7.3q1.95 0 3.325 1.375Q20.9 10.05 20.9 12q0 1.95-1.375 3.325Q18.15 16.7 16.2 16.7Z"/>
    </Icon>
  );
});

IconMaterialHdrStrongW100.displayName = 'AmauiIconMaterialHdrStrongW100';

export default IconMaterialHdrStrongW100;
