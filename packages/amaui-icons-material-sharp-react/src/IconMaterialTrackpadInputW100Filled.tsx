import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrackpadInputW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackpadInputW100Filled'

      short_name='TrackpadInput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-252v-536h656v191h-28v-163H160v480h104l28 28H132Zm584 120H584.85q-18.85 0-35.35-7t-30.27-20.63L354-324l33-35 111 24v-292h28v244h80v-174h28v174h80v-114h28v114h80v-14h28v131q0 56-39 95t-95 39Z"/>
    </Icon>
  );
});

IconMaterialTrackpadInputW100Filled.displayName = 'AmauiIconMaterialTrackpadInputW100Filled';

export default IconMaterialTrackpadInputW100Filled;
