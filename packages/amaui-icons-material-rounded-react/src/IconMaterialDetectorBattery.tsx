import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDetectorBattery = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorBattery'

      short_name='DetectorBattery'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 19h8v-3H9ZM5 6h14V5H5v1Zm3.4 3h7.2l.3-1H8.1l.3 1Zm0 2q-.65 0-1.175-.387Q6.7 10.225 6.5 9.6L6 8H5q-.825 0-1.413-.588Q3 6.825 3 6V3h18v3q0 .825-.587 1.412Q19.825 8 19 8h-1l-.65 1.7q-.225.575-.725.937-.5.363-1.125.363ZM5 6V5v1Zm1 15q-.425 0-.713-.288Q5 20.425 5 20v-5q0-.425.287-.713Q5.575 14 6 14h12q.425 0 .712.287.288.288.288.713v1h2v3h-2v1q0 .425-.288.712Q18.425 21 18 21Z"/>
    </Icon>
  );
});

IconMaterialDetectorBattery.displayName = 'AmauiIconMaterialDetectorBattery';

export default IconMaterialDetectorBattery;
