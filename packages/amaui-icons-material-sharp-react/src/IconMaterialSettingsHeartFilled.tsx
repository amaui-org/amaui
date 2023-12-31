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
      <path d="m482-320 140-140q17-17 22-41.5t-5-47.5q-10-23-30-37t-45-14q-25 0-45 15.5T482-552q-18-17-37.5-32.5T400-600q-25 0-45.5 13.5T324-550q-10 23-4.5 47.5T342-460l140 140ZM370-80l-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Z"/>
    </Icon>
  );
});

IconMaterialSettingsHeartFilled.displayName = 'AmauiIconMaterialSettingsHeartFilled';

export default IconMaterialSettingsHeartFilled;
