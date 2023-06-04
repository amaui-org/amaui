import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppBadgingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBadgingW100Filled'

      short_name='AppBadging'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M700.118 450Q661 450 633.5 422.618q-27.5-27.383-27.5-66.5Q606 317 633.382 289.5q27.383-27.5 66.5-27.5Q739 262 766.5 289.382q27.5 27.383 27.5 66.5Q794 395 766.618 422.5q-27.383 27.5-66.5 27.5ZM480.174 924Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.405-135.732 27.405-63.559 74.385-110.574 46.98-47.016 110.49-74.442Q407.79 228 480 228q17.772 0 34.886 2Q532 232 549 235q-21 26-32 57t-11 64q0 80.51 56.745 137.255Q619.49 550 700 550q33 0 64-11t57-32q3 17 5 34.114 2 17.114 2 34.886 0 72.21-27.391 135.72-27.392 63.51-74.348 110.49-46.957 46.98-110.435 74.385Q552.348 924 480.174 924Z"/>
    </Icon>
  );
});

IconMaterialAppBadgingW100Filled.displayName = 'AmauiIconMaterialAppBadgingW100Filled';

export default IconMaterialAppBadgingW100Filled;
