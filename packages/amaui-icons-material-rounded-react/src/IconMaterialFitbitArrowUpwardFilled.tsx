import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitbitArrowUpwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitbitArrowUpwardFilled'

      short_name='FitbitArrowUpward'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 489 324 604q-11 11-27.5 11.5T268 604q-11-11-11-28t11-28l184-184q12-12 28-12t28 12l184 184q11 11 11.5 27.5T692 604q-11 11-28 11t-28-11L520 489v287q0 17-11.5 28.5T480 816q-17 0-28.5-11.5T440 776V489Z"/>
    </Icon>
  );
});

IconMaterialFitbitArrowUpwardFilled.displayName = 'AmauiIconMaterialFitbitArrowUpwardFilled';

export default IconMaterialFitbitArrowUpwardFilled;
