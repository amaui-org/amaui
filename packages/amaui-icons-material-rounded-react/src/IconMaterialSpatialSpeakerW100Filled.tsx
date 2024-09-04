import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpatialSpeakerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialSpeakerW100Filled'

      short_name='SpatialSpeaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M406-376q-26 0-43-17t-17-43v-292q0-26 17-43t43-17h148q26 0 43 17t17 43v292q0 26-17 43t-43 17H406Zm-66 244q-103 0-175.5-69.5T92-372q0-5.8 4.04-9.9 4.03-4.1 10-4.1 5.96 0 9.96 4.02 4 4.03 4 9.98 0 90 64.35 151T340-160q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.1 9.96-4.1 4-9.9 4Zm280 0q-5.8 0-9.9-4.04-4.1-4.03-4.1-10 0-5.96 4.03-9.96 4.02-4 9.97-4 91.3 0 155.65-61Q840-282 840-372q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98 0 101-72.5 170.5T620-132ZM340-260q-49 0-84.5-32T220-372q0-5.8 4.04-9.9 4.03-4.1 10-4.1 5.96 0 9.96 4.02 4 4.03 4 9.98 0 18 7.5 33.5t20 26.5q12.5 11 29.32 17.5Q321.65-288 340-288q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.1 9.96-4.1 4-9.9 4Zm280 0q-5.8 0-9.9-4.04-4.1-4.03-4.1-10 0-5.96 4.03-9.96 4.02-4 9.97-4 18.35 0 35.18-6.5Q672-301 684.5-312t20-26.5Q712-354 712-372q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98 0 48-35.5 80T620-260Z"/>
    </Icon>
  );
});

IconMaterialSpatialSpeakerW100Filled.displayName = 'AmauiIconMaterialSpatialSpeakerW100Filled';

export default IconMaterialSpatialSpeakerW100Filled;
