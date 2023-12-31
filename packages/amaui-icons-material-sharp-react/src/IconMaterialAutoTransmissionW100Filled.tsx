import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoTransmissionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoTransmissionW100Filled'

      short_name='AutoTransmission'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M173.118-172Q134-172 106.5-199.417 79-226.833 79-266q0-35 23-61.5t57-31.5v-242q-34-5-57-31.5T79-694q0-39.167 27.382-66.583Q133.765-788 172.882-788 212-788 239.5-760.583 267-733.167 267-694q0 35-23 61.5T187-601v107h279v-107q-34-5-57-31.5T386-694q0-39.167 27.382-66.583Q440.765-788 479.882-788 519-788 546.5-760.583 574-733.167 574-694q0 35-23 61.5T494-601v107h280v-107q-34-5-57-31.5T694-694q0-39.167 27.382-66.583Q748.765-788 787.882-788 827-788 854.5-760.583 882-733.167 882-694q0 35-23 61.5T802-601v135H494v107q34 5 57 31.5t23 61.5q0 39.167-27.382 66.583Q519.235-172 480.118-172 441-172 413.5-199.417 386-226.833 386-266q0-35 23-61.5t57-31.5v-107H187v107q34 5 57 31.5t23 61.5q0 39.167-27.382 66.583Q212.235-172 173.118-172Z"/>
    </Icon>
  );
});

IconMaterialAutoTransmissionW100Filled.displayName = 'AmauiIconMaterialAutoTransmissionW100Filled';

export default IconMaterialAutoTransmissionW100Filled;
