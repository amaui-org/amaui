import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableChartView = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartView'

      short_name='TableChartView'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m296 976-56-56 276-277 140 140 207-207 57 57-264 263-140-140-220 220Zm-136-40H80V216h720v280H160v440Zm0-520h560V296H160v120Zm0 0V296v120Z"/>
    </Icon>
  );
});

IconMaterialTableChartView.displayName = 'AmauiIconMaterialTableChartView';

export default IconMaterialTableChartView;
