import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentExcitedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentExcitedW100Filled'

      short_name='SentimentExcited'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M336 592v64q0 60 42 102t102 42q60 0 102-42t42-102v-64H336Zm144 180q-48 0-82-34t-34-82v-36h232v36q0 48-34 82t-82 34ZM340 392q-29 0-53 20t-36 55l27 7q9-24 25.5-38.5T340 420q20 1 36.5 15.5T402 474l27-7q-12-35-36-55t-53-20Zm280 0q-29 0-53 20t-36 55l27 7q9-25 25-39.5t37-14.5q21 0 37 14.5t25 39.5l27-7q-12-35-36-55t-53-20ZM480.174 924Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924Z"/>
    </Icon>
  );
});

IconMaterialSentimentExcitedW100Filled.displayName = 'AmauiIconMaterialSentimentExcitedW100Filled';

export default IconMaterialSentimentExcitedW100Filled;
