import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmergencyRecordingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyRecordingW100Filled'

      short_name='EmergencyRecording'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.275 12.6V16q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-3.4l3.125 1.8q.125.075.25.038.125-.038.2-.163.075-.125.038-.263-.038-.137-.163-.212l-3.1-1.8 3.1-1.8q.125-.075.163-.212.037-.138-.038-.263t-.2-.163q-.125-.037-.25.038l-3.125 1.8V8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3.4L7.15 9.6q-.125-.075-.25-.038-.125.038-.2.163-.075.125-.038.263.038.137.163.212l3.1 1.8-3.1 1.8q-.125.075-.163.212-.037.138.038.263t.2.163q.125.037.25-.038Zm-4.85 6.1q-.65 0-1.075-.425-.425-.425-.425-1.075V6.8q0-.65.425-1.075.425-.425 1.075-.425h10.4q.65 0 1.075.425.425.425.425 1.075v4.7L19.4 9.425q.2-.2.438-.088.237.113.237.388v4.55q0 .275-.237.387-.238.113-.438-.087L17.325 12.5v4.7q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialEmergencyRecordingW100Filled.displayName = 'AmauiIconMaterialEmergencyRecordingW100Filled';

export default IconMaterialEmergencyRecordingW100Filled;
