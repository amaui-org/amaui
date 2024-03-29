import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsSlowMotionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsSlowMotionFilled'

      short_name='SettingsSlowMotion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M648-84q-64-10-109.5-56T483-250h59q9 40 37.5 68.5T648-144v60Zm60 1v-61q48-11 79-48t31-88q0-51-31-88t-79-48v-61q72 11 121 66.5T878-280q0 75-49 130.5T708-83ZM483-310q10-64 55.5-110T648-476v60q-40 9-68.5 37.5T542-310h-59Zm266 38-95 62q-5 3-10.5.5T638-218v-124q0-6 5.5-8.5t10.5.5l95 62q5 3 5 8t-5 8ZM484-80h-79q-15 0-26-10t-13-25l-12-93q-13-5-24.5-12T307-235l-87 36q-14 6-28 1.5T170-215L96-344q-8-13-5-28t15-24l75-57q-1-7-1-13.5v-27q0-6.5 1-13.5l-75-57q-12-9-15-24t5-28l74-129q8-13 22-17.5t28 1.5l87 36q11-8 22.5-15t24.5-12l12-93q2-15 13-25t26-10h150q15 0 26 10t13 25l12 93q13 5 24.5 12t22.5 15l87-36q14-6 28-1.5t22 17.5l74 129q8 13 5 28t-15 24l-46 35q-30-15-62-23t-66-8q-20 0-38.5 3.5T604-548q-19-33-51.5-52.5T482-620q-58 0-99 41t-41 99q0 38 18.5 70t50.5 51q-6 20-8.5 41.5T400-275q1 56 22.5 106.5T484-80Z"/>
    </Icon>
  );
});

IconMaterialSettingsSlowMotionFilled.displayName = 'AmauiIconMaterialSettingsSlowMotionFilled';

export default IconMaterialSettingsSlowMotionFilled;
