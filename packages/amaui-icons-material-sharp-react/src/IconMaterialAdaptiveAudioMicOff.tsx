import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdaptiveAudioMicOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdaptiveAudioMicOff'

      short_name='AdaptiveAudioMicOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M791-56 56-791l56-57 735 736-56 56Zm-80-424Zm209 80H737q-3-21-9.5-41T711-480h126q-4-7-9-12t-12-9q-26-15-59.5-22t-76.5-7h-3q-20-23-43.5-40T582-599q23-5 47.5-8t50.5-3q53 0 99 11t86 32q26 14 40.5 41.5T920-463v63ZM680-640q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0-40ZM249-480ZM40-400v-63q0-35 14.5-62.5T95-567q40-21 86-32t99-11q13 0 25.5.5T331-607v80q-13-2-25.5-2.5T280-530q-43 0-76.5 7T144-501q-7 4-12 9t-9 12h126q-10 19-16.5 39t-9.5 41H40Zm340-293L213-860q14-10 31-15t36-5q50 0 85 35t35 85q0 19-5 36t-15 31Zm100 413q-33 0-56.5-23.5T400-360v-120q0-17 6-31t17-25l137 137v39q0 33-23.5 56.5T480-280ZM450-80v-82q-72-11-121-67t-49-131h60q0 58 41 99t99 41q53 0 92.5-35t46.5-86l49 50q-19 51-61 86t-97 43v82h-60Z"/>
    </Icon>
  );
});

IconMaterialAdaptiveAudioMicOff.displayName = 'AmauiIconMaterialAdaptiveAudioMicOff';

export default IconMaterialAdaptiveAudioMicOff;
