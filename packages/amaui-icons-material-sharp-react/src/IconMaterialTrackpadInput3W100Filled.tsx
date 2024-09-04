import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrackpadInput3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackpadInput3W100Filled'

      short_name='TrackpadInput3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M547-132 354-324l33-35 111 24v-292h28v244h80v-298h28v298h80v-230h28v230h80v-14h28v131q0 56-39 95t-95 39H547ZM132-252v-536h656v28H160v480h104l28 28H132Z"/>
    </Icon>
  );
});

IconMaterialTrackpadInput3W100Filled.displayName = 'AmauiIconMaterialTrackpadInput3W100Filled';

export default IconMaterialTrackpadInput3W100Filled;
