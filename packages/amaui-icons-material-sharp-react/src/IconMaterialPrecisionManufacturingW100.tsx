import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrecisionManufacturingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrecisionManufacturingW100'

      short_name='PrecisionManufacturing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19v-1.2h3L5.4 9.3q-.65-.3-1.025-.85Q4 7.9 4 7.15q0-.975.688-1.663Q5.375 4.8 6.35 4.8q.9 0 1.525.562.625.563.825 1.438h3.8v-2h.7v.7l2.25-2.075L20.1 5.6l-.3.625-4.2-1.975-2.4 2.2v1.4L15.6 10l4.225-1.975.25.65-4.6 2.15L13.2 8.8v.7h-.7v-2H8.7q-.075.375-.275.75T8 8.85l4.8 8.95h3.9V19ZM6.35 8.8q.675 0 1.163-.488Q8 7.825 8 7.15q0-.675-.487-1.163Q7.025 5.5 6.35 5.5t-1.162.487Q4.7 6.475 4.7 7.15t.488 1.162q.487.488 1.162.488Zm2.4 9H12L7.4 9.25q-.2.125-.55.212-.35.088-.65.038Zm3.25 0Z"/>
    </Icon>
  );
});

IconMaterialPrecisionManufacturingW100.displayName = 'AmauiIconMaterialPrecisionManufacturingW100';

export default IconMaterialPrecisionManufacturingW100;
