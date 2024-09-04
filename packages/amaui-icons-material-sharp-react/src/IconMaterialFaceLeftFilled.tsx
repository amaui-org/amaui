import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaceLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceLeftFilled'

      short_name='FaceLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-480q-17 0-28.5-11.5T300-520q0-17 11.5-28.5T340-560q17 0 28.5 11.5T380-520q0 17-11.5 28.5T340-480Zm200 0q-17 0-28.5-11.5T500-520q0-17 11.5-28.5T540-560q17 0 28.5 11.5T580-520q0 17-11.5 28.5T540-480ZM297-297q-63-44-100-112.5T160-560q0-134 93-227t227-93q134 0 227 93t93 227q0 82-37 150.5T663-297l-58-58q53-32 85-87.5T720-565q-63-11-118.5-45T508-696q-52 53-121 77.5T244-602q-2 11-3 21t-1 21q0 66 31.5 119.5T355-355l-58 58ZM480-40 320-200l160-160 56 56-63 64h167v80H473l63 64-56 56Z"/>
    </Icon>
  );
});

IconMaterialFaceLeftFilled.displayName = 'AmauiIconMaterialFaceLeftFilled';

export default IconMaterialFaceLeftFilled;
