import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartCardReaderOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartCardReaderOffW100Filled'

      short_name='SmartCardReaderOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M354-479q29 0 43-25.5t19-49.5l-85-85v137q0 10 6.5 16.5T354-479ZM162-182q-13 0-21.5-8.5T132-212v-26q0-25 17.5-42.5T192-298h480l-80-80H273q-13 0-21.5-8.5T243-408v-319L100-870q-4-4-4.5-9.5T100-890q5-5 10-5t10 5l742 742q4 4 4.5 9.5T862-128q-5 5-10 5t-10-5l-54-54H162Zm504-273-99-100q17-5 27.5-18t10.5-31q0-21-15-36t-36-15q-17 0-30.5 10.5T505-618L299-827q-14-14-6.5-32.5T320-878h337q26 0 43 17t17 43v342q0 20-18.5 27.5T666-455Z"/>
    </Icon>
  );
});

IconMaterialSmartCardReaderOffW100Filled.displayName = 'AmauiIconMaterialSmartCardReaderOffW100Filled';

export default IconMaterialSmartCardReaderOffW100Filled;
