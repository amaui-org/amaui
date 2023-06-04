import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCellWifiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CellWifiW100'

      short_name='CellWifi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.15 20.7 20.7 9.1v11.6ZM18 20h2v-9.2l-2 2ZM7.85 9.05l-.5-.5q.825-.675 1.813-1.038.987-.362 1.937-.362.95 0 1.9.337.95.338 1.75 1.013l-.5.55q-.675-.6-1.512-.9-.838-.3-1.638-.3-.8 0-1.662.3-.863.3-1.588.9ZM5.3 6.45l-.5-.5Q6.15 4.7 7.775 4.125T11.1 3.55q1.7 0 3.3.575Q16 4.7 17.35 5.95l-.5.5Q15.6 5.4 14.1 4.825t-3-.575q-1.5 0-3.025.575T5.3 6.45Zm5.8 5.8-1.075-1.075q.225-.2.5-.312.275-.113.575-.113.3 0 .575.113.275.112.5.312Z"/>
    </Icon>
  );
});

IconMaterialCellWifiW100.displayName = 'AmauiIconMaterialCellWifiW100';

export default IconMaterialCellWifiW100;
