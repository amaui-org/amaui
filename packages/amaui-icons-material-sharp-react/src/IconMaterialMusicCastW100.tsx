import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMusicCastW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicCastW100'

      short_name='MusicCast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M571-212q-44.55 0-76.275-31.725Q463-275.45 463-320q0-44.55 31.725-76.275Q526.45-428 571-428q23 0 44 9t36 27v-372h182v84H679v360q0 44.55-31.725 76.275Q615.55-212 571-212ZM127-320q0-92 35-172.5t95.5-141Q318-694 398.794-729 479.588-764 571-764v28q-85 0-160.984 32.76-75.985 32.76-132.713 89.44-56.728 56.68-89.515 132.08Q155-406.32 155-320h-28Zm168 0q0-57 21.994-107.439 21.993-50.439 59.512-87.945 37.519-37.506 87.544-59.061T571-596v28q-103 0-175.5 72.333Q323-423.333 323-320h-28Z"/>
    </Icon>
  );
});

IconMaterialMusicCastW100.displayName = 'AmauiIconMaterialMusicCastW100';

export default IconMaterialMusicCastW100;
