import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentSadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentSadW100Filled'

      short_name='SentimentSad'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M266 736h28v-10q0-77 54.5-131.5T480 540q77 0 131.5 54.5T666 726v10h28v-10q0-89.322-62.273-151.661T480.227 512Q391 512 328.5 574.339T266 726v10Zm32-289q32-8 65.5-27t56.5-43l-22-18q-20 20-49 36.5T294 419l4 28Zm364 0 4-28q-27-8-55.5-24T562 359l-22 18q23 23 56.5 42.5T662 447ZM480.174 924Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924Z"/>
    </Icon>
  );
});

IconMaterialSentimentSadW100Filled.displayName = 'AmauiIconMaterialSentimentSadW100Filled';

export default IconMaterialSentimentSadW100Filled;
