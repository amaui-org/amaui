import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRespiratoryRate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RespiratoryRate'

      short_name='RespiratoryRate'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m574 800 66-67v-37 37l-66 67Zm212 0-66-67v-37 37l66 67ZM480 576ZM80 456V256h800v300h-80V336H160v120H80Zm0 440V696h80v120h220v80H80Zm420 120q-25 0-42.5-17.5T440 956V809l53-141q9-23 29.5-37.5T568 616h72v-80h80v80h72q25 0 45.5 14.5T867 668l53 141v147q0 25-17.5 42.5T860 1016h-80q-25 0-42.5-17.5T720 956v-60h80v40h40V823l-48-127h-72v37l66 67-56 56-50-50-50 50-56-56 66-67v-37h-72l-48 127v113h40v-40h80v60q0 25-17.5 42.5T580 1016h-80Zm180-200ZM80 616v-80h144l56 111 134-271h51l90 181q-21 2-39.5 9T481 586l-41-80-135 270h-50l-80-160H80Z"/>
    </Icon>
  );
});

IconMaterialRespiratoryRate.displayName = 'AmauiIconMaterialRespiratoryRate';

export default IconMaterialRespiratoryRate;
