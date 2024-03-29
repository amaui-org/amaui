import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsSlowMotion = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsSlowMotion'

      short_name='SettingsSlowMotion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M648-84q-64-10-109.5-56T483-250h59q9 40 37.5 68.5T648-144v60Zm60 1v-61q48-11 79-48t31-88q0-51-31-88t-79-48v-61q72 11 121 66.5T878-280q0 75-49 130.5T708-83ZM483-310q10-64 55.5-110T648-476v60q-40 9-68.5 37.5T542-310h-59Zm266 38-95 62q-5 3-10.5.5T638-218v-124q0-6 5.5-8.5t10.5.5l95 62q5 3 5 8t-5 8ZM480-480Zm4 400h-79q-15 0-26-10t-13-25l-12-93q-13-5-24.5-12T307-235l-87 36q-14 6-28 1.5T170-215L96-344q-8-13-5-28t15-24l75-57q-1-7-1-13.5v-27q0-6.5 1-13.5l-75-57q-12-9-15-24t5-28l74-129q8-13 22-17.5t28 1.5l87 36q11-8 23-15t24-12l12-93q2-15 13-25t26-10h150q15 0 26 10t13 25l12 93q13 5 24.5 12t22.5 15l87-36q14-6 28-1.5t22 17.5l74 129q8 13 5 28t-15 24l-46 35q-22-11-45-18.5T714-558l63-48-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q17 17 36.5 30.5T400-275q1 57 23.5 107T484-80Zm-73-279q6-20 14.5-38.5T445-433q-11-8-17-20.5t-6-26.5q0-25 17.5-42.5T482-540q14 0 27 6.5t21 17.5q17-11 35-19.5t38-13.5q-18-32-50-51.5T482-620q-59 0-99.5 41T342-480q0 38 18.5 70.5T411-359Z"/>
    </Icon>
  );
});

IconMaterialSettingsSlowMotion.displayName = 'AmauiIconMaterialSettingsSlowMotion';

export default IconMaterialSettingsSlowMotion;
