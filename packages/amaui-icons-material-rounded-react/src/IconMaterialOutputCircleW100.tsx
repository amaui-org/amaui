import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutputCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputCircleW100'

      short_name='OutputCircle'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m494 848 121-119q3.667-4 9.333-4 5.667 0 9.667 4t4 9.667q0 5.666-4 9.333L501 881q-9 9-21 9t-21-9L326 748q-4-4-3.5-9.5t4.5-9.5q4-4 9-4t9 4l121 119V482q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v366Zm-14-592q-134 0-227 93t-93 227q0 33.78 7 66.535 7 32.756 21 63.465 3 6 2.083 12.051-.916 6.051-5.683 10.678Q180 733 174 731.5t-8-6.5q-17-35-25.5-72.269Q132 615.462 132 576q0-72.21 27.391-135.72 27.392-63.51 74.348-110.49 46.957-46.98 110.435-74.385Q407.652 228 479.826 228q72.174 0 135.732 27.394 63.559 27.395 110.574 74.357 47.016 46.961 74.442 110.447Q828 503.683 828 575.865q0 39.135-9 77.635-9 38.5-26 73.5-2 5-7 5.5t-9-3.5q-5-5-5.5-10.5T773 707q14-31.481 20.5-64.484Q800 609.512 800 576q0-134-93-227t-227-93Z"/>
    </Icon>
  );
});

IconMaterialOutputCircleW100.displayName = 'AmauiIconMaterialOutputCircleW100';

export default IconMaterialOutputCircleW100;
