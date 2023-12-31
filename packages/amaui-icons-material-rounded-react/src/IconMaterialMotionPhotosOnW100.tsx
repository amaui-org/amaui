import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotionPhotosOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionPhotosOnW100'

      short_name='MotionPhotosOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.174-132Q408-132 344.442-159.227q-63.559-27.227-110.575-73.902-47.015-46.675-74.441-109.773Q132-406 132-478q0-30 5-59t14-58q2-6 7.5-9t10.81-1q5.69 2 7.69 8.5t0 12.5q-7.846 25.612-12.423 51.806T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-134-93-227t-227-93q-25.532 0-50.532 4-25 4-49.468 12-6 2-12-.5t-9-7.5q-3-5-.5-10t7.5-7q26-9 53-14t55.199-5q73.142 0 137.472 27Q676-774 724-726.5t76 110.907q28 63.407 28 135.5t-27.391 135.651q-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348-132 480.174-132ZM242-690q-11 0-19.5-8.5T214-718q0-11 8.5-19.5T242-746q11 0 19.5 8.5T270-718q0 11-8.5 19.5T242-690Zm238 210Z"/>
    </Icon>
  );
});

IconMaterialMotionPhotosOnW100.displayName = 'AmauiIconMaterialMotionPhotosOnW100';

export default IconMaterialMotionPhotosOnW100;
