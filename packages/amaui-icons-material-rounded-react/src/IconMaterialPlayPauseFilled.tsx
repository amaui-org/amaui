import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayPauseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayPauseFilled'

      short_name='PlayPause'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 16.2V7.8l6 4.2Zm8-.2V8h2v8Zm4 0V8h2v8Z"/>
    </Icon>
  );
});

IconMaterialPlayPauseFilled.displayName = 'AmauiIconMaterialPlayPauseFilled';

export default IconMaterialPlayPauseFilled;
