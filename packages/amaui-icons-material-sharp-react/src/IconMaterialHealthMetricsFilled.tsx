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
      <path d="M280 976V776H80V616h258l68 103h72l54-173 46 70h302v160H680v200H280Zm148-370-47-70H80V376h200V176h400v200h200v160H621l-68-102h-71l-54 172Z"/>
    </Icon>
  );
});

IconMaterialHealthMetricsFilled.displayName = 'AmauiIconMaterialHealthMetricsFilled';

export default IconMaterialHealthMetricsFilled;
