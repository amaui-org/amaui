import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmergencyRecordingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyRecordingSharpFilled'
      short_name='EmergencyRecording'

      {...props}
    >
      <path d="M9 17H11V13.725L14 15.45L15 13.725L12 12L15 10.275L14 8.55L11 10.275V7H9V10.275L6 8.55L5 10.275L8 12L5 13.725L6 15.45L9 13.725ZM2 20V4H18V10.5L22 6.5V17.5L18 13.5V20Z"/>
    </Icon>
  );
});

export default IconMaterialEmergencyRecordingSharpFilled;
