import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintConnectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintConnectW100Filled'

      short_name='PrintConnect'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m718 827 132-132q3.75-4 9.375-4t9.625 4q5 4 4.5 10t-4.5 10L739 845q-9 9-21 9t-21-9l-46-45q-5-4.091-5-9.545 0-5.455 5-10.672Q656 775 661 775t10 5l47 47Zm-396 57q-12.75 0-21.375-8.625T292 854V724H192q-12.75 0-21.375-8.625T162 694V516q0-28.9 19.5-48.45Q201 448 230 448h500q28.9 0 48.45 19.55Q798 487.1 798 516v33q-7.849-1.4-16.424-2.2Q773 546 765 546q-65 0-119.5 32.5T560 668H320v188h223q2 8 5.5 14.5T555 884H322Zm-30-464v-60.177Q292 335 309.625 317.5T352 300h256q24.75 0 42.375 17.625T668 360v60H292Z"/>
    </Icon>
  );
});

IconMaterialPrintConnectW100Filled.displayName = 'AmauiIconMaterialPrintConnectW100Filled';

export default IconMaterialPrintConnectW100Filled;
