import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrackpadInput2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackpadInput2Filled'

      short_name='TrackpadInput2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-640h760v240h-80v-160H160v480h72l79 80H80ZM593-80q-24 0-46-9t-39-26L304-320l64-66 112 33v-327h80v280h40v-320h80v320h40v-80h80v80h40v-80h80v240q0 66-47 113T760-80H593Z"/>
    </Icon>
  );
});

IconMaterialTrackpadInput2Filled.displayName = 'AmauiIconMaterialTrackpadInput2Filled';

export default IconMaterialTrackpadInput2Filled;
