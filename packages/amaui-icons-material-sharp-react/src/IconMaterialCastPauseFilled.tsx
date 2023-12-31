import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastPauseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastPauseFilled'

      short_name='CastPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M750-640h40v-160h-40v160Zm-100 0h40v-160h-40v160ZM80-280q50 0 85 35t35 85H80v-120Zm0-160q117 0 198.5 81.5T360-160h-80q0-83-58.5-141.5T80-360v-80Zm0-160q91 0 171 34.5T391-471q60 60 94.5 140T520-160h-80q0-75-28.5-140.5t-77-114q-48.5-48.5-114-77T80-520v-80Zm640 80q-83 0-141.5-58.5T520-720q0-83 58.5-141.5T720-920q83 0 141.5 58.5T920-720q0 83-58.5 141.5T720-520ZM600-160q0-109-41-203.5t-111.5-165q-70.5-70.5-165-111T80-680v-120h372q-6 19-9 39t-3 41q0 116 82 198t198 82q43 0 84-13t76-38v331H600Z"/>
    </Icon>
  );
});

IconMaterialCastPauseFilled.displayName = 'AmauiIconMaterialCastPauseFilled';

export default IconMaterialCastPauseFilled;
