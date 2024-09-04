import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrackpadInput3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackpadInput3Filled'

      short_name='TrackpadInput3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-400v-200q0-17 11.5-28.5T760-640q17 0 28.5 11.5T800-600v200h40q0-17 11.5-28.5T880-440q17 0 28.5 11.5T920-400v160q0 66-47 113T760-80H593q-24 0-46-9t-39-26L332-292q-11-11-11.5-27.5T331-348l6-6q14-14 34-19t40 0l69 20v-287q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v240h40v-280q0-17 11.5-28.5T640-720q17 0 28.5 11.5T680-680v280h40ZM160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760H160v480h72q17 0 28.5 11.5T272-240q0 17-11.5 28.5T232-200h-72Z"/>
    </Icon>
  );
});

IconMaterialTrackpadInput3Filled.displayName = 'AmauiIconMaterialTrackpadInput3Filled';

export default IconMaterialTrackpadInput3Filled;
