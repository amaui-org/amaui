import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRespiratoryRateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RespiratoryRateW100'

      short_name='RespiratoryRate'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m610 800 56-55v-49 49l-56 55Zm139 0-55-56v-48 48l55 56ZM480 576ZM132 462V308h696v280h-28V336H160v126h-28Zm0 382V690h28v126h252v28H132Zm390 120q-12.5 0-21.25-8.75T492 934V814l49-126q3.36-8.846 11.013-14.423Q559.667 668 569 668h97V562h28v106h95q9.091 0 16.545 5.5Q813 679 817 687l51 127v120q0 12.5-8.75 21.25T838 964h-92q-12.5 0-21.25-8.75T716 934v-58h28v60h96V819l-49-123h-97v48l55 56-20 20-49.5-50-49.5 50-20-20 56-55v-49h-99l-47 123v117h96v-60h28v54q0 14.167-9.917 24.083Q624.167 964 610 964h-88Zm158-148ZM132 590v-28h76l72 143 159-320 104 207q-7 2-13.632 4.074T517 602l-78-154-160 320-88-178h-59Z"/>
    </Icon>
  );
});

IconMaterialRespiratoryRateW100.displayName = 'AmauiIconMaterialRespiratoryRateW100';

export default IconMaterialRespiratoryRateW100;
