import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsVideoCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsVideoCameraFilled'

      short_name='SettingsVideoCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-80H560q-17 0-28.5-11.5T520-120v-240q0-17 11.5-28.5T560-400h240q17 0 28.5 11.5T840-360v80l63-63q5-5 11-2.5t6 9.5v192q0 7-6 9.5t-11-2.5l-63-63v80q0 17-11.5 28.5T800-80Zm-360 0h-35q-15 0-26-10t-13-25l-12-93q-13-5-24.5-12T307-235l-87 36q-14 6-28 1.5T170-215L96-344q-8-13-5-28t15-24l75-57q-1-7-1-13.5v-27q0-6.5 1-13.5l-75-57q-12-9-15-24t5-28l74-129q8-13 22-17.5t28 1.5l87 36q11-8 23-15t24-12l12-93q2-15 13-25t26-10h150q15 0 26 10t13 25l12 93q13 5 24.5 12t22.5 15l87-36q14-6 28-1.5t22 17.5l74 129q8 13 5 28t-15 24l-75 57q1 7 1 13.5v13.5H622q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 48 27 84t71 50v266Z"/>
    </Icon>
  );
});

IconMaterialSettingsVideoCameraFilled.displayName = 'AmauiIconMaterialSettingsVideoCameraFilled';

export default IconMaterialSettingsVideoCameraFilled;
