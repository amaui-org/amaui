import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdaptiveAudioMic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdaptiveAudioMic'

      short_name='AdaptiveAudioMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M711-480Zm209 80H737q-3-21-9.5-41T711-480h126q-4-7-9-12t-12-9q-26-15-59.5-22t-76.5-7h-3q-20-23-43.5-40T582-599q23-5 47.5-8t50.5-3q53 0 99 11t86 32q26 14 40.5 41.5T920-463v63ZM680-640q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0-40ZM249-480ZM40-400v-63q0-35 14.5-62.5T95-567q40-21 86-32t99-11q26 0 50.5 3t47.5 8q-28 12-51.5 29T283-530h-3q-43 0-76.5 7T144-501q-7 4-12 9t-9 12h126q-10 19-16.5 39t-9.5 41H40Zm240-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T320-760q0-17-11.5-28.5T280-800q-17 0-28.5 11.5T240-760q0 17 11.5 28.5T280-720Zm0-40Zm200 480q-33 0-56.5-23.5T400-360v-120q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480v120q0 33-23.5 56.5T480-280ZM450-80v-82q-72-11-121-67t-49-131h60q0 58 41 99t99 41q58 0 99-41t41-99h60q0 75-49 131t-121 67v82h-60Z"/>
    </Icon>
  );
});

IconMaterialAdaptiveAudioMic.displayName = 'AmauiIconMaterialAdaptiveAudioMic';

export default IconMaterialAdaptiveAudioMic;
