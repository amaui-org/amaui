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
      <path d="M714-383v-100q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v100h80q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v117q0 56-39 95t-95 39H584.85q-18.85 0-35.35-7t-30.51-20.85L374-304q-8-8-8-20t8-21q8-8 18-9.5t21 1.5l85 18v-278q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v230h80v-284q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v284h80ZM192-252q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h536q26 0 43 17t17 43v117q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-117q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10h72q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-72Z"/>
    </Icon>
  );
});

IconMaterialTrackpadInput2W100Filled.displayName = 'AmauiIconMaterialTrackpadInput2W100Filled';

export default IconMaterialTrackpadInput2W100Filled;
