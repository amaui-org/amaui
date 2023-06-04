import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayPauseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayPauseW100'

      short_name='PlayPause'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 14.95v-5.9L9.875 12Zm8 .4v-6.7h.7v6.7Zm4 0v-6.7h.7v6.7Z"/>
    </Icon>
  );
});

IconMaterialPlayPauseW100.displayName = 'AmauiIconMaterialPlayPauseW100';

export default IconMaterialPlayPauseW100;
