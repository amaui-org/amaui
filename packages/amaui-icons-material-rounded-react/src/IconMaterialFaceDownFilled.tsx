import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaceDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceDownFilled'

      short_name='FaceDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-480q-17 0-28.5-11.5T340-520q0-17 11.5-28.5T380-560q17 0 28.5 11.5T420-520q0 17-11.5 28.5T380-480Zm200 0q-17 0-28.5-11.5T540-520q0-17 11.5-28.5T580-560q17 0 28.5 11.5T620-520q0 17-11.5 28.5T580-480Zm-420-80q0-134 93-227t227-93q134 0 227 93t93 227q0 72-28.5 132.5T694-322q-16 14-32 12t-27-13q-11-11-11.5-27t13.5-28q38-33 60.5-80T720-560q0-11-1-21t-3-21q-74 8-143-16.5T452-696q-38 52-93.5 86T240-565q-2 56 21 104.5t62 82.5q14 13 13.5 28.5T325-323q-11 11-27 13t-32-12q-49-45-77.5-105.5T160-560Zm360 379 36-35q12-11 28-11.5t28 11.5q12 12 12 28.5T612-159L508-56q-12 12-28 12t-28-12L348-159q-12-12-12-28.5t12-28.5q12-12 28.5-11.5T405-216l35 35v-126q0-17 11.5-28.5T480-347q17 0 28.5 11.5T520-307v126Z"/>
    </Icon>
  );
});

IconMaterialFaceDownFilled.displayName = 'AmauiIconMaterialFaceDownFilled';

export default IconMaterialFaceDownFilled;
