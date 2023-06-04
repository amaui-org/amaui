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
      <path d="M480 540q75 0 127 52t58 127q1 7 5.2 12t9.8 5q6 0 10-4.5t4-10.5q-5-88-66-148.5T480 512q-87 0-148 60.5T266 721q0 6 4 10.5t10 4.5q6 0 10-5t5-12q6-75 58-127t127-52Zm-71-153q5-4 5-9.5t-5-9.5q-5-4-11-3.5t-11 4.5q-18 14-37.5 26T308 415q-5.778 2.4-9.389 7.2Q295 427 296 432.85q1 5.85 6 9 5 3.15 11 1.15 27-8 51-22.5t45-33.5Zm142 0q20.909 18.941 45.455 32.471Q621 433 647 442q5 2 10.5-.5t6.5-8.5q1-6-2.5-11.5T652 414q-21.815-7.778-41.907-18.889Q590 384 573 369q-5-4-11-4.5t-11 3.5q-5 4-5 9.5t5 9.5Zm-70.826 537Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924Z"/>
    </Icon>
  );
});

IconMaterialSentimentSadW100Filled.displayName = 'AmauiIconMaterialSentimentSadW100Filled';

export default IconMaterialSentimentSadW100Filled;
