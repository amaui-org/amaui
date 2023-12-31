import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAlertW100Filled'

      short_name='BrightnessAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-308q8.5 0 14.25-5.75T500-328q0-8.5-5.75-14.25T480-348q-8.5 0-14.25 5.75T460-328q0 8.5 5.75 14.25T480-308Zm-14-124h28v-240h-28v240Zm14 332L367.775-212H212v-155.775L100-480l112-112.225V-748h155.775L480-860l112.225 112H748v155.775L860-480 748-367.775V-212H592.225L480-100Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAlertW100Filled.displayName = 'AmauiIconMaterialBrightnessAlertW100Filled';

export default IconMaterialBrightnessAlertW100Filled;
