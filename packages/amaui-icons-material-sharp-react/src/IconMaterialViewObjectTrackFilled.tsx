import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewObjectTrackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewObjectTrackFilled'

      short_name='ViewObjectTrack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-160q-58 0-99-41t-41-99q0-58 41-99t99-41h440q58 0 99 41t41 99q0 58-41 99t-99 41H300Zm-80-360q-58 0-99-41t-41-99q0-58 41-99t99-41h440q58 0 99 41t41 99q0 58-41 99t-99 41H220Z"/>
    </Icon>
  );
});

IconMaterialViewObjectTrackFilled.displayName = 'AmauiIconMaterialViewObjectTrackFilled';

export default IconMaterialViewObjectTrackFilled;
