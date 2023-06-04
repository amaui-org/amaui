import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOncologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OncologyW100Filled'

      short_name='Oncology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.4 21.025 18 18.65q-.35.25-.762.388-.413.137-.888.137-1.2 0-2.025-.825t-.825-2.025q0-1.2.825-2.025t2.025-.825q1.2 0 2.025.825t.825 2.025q0 .525-.187 1-.188.475-.513.85l2.375 2.375Zm-4.05-2.55q.875 0 1.513-.638.637-.637.637-1.512t-.637-1.513q-.638-.637-1.513-.637-.875 0-1.512.637-.638.638-.638 1.513 0 .875.638 1.512.637.638 1.512.638ZM4.275 21.35V16q0-.975.688-1.663.687-.687 1.662-.687h2q1.525 0 2.588-1.063 1.062-1.062 1.062-2.587 0-.675-.487-1.163-.488-.487-1.163-.487-.575 0-.962-.388-.388-.387-.388-.962V2.65H12.7v.775l1.225 1.225q2.5 0 4.137 1.887Q19.7 8.425 19.7 11v1.15q-.725-.575-1.562-.875-.838-.3-1.788-.3-2.225 0-3.788 1.562Q11 14.1 11 16.325q0 .45.1 1.025t.3 1H9.35q-.675 0-1.162.487Q7.7 19.325 7.7 20v1.35Z"/>
    </Icon>
  );
});

IconMaterialOncologyW100Filled.displayName = 'AmauiIconMaterialOncologyW100Filled';

export default IconMaterialOncologyW100Filled;
