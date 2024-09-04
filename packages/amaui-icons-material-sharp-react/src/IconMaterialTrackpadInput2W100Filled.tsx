import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrackpadInput2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackpadInput2W100Filled'

      short_name='TrackpadInput2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-252v-536h656v191h-28v-163H160v480h104l28 28H132Zm452.85 120q-18.85 0-35.35-7t-30.27-20.63L354-324l33-35 111 24v-292h28v244h80v-298h28v298h80v-97h28v97h80v-97h28v214q0 56-39 95t-95 39H584.85Z"/>
    </Icon>
  );
});

IconMaterialTrackpadInput2W100Filled.displayName = 'AmauiIconMaterialTrackpadInput2W100Filled';

export default IconMaterialTrackpadInput2W100Filled;
