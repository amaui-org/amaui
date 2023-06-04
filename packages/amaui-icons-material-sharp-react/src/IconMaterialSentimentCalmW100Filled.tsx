import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentCalmW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentCalmW100Filled'

      short_name='SentimentCalm'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480.282 780Q513 780 543 766.5t56-39.5l-20-19q-23 21-48 32t-51 11q-26 0-51-11t-48-32l-20 19q27 27 56.782 40 29.782 13 62.5 13Zm-.108 144Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924ZM345 560q32 0 55-22t34-53l-27-7q-8 22-23.5 38T345 532q-23 0-38.5-16T283 478l-27 7q11 31 34 53t55 22Zm270 0q32 0 55-22t34-53l-27-7q-8 22-23.5 38T615 532q-23 0-38.5-16T553 478l-27 7q11 31 34 53t55 22Z"/>
    </Icon>
  );
});

IconMaterialSentimentCalmW100Filled.displayName = 'AmauiIconMaterialSentimentCalmW100Filled';

export default IconMaterialSentimentCalmW100Filled;
