import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaceUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceUpFilled'

      short_name='FaceUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-480q-17 0-28.5-11.5T340-520q0-17 11.5-28.5T380-560q17 0 28.5 11.5T420-520q0 17-11.5 28.5T380-480Zm200 0q-17 0-28.5-11.5T540-520q0-17 11.5-28.5T580-560q17 0 28.5 11.5T620-520q0 17-11.5 28.5T580-480Zm-420-80q0-134 93-227t227-93q134 0 227 93t93 227q0 72-28.5 132.5T694-322q-16 14-32 12t-27-13q-11-11-11.5-27t13.5-28q38-33 60.5-80T720-560q0-11-1-21t-3-21q-74 8-143-16.5T452-696q-38 52-93.5 86T240-565q-2 56 21 104.5t62 82.5q14 13 13.5 28.5T325-323q-11 11-27 13t-32-12q-49-45-77.5-105.5T160-560Zm280 353-35 35q-12 11-28.5 11.5T348-172q-12-12-12-28t12-28l104-104q12-12 28-12t28 12l104 104q12 12 12 28t-12 28q-12 12-28.5 11.5T555-172l-35-35v127q0 17-11.5 28.5T480-40q-17 0-28.5-11.5T440-80v-127Z"/>
    </Icon>
  );
});

IconMaterialFaceUpFilled.displayName = 'AmauiIconMaterialFaceUpFilled';

export default IconMaterialFaceUpFilled;
