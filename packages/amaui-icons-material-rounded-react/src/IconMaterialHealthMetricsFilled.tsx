import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealthMetricsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthMetricsFilled'

      short_name='HealthMetrics'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M360 976q-33 0-56.5-23.5T280 896V776H160q-33 0-56.5-23.5T80 696v-80h258l68 102q5 8 14 13t19 5q13 0 24-8t15-20l54-162 34 52q6 8 15 13t19 5h280v80q0 33-23.5 56.5T800 776H680v120q0 33-23.5 56.5T600 976H360Zm68-370-35-52q-5-8-14-13t-19-5H80v-80q0-33 23.5-56.5T160 376h120V256q0-33 23.5-56.5T360 176h240q33 0 56.5 23.5T680 256v120h120q33 0 56.5 23.5T880 456v80H621l-68-102q-5-8-14-13t-19-5q-13 0-23.5 8T482 444l-54 162Z"/>
    </Icon>
  );
});

IconMaterialHealthMetricsFilled.displayName = 'AmauiIconMaterialHealthMetricsFilled';

export default IconMaterialHealthMetricsFilled;
