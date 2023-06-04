import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentContentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentContentW100Filled'

      short_name='SentimentContent'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M376 700h208v-28H376v28Zm104.174 224Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924ZM345 452q-25 0-45.5 12.5T263 496l24 16q12-13 26.311-22.5T345 480q17.378 0 31.689 9T403 511l24-16q-16-19-36.862-31-20.862-12-45.138-12Zm270 0q-25 0-45.5 12.5T533 496l24 16q12-13 26.311-22.5T615 480q17 0 31.5 9.5T673 512l24-16q-16-19-36.862-31.5Q639.276 452 615 452Z"/>
    </Icon>
  );
});

IconMaterialSentimentContentW100Filled.displayName = 'AmauiIconMaterialSentimentContentW100Filled';

export default IconMaterialSentimentContentW100Filled;
