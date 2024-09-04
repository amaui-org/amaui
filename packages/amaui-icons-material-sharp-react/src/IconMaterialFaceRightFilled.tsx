import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaceRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceRightFilled'

      short_name='FaceRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-480q-17 0-28.5-11.5T580-520q0-17 11.5-28.5T620-560q17 0 28.5 11.5T660-520q0 17-11.5 28.5T620-480Zm-200 0q-17 0-28.5-11.5T380-520q0-17 11.5-28.5T420-560q17 0 28.5 11.5T460-520q0 17-11.5 28.5T420-480ZM297-297q-63-44-100-112.5T160-560q0-134 93-227t227-93q134 0 227 93t93 227q0 82-37 150.5T663-297l-58-58q52-32 83.5-85.5T720-560q0-11-1-21t-3-21q-74 8-143-16.5T452-696q-38 52-93.5 86T240-565q-2 67 30 122.5t85 87.5l-58 58ZM480-40l-56-56 63-64H320v-80h167l-63-64 56-56 160 160L480-40Z"/>
    </Icon>
  );
});

IconMaterialFaceRightFilled.displayName = 'AmauiIconMaterialFaceRightFilled';

export default IconMaterialFaceRightFilled;
