import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandheldControllerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandheldControllerW100Filled'

      short_name='HandheldController'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M453.33-282Q392-282 349-325t-42-104q-88 0-151.5-56.5T92-627q0-20.63 14.69-35.31Q121.38-677 142-677h175v-83h-85v-28h197v28h-84v83h139q12 0 22.88 4.43Q517.75-668.13 526-660l310 305q32 31.9 32 75.95Q868-235 836-203t-76.78 32q-44.79 0-77.22-32l-80-79H453.33ZM452-429H335q-1 50 33.52 84.5Q403.05-310 453-310h121L452-429Z"/>
    </Icon>
  );
});

IconMaterialHandheldControllerW100Filled.displayName = 'AmauiIconMaterialHandheldControllerW100Filled';

export default IconMaterialHandheldControllerW100Filled;
