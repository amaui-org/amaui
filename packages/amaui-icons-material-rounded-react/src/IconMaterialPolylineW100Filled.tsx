import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolylineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolylineW100Filled'

      short_name='Polyline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.35 21.35q-.275 0-.487-.212-.213-.213-.213-.488V19.1L8 15.275q-.075.05-.162.062-.088.013-.188.013h-3.3q-.275 0-.487-.213-.213-.212-.213-.487v-3.3q0-.275.213-.488.212-.212.487-.212H7.6l3.15-3.625q-.05-.075-.075-.163-.025-.087-.025-.212v-3.3q0-.275.213-.488.212-.212.487-.212h3.3q.275 0 .488.212.212.213.212.488v3.3q0 .275-.212.487-.213.213-.488.213H11.4l-3.15 3.625q.075.125.088.213.012.087.012.162v3.3l7.3 3.65v-.95q0-.275.213-.488.212-.212.487-.212h3.3q.275 0 .488.212.212.213.212.488v3.3q0 .275-.212.488-.213.212-.488.212Z"/>
    </Icon>
  );
});

IconMaterialPolylineW100Filled.displayName = 'AmauiIconMaterialPolylineW100Filled';

export default IconMaterialPolylineW100Filled;
