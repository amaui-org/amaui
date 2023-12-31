import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForYouFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForYouFilled'

      short_name='ForYou'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480q65 0 135-10.5T745-520q20-8 37.5 5t17.5 34v286q0 25-14.5 45.5T748-120q-57 19-127.5 29.5T480-80q-70 0-140.5-10.5T212-120q-23-9-37.5-29.5T160-195v-286q0-21 17.5-34t37.5-5q60 19 130 29.5T480-480Zm0-400q66 0 113 47t47 113q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-66 47-113t113-47Z"/>
    </Icon>
  );
});

IconMaterialForYouFilled.displayName = 'AmauiIconMaterialForYouFilled';

export default IconMaterialForYouFilled;
