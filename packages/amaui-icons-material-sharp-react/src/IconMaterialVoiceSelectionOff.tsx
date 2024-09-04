import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVoiceSelectionOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceSelectionOff'

      short_name='VoiceSelectionOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m855-220-64-64q20-81-3-160t-83-138l56-58q55 54 87 126t32 156q0 36-6.5 71T855-220ZM398-676l-74-146 72-36 136 272v45L398-676ZM820-27 28-820l56-56L876-84l-56 57ZM80-80v-80h179v-28q-46-23-72.5-66.5T160-349v-91h160v-120h80l80 80h-80v120H240v11q0 35 21.5 61.5T316-252l26 3v169H80Z"/>
    </Icon>
  );
});

IconMaterialVoiceSelectionOff.displayName = 'AmauiIconMaterialVoiceSelectionOff';

export default IconMaterialVoiceSelectionOff;
