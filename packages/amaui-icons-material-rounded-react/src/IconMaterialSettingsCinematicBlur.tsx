import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsCinematicBlur = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsCinematicBlur'

      short_name='SettingsCinematicBlur'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-80q-25 0-42.5-17.5T520-140v-200q0-18 9-32t24-22l27 54h60l-30-60h60l30 60h60l-30-60h60l30 60h60l-30-60h10q25 0 42.5 17.5T920-340v200q0 25-17.5 42.5T860-80H580Zm0-60h280v-140H580v140ZM480-480Zm2-140q-58 0-99 41t-41 99q0 48 27 84t71 50v-90q-8-8-13-20.5t-5-23.5q0-25 17.5-42.5T482-540q25 0 42 17.5t17 42.5h81q0-58-41-99t-99-41ZM440-80h-35q-15 0-26-10t-13-25l-12-93q-13-5-24.5-12T307-235l-87 36q-14 6-28 1.5T170-215L96-344q-8-13-5-28t15-24l75-57q-1-7-1-13.5v-27q0-6.5 1-13.5l-75-57q-12-9-15-24t5-28l74-129q8-13 22-17.5t28 1.5l87 36q11-8 23-15t24-12l12-93q2-15 13-25t26-10h150q15 0 26 10t13 25l12 93q13 5 24.5 12t22.5 15l87-36q14-6 28-1.5t22 17.5l74 129q8 13 5 28t-15 24l-75 57q1 7 1 13.5v13.5h-80q-1-19-3-33.5t-6-27.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q24 25 54 42t65 22v184Z"/>
    </Icon>
  );
});

IconMaterialSettingsCinematicBlur.displayName = 'AmauiIconMaterialSettingsCinematicBlur';

export default IconMaterialSettingsCinematicBlur;
