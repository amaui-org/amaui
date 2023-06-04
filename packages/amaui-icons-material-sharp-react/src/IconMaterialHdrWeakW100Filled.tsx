import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrWeakW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrWeakW100Filled'

      short_name='HdrWeak'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 14.7q-1.125 0-1.912-.788Q3.1 13.125 3.1 12t.788-1.913Q4.675 9.3 5.8 9.3t1.913.787Q8.5 10.875 8.5 12t-.787 1.912q-.788.788-1.913.788Zm10.4 2q-1.95 0-3.325-1.375Q11.5 13.95 11.5 12q0-1.95 1.375-3.325Q14.25 7.3 16.2 7.3q1.95 0 3.325 1.375Q20.9 10.05 20.9 12q0 1.95-1.375 3.325Q18.15 16.7 16.2 16.7Zm0-.7q1.65 0 2.825-1.175Q20.2 13.65 20.2 12q0-1.65-1.175-2.825Q17.85 8 16.2 8q-1.65 0-2.825 1.175Q12.2 10.35 12.2 12q0 1.65 1.175 2.825Q14.55 16 16.2 16Z"/>
    </Icon>
  );
});

IconMaterialHdrWeakW100Filled.displayName = 'AmauiIconMaterialHdrWeakW100Filled';

export default IconMaterialHdrWeakW100Filled;
