import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdaptiveAudioMicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdaptiveAudioMicFilled'

      short_name='AdaptiveAudioMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M450-80v-82q-72-11-121-67t-49-131h60q0 58 41 99t99 41q58 0 99-41t41-99h60q0 75-49 131t-121 67v82h-60Zm30-200q-33 0-56.5-23.5T400-360v-120q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480v120q0 33-23.5 56.5T480-280ZM40-400v-63q0-35 14.5-62.5T95-567q40-21 86-32t99-11q26 0 50.5 3t47.5 8q-62 26-103.5 79T223-400H40Zm697 0q-10-67-51.5-119.5T582-599q23-5 47.5-8t50.5-3q53 0 99 11t86 32q26 14 40.5 41.5T920-463v63H737ZM280-640q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm400 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialAdaptiveAudioMicFilled.displayName = 'AmauiIconMaterialAdaptiveAudioMicFilled';

export default IconMaterialAdaptiveAudioMicFilled;
