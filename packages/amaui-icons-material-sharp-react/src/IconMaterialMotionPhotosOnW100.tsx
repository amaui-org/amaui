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
      <path d="M480.174-132Q408-132 344.442-159.227q-63.559-27.227-110.575-73.902-47.015-46.675-74.441-109.773Q132-406 132-478q0-34.127 6-67.063Q144-578 156-610l22 22q-9 26-13.5 53.156T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-134-93-227t-227-93q-27 0-53.5 4.5T374-782l-22-22q29-11 59.5-17.5T474-828q73.214 0 137.607 27T724-726.5q48 47.5 76 110.907t28 135.5q0 72.093-27.391 135.651-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348-132 480.174-132ZM242-690q-11 0-19.5-8.5T214-718q0-11 8.5-19.5T242-746q11 0 19.5 8.5T270-718q0 11-8.5 19.5T242-690Zm238 210Z"/>
    </Icon>
  );
});

IconMaterialMotionPhotosOnW100.displayName = 'AmauiIconMaterialMotionPhotosOnW100';

export default IconMaterialMotionPhotosOnW100;
