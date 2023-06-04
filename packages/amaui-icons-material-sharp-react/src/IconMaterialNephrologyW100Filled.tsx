import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNephrologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NephrologyW100Filled'

      short_name='Nephrology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.05 19.95v-4.675q-.35.325-.762.5-.413.175-.888.175-2.1 0-3.475-1.588Q3.55 12.775 3.55 10.6V9.4q0-2.175 1.375-3.763Q6.3 4.05 8.4 4.05q.975 0 1.662.687.688.688.688 1.663 0 .975-.688 1.662-.687.688-1.662.688v2.5q.975 0 1.662.688.688.687.688 1.662v6.35Zm3.2 0V13.6q0-.975.688-1.662.687-.688 1.662-.688v-2.5q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663.687-.687 1.662-.687 2.1 0 3.475 1.587Q20.45 7.225 20.45 9.4v1.2q0 2.175-1.375 3.762Q17.7 15.95 15.6 15.95q-.475 0-.887-.175-.413-.175-.763-.5v4.675Z"/>
    </Icon>
  );
});

IconMaterialNephrologyW100Filled.displayName = 'AmauiIconMaterialNephrologyW100Filled';

export default IconMaterialNephrologyW100Filled;
