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
      <path d="M8.4 15.95q-2.1 0-3.475-1.588Q3.55 12.775 3.55 10.6V9.4q0-2.175 1.375-3.763Q6.3 4.05 8.4 4.05q.975 0 1.662.687.688.688.688 1.663 0 .975-.688 1.662-.687.688-1.662.688v2.5q.975 0 1.662.688.688.687.688 1.662v6q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-4.325q-.35.325-.762.5-.413.175-.888.175Zm7.2 0q-.475 0-.887-.175-.413-.175-.763-.5V19.6q0 .075-.025.138-.025.062-.075.112-.05.05-.112.075-.063.025-.138.025-.15 0-.25-.1t-.1-.25v-6q0-.975.688-1.662.687-.688 1.662-.688v-2.5q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663.687-.687 1.662-.687 2.1 0 3.475 1.587Q20.45 7.225 20.45 9.4v1.2q0 2.175-1.375 3.762Q17.7 15.95 15.6 15.95Z"/>
    </Icon>
  );
});

IconMaterialNephrologyW100Filled.displayName = 'AmauiIconMaterialNephrologyW100Filled';

export default IconMaterialNephrologyW100Filled;
