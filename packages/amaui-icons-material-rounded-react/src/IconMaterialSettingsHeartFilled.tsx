import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsHeartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsHeartFilled'

      short_name='SettingsHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482-337q8 0 15-2.5t13-8.5l112-112q17-17 22-41.5t-5-47.5q-10-23-30-37t-45-14q-25 0-45 15.5T482-552q-18-17-37.5-32.5T400-600q-25 0-45.5 13.5T324-550q-10 23-4.5 47.5T342-460l111 112q6 6 13.5 8.5T482-337ZM405-80q-15 0-26-10t-13-25l-12-93q-13-5-24.5-12T307-235l-87 36q-14 6-28 1.5T170-215L96-344q-8-13-5-28t15-24l75-57q-1-7-1-13.5v-27q0-6.5 1-13.5l-75-57q-12-9-15-24t5-28l74-129q8-13 22-17.5t28 1.5l87 36q11-8 23-15t24-12l12-93q2-15 13-25t26-10h150q15 0 26 10t13 25l12 93q13 5 24.5 12t22.5 15l87-36q14-6 28-1.5t22 17.5l74 129q8 13 5 28t-15 24l-75 57q1 7 1 13.5v27q0 6.5-2 13.5l75 57q12 9 15 24t-5 28l-74 128q-8 13-22.5 18t-28.5-1l-85-36q-11 8-23 15t-24 12l-12 93q-2 15-13 25t-26 10H405Z"/>
    </Icon>
  );
});

IconMaterialSettingsHeartFilled.displayName = 'AmauiIconMaterialSettingsHeartFilled';

export default IconMaterialSettingsHeartFilled;
