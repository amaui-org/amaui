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
      <path d="M770-800q-8 0-14 6t-6 14v120q0 8 6 14t14 6q8 0 14-6t6-14v-120q0-8-6-14t-14-6Zm-100 0q-8 0-14 6t-6 14v120q0 8 6 14t14 6q8 0 14-6t6-14v-120q0-8-6-14t-14-6Zm-70 640q0-109-41-203.5t-111.5-165q-70.5-70.5-165-111T80-680v-40q0-33 23.5-56.5T160-800h292q-6 19-9 39t-3 41q0 116 82 198t198 82q43 0 84-13t76-38v251q0 33-23.5 56.5T800-160H600Zm120-360q-83 0-141.5-58.5T520-720q0-83 58.5-141.5T720-920q83 0 141.5 58.5T920-720q0 83-58.5 141.5T720-520ZM140-160q-25 0-42.5-17.5T80-220q0-25 17.5-42.5T140-280q25 0 42.5 17.5T200-220q0 25-17.5 42.5T140-160Zm180 0q-16 0-28-9.5T277-195q-11-63-56.5-107T112-357q-15-2-23.5-14.5T80-400q0-17 10.5-28.5T116-438q94 12 161 79t80 161q2 16-9 27t-28 11Zm160 0q-17 0-28.5-11T438-199q-14-128-104.5-217T115-518q-16-2-25.5-14T80-560q0-17 10.5-29t25.5-10q161 13 274 125.5T518-201q2 17-9.5 29T480-160Z"/>
    </Icon>
  );
});

IconMaterialCastPauseFilled.displayName = 'AmauiIconMaterialCastPauseFilled';

export default IconMaterialCastPauseFilled;
