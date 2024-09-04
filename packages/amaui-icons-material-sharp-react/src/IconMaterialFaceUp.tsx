import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaceUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceUp'

      short_name='FaceUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-480q-17 0-28.5-11.5T340-520q0-17 11.5-28.5T380-560q17 0 28.5 11.5T420-520q0 17-11.5 28.5T380-480Zm200 0q-17 0-28.5-11.5T540-520q0-17 11.5-28.5T580-560q17 0 28.5 11.5T620-520q0 17-11.5 28.5T580-480ZM416-791q-54 15-95 51.5T258-652q53-16 94-52.5t64-86.5Zm57-9q33 57 90.5 89.5T687-680q-33-57-90.5-89.5T473-800ZM355-355l-58 58q-63-44-100-112.5T160-560q0-134 93-227t227-93q134 0 227 93t93 227q0 82-37 150.5T663-297l-58-58q52-32 83.5-85.5T720-560q0-11-1-21t-3-21q-74 8-143-16.5T452-696q-38 52-93.5 86T240-565q-2 67 30 122.5t85 87.5Zm85 315v-167l-64 63-56-56 160-160 160 160-56 56-64-63v167h-80Zm-24-751Zm57-9Z"/>
    </Icon>
  );
});

IconMaterialFaceUp.displayName = 'AmauiIconMaterialFaceUp';

export default IconMaterialFaceUp;
