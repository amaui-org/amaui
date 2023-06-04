import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppBadgingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBadgingW100'

      short_name='AppBadging'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 576Zm-348 .174q0-72.174 27.405-135.732 27.405-63.559 74.385-110.574 46.98-47.016 110.49-74.442Q407.79 228 480 228q17.772 0 34.886 2Q532 232 549 235q-5 6-9 12t-8 13q-12.976-1.6-25.488-2.8Q494 256 480 256q-134 0-227 93t-93 227q0 134 93 227t227 93q134 0 227-93t93-227q0-14-1.2-26.512T796 524q7-4 13-8t12-9q3 17 5 34.114 2 17.114 2 34.886 0 72.21-27.391 135.72-27.392 63.51-74.348 110.49-46.957 46.98-110.435 74.385Q552.348 924 480.174 924 408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174ZM700.118 450Q661 450 633.5 422.618q-27.5-27.383-27.5-66.5Q606 317 633.382 289.5q27.383-27.5 66.5-27.5Q739 262 766.5 289.382q27.5 27.383 27.5 66.5Q794 395 766.618 422.5q-27.383 27.5-66.5 27.5Z"/>
    </Icon>
  );
});

IconMaterialAppBadgingW100.displayName = 'AmauiIconMaterialAppBadgingW100';

export default IconMaterialAppBadgingW100;
