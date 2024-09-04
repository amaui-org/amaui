import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrackpadInputFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackpadInputFilled'

      short_name='TrackpadInput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-640h760v240h-80v-160H160v480h72l79 80H80ZM760-80H593q-24 0-46-9t-39-26L304-320l64-66 112 33v-327h80v280h40v-160h80v160h40v-120h80v120h40v-40h80v200q0 66-47 113T760-80Z"/>
    </Icon>
  );
});

IconMaterialTrackpadInputFilled.displayName = 'AmauiIconMaterialTrackpadInputFilled';

export default IconMaterialTrackpadInputFilled;
