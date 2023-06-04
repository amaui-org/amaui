import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiFindW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiFindW100'

      short_name='WifiFind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.15 1.85 9Q4 7.15 6.625 6.225 9.25 5.3 12 5.3t5.388.925Q20.025 7.15 22.15 9l-.5.475q-1.95-1.65-4.5-2.563Q14.6 6 12 6q-2.6 0-4.95.825T2.9 9.05l9.6 9.6Zm9.325-.425L18.7 16.1q-.325.275-.775.438-.45.162-.925.162-1.125 0-1.912-.788Q14.3 15.125 14.3 14t.788-1.913Q15.875 11.3 17 11.3t1.913.787q.787.788.787 1.913 0 .425-.138.85-.137.425-.362.75l2.625 2.625ZM17 16q.825 0 1.413-.588Q19 14.825 19 14t-.587-1.413Q17.825 12 17 12q-.825 0-1.412.587Q15 13.175 15 14q0 .825.588 1.412Q16.175 16 17 16Zm-5 2.65Z"/>
    </Icon>
  );
});

IconMaterialWifiFindW100.displayName = 'AmauiIconMaterialWifiFindW100';

export default IconMaterialWifiFindW100;
