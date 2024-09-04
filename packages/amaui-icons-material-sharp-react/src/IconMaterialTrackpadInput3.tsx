import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrackpadInput3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackpadInput3'

      short_name='TrackpadInput3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-80H543L304-320l64-66 112 33v-327h80v433l-98-28 103 103q6 6 13 9t15 3h167q33 0 56.5-23.5T840-240v-200h80v200q0 66-47 113T760-80ZM600-360v-360h80v360h-80Zm120 0v-280h80v280h-80Zm40 200H565h195ZM80-200v-640h760v80H160v480h72l79 80H80Z"/>
    </Icon>
  );
});

IconMaterialTrackpadInput3.displayName = 'AmauiIconMaterialTrackpadInput3';

export default IconMaterialTrackpadInput3;
