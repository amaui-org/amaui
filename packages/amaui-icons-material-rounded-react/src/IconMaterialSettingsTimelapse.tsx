import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsTimelapse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsTimelapse'

      short_name='SettingsTimelapse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M735-129q-5 3-10 0t-5-9v-204q0-6 5-9t10 0l171 102q5 3 5 9t-5 9L735-129Zm-200 0q-5 3-10 0t-5-9v-204q0-6 5-9t10 0l171 102q5 3 5 9t-5 9L535-129Zm-55-351ZM440-80h-35q-15 0-26-10t-13-25l-12-93q-13-5-24.5-12T307-235l-87 36q-14 6-28 1.5T170-215L96-344q-8-13-5-28t15-24l75-57q-1-7-1-13.5v-27q0-6.5 1-13.5l-75-57q-12-9-15-24t5-28l74-129q8-13 22-17.5t28 1.5l87 36q11-8 23-15t24-12l12-93q2-15 13-25t26-10h150q15 0 26 10t13 25l12 93q13 5 24.5 12t22.5 15l87-36q14-6 28-1.5t22 17.5l74 129q8 13 5 28t-15 24l-75 57q1 7 1 13.5v33.5q0 10-2 20h-82q2-10 3-20t1-20q-1-19-3-33.5t-6-27.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q24 25 54 42t65 22v184Zm0-266v-91q-8-8-13-19t-5-24q0-25 17.5-42.5T482-540q25 0 42.5 17.5T542-480q0 11-3.5 21.5T527-440h89q3-10 4.5-19.5T622-480q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 48 27.5 84t70.5 50Z"/>
    </Icon>
  );
});

IconMaterialSettingsTimelapse.displayName = 'AmauiIconMaterialSettingsTimelapse';

export default IconMaterialSettingsTimelapse;
