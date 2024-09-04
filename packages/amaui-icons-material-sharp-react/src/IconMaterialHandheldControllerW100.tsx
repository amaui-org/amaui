import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandheldControllerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandheldControllerW100'

      short_name='HandheldController'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M453.33-282Q392-282 349-325t-42-104q-88 0-151.5-56.5T92-627q0-20.63 14.69-35.31Q121.38-677 142-677h175v-83h-85v-28h197v28h-84v83h139q12 0 22.88 4.43Q517.75-668.13 526-660l310 305q32 31.9 32 75.95Q868-235 836-203t-76.78 32q-44.79 0-77.22-32l-80-79H453.33ZM452-429H335q-1 50 33.52 84.5Q403.05-310 453-310h121L452-429Zm44-220H142q-9 0-15.5 6.5T120-627q0 73 55.5 121.5T306-457h158l238 234q24 23 57.41 23 33.42 0 57-23.17 23.59-23.17 23.59-56T816-335L496-649Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialHandheldControllerW100.displayName = 'AmauiIconMaterialHandheldControllerW100';

export default IconMaterialHandheldControllerW100;
