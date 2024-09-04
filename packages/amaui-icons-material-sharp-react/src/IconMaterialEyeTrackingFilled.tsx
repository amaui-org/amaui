import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEyeTrackingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EyeTrackingFilled'

      short_name='EyeTracking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-40H40v-200h80v120h120v80Zm480 0v-80h120v-120h80v200H720ZM480-220q-120 0-217.5-71T120-480q45-118 142.5-189T480-740q120 0 217.5 71T840-480q-45 118-142.5 189T480-220Zm0-120q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0-80q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420ZM40-720v-200h200v80H120v120H40Zm800 0v-120H720v-80h200v200h-80Z"/>
    </Icon>
  );
});

IconMaterialEyeTrackingFilled.displayName = 'AmauiIconMaterialEyeTrackingFilled';

export default IconMaterialEyeTrackingFilled;
