import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmergencyRecordingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyRecordingFilled'

      short_name='EmergencyRecording'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17h2v-3.275l3 1.725 1-1.725L12 12l3-1.725-1-1.725-3 1.725V7H9v3.275L6 8.55l-1 1.725L8 12l-3 1.725 1 1.725 3-1.725Zm-7 3V4h16v6.5l4-4v11l-4-4V20Z"/>
    </Icon>
  );
});

IconMaterialEmergencyRecordingFilled.displayName = 'AmauiIconMaterialEmergencyRecordingFilled';

export default IconMaterialEmergencyRecordingFilled;
