import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiFindW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiFindW100Filled'

      short_name='WifiFind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.325 18.725 18.7 16.1q-.325.275-.775.438-.45.162-.925.162-1.125 0-1.912-.788Q14.3 15.125 14.3 14t.788-1.913Q15.875 11.3 17 11.3t1.913.787q.787.788.787 1.913 0 .425-.138.85-.137.425-.362.75l2.625 2.625ZM17 16q.825 0 1.413-.588Q19 14.825 19 14t-.587-1.413Q17.825 12 17 12q-.825 0-1.412.587Q15 13.175 15 14q0 .825.588 1.412Q16.175 16 17 16Zm-5 3.15L1.85 9Q4 7.15 6.625 6.225 9.25 5.3 12 5.3t5.388.925Q20.025 7.15 22.15 9l-1.7 1.75q-.625-.625-1.475-1.038Q18.125 9.3 17 9.3q-1.95 0-3.325 1.375Q12.3 12.05 12.3 14q0 1.1.413 1.962.412.863 1.012 1.438Z"/>
    </Icon>
  );
});

IconMaterialWifiFindW100Filled.displayName = 'AmauiIconMaterialWifiFindW100Filled';

export default IconMaterialWifiFindW100Filled;
