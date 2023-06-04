import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInputCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputCircleW100Filled'

      short_name='InputCircle'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M466 522v366q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975V522l121 119q4 4 9.5 3.5t9.674-4.5q3.826-3.667 3.826-9.333 0-5.667-4-9.667L501 489q-9-9-21-9t-21 9L326 622q-4 4-3.5 9.5t4.674 9.674Q331 645 336 645t9-4l121-119Zm14-266q-134 0-227 93t-93 227q0 33.78 7 66.535 7 32.756 21 63.465 3 6 2.083 12.051-.916 6.051-5.683 10.678Q180 733 174 731.5t-8-6.5q-17-35-25.5-72.269Q132 615.462 132 576q0-72.21 27.391-135.72 27.392-63.51 74.348-110.49 46.957-46.98 110.435-74.385Q407.652 228 479.826 228q72.174 0 135.732 27.394 63.559 27.395 110.574 74.357 47.016 46.961 74.442 110.447Q828 503.683 828 575.865q0 39.135-9 77.635-9 38.5-26 73.5-2 5-7 5.5t-9-3.5q-5-5-5.5-10.5T773 707q14-31.481 20.5-64.484Q800 609.512 800 576q0-134-93-227t-227-93Z"/>
    </Icon>
  );
});

IconMaterialInputCircleW100Filled.displayName = 'AmauiIconMaterialInputCircleW100Filled';

export default IconMaterialInputCircleW100Filled;
