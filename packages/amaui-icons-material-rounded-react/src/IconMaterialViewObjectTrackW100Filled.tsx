import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewObjectTrackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewObjectTrackW100Filled'

      short_name='ViewObjectTrack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M321-212q-45.16 0-77.08-31.89t-31.92-77Q212-366 243.92-398T321-430h398q45.16 0 77.08 31.89t31.92 77Q828-276 796.08-244T719-212H321Zm-80-318q-45.16 0-77.08-31.89t-31.92-77Q132-684 163.92-716T241-748h398q45.16 0 77.08 31.89t31.92 77Q748-594 716.08-562T639-530H241Z"/>
    </Icon>
  );
});

IconMaterialViewObjectTrackW100Filled.displayName = 'AmauiIconMaterialViewObjectTrackW100Filled';

export default IconMaterialViewObjectTrackW100Filled;
