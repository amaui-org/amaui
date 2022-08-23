import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayPauseRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayPauseRoundedW100'
      short_name='PlayPause'

      {...props}
    >
      <path d="M5.65 14.95V9.05L9.875 12ZM13.65 15.35V8.65H14.35V15.35ZM17.65 15.35V8.65H18.35V15.35Z"/>
    </Icon>
  );
});

IconMaterialPlayPauseRoundedW100.displayName = 'AmauiIconMaterialPlayPauseRoundedW100';

export default IconMaterialPlayPauseRoundedW100;
