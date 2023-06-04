import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryChangeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryChangeW100Filled'

      short_name='BatteryChange'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M426 685q0 17 6.5 33.5T451 747l10 9q3.5 4 8.75 4t10.25-5q5-3.733 5-8.867Q485 741 481 736l-10-10q-8-8-12.5-18.353Q454 697.294 454 686q0-11 4.5-22t12.5-19l38-38q12.121-12.308 18.561-27.692Q534 563.923 534 547q0-17-6.5-33.5T509 485l-10-10q-4.091-4-9.545-3.5Q484 472 479 477q-3.667 3.818-3.833 8.909Q475 491 479 495l9 10q8 8 13 18.5t5 22.5q0 12-4.5 22T489 586l-37 38q-12 12-19 28t-7 33Zm-69.834 229Q343 914 334.5 905.375T326 884V329q0-12.75 8.625-21.375T356 299h60v-30q0-12.75 8.625-21.375T446 239h68q12.75 0 21.375 8.625T544 269v30h60q12.75 0 21.375 8.625T634 329v555q0 12.75-8.625 21.375T604 914H356.166Z"/>
    </Icon>
  );
});

IconMaterialBatteryChangeW100Filled.displayName = 'AmauiIconMaterialBatteryChangeW100Filled';

export default IconMaterialBatteryChangeW100Filled;
