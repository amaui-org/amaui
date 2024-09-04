import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMultimodalHandEye = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultimodalHandEye'

      short_name='MultimodalHandEye'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-40H263L24-280l64-66 112 33v-367h80v473l-98-28 115 115h183q33 0 56.5-23.5T560-200v-200h80v200q0 66-47 113T480-40ZM320-320v-200h80v200h-80Zm120 0v-160h80v160h-80Zm40 200H313h167Zm160-400q-91 0-168-48T360-700q35-84 112-132t168-48q91 0 168 48t112 132q-35 84-112 132t-168 48Zm0-80q57 0 107.5-26t82.5-74q-32-48-82.5-74T640-800q-57 0-107.5 26T450-700q32 48 82.5 74T640-600Zm0-40q-25 0-42.5-17.5T580-700q0-25 17.5-42.5T640-760q25 0 42.5 17.5T700-700q0 25-17.5 42.5T640-640Z"/>
    </Icon>
  );
});

IconMaterialMultimodalHandEye.displayName = 'AmauiIconMaterialMultimodalHandEye';

export default IconMaterialMultimodalHandEye;
