import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedtimeOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeOffW100Filled'

      short_name='BedtimeOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.5 5.575-1.35-1.35.3-.15q.15-.075.35-.15.425-.175.675.05.25.225.15.725-.05.225-.075.45-.025.225-.05.425ZM21.05 20.95 18.2 18.1q-1.2 1.3-2.85 1.95-1.65.65-3.35.65-1.95 0-3.537-.638-1.588-.637-2.738-1.774-1.15-1.138-1.775-2.738T3.325 12q0-1.775.638-3.325.637-1.55 1.912-2.9L2.45 2.35q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l18.6 18.6q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialBedtimeOffW100Filled.displayName = 'AmauiIconMaterialBedtimeOffW100Filled';

export default IconMaterialBedtimeOffW100Filled;
