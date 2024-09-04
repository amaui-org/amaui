import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdaptiveAudioMicOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdaptiveAudioMicOffFilled'

      short_name='AdaptiveAudioMicOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M791-56 56-791l56-57 735 736-56 56ZM680-640q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-300-53L213-860q14-10 31-15t36-5q50 0 85 35t35 85q0 19-5 36t-15 31Zm100 413q-33 0-56.5-23.5T400-360v-120q0-17 6-31t17-25l137 137v39q0 33-23.5 56.5T480-280ZM450-80v-82q-72-11-121-67t-49-131h60q0 58 41 99t99 41q53 0 92.5-35t46.5-86l49 50q-19 51-61 86t-97 43v82h-60Zm287-320q-10-67-51.5-119.5T582-599q23-5 47.5-8t50.5-3q53 0 99 11t86 32q26 14 40.5 41.5T920-463v63H737Zm-697 0v-63q0-35 14.5-62.5T95-567q40-21 86-32t99-11q20 0 39 2t37 5l10 9q-57 28-95.5 79T223-400H40Z"/>
    </Icon>
  );
});

IconMaterialAdaptiveAudioMicOffFilled.displayName = 'AmauiIconMaterialAdaptiveAudioMicOffFilled';

export default IconMaterialAdaptiveAudioMicOffFilled;
