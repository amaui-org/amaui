import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextureAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureAdd'

      short_name='TextureAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M176-120q-19-4-35.5-20.5T120-176l664-664q21 5 36 20.5t21 35.5L176-120Zm-56-252v-112l356-356h112L120-372Zm0-308v-80q0-33 23.5-56.5T200-840h80L120-680Zm720 92v112l-19 19q-20-10-42.5-15.5T732-480l108-108ZM372-120l108-108q2 24 7.5 46.5T503-139l-19 19H372Zm308-80h-80q-17 0-28.5-11.5T560-240q0-17 11.5-28.5T600-280h80v-80q0-17 11.5-28.5T720-400q17 0 28.5 11.5T760-360v80h80q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200h-80v80q0 17-11.5 28.5T720-80q-17 0-28.5-11.5T680-120v-80Z"/>
    </Icon>
  );
});

IconMaterialTextureAdd.displayName = 'AmauiIconMaterialTextureAdd';

export default IconMaterialTextureAdd;
