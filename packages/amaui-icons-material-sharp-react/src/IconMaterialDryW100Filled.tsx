import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryW100Filled'

      short_name='Dry'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.05 19.75v-6.1l6.025-5.725.775.8-1.725 3.025h9.225v1.1h-6.4v1.2h8v1.1h-8v1.2h7.2v1.1h-7.2v1.2h5.6v1.1ZM15.2 8.925l.025-.45q0-.625-.262-1.2Q14.7 6.7 14.25 6.25q-.575-.575-.862-1.3-.288-.725-.288-1.5l.025-.375h.675l-.025.475q0 .6.225 1.15.225.55.675 1 .575.575.9 1.35.325.775.325 1.55l-.025.325Zm3.5 0 .025-.45q0-.625-.263-1.2Q18.2 6.7 17.75 6.25q-.575-.575-.862-1.312Q16.6 4.2 16.6 3.45l.025-.375h.675l-.025.475q0 .6.225 1.15.225.55.675 1 .575.6.9 1.35.325.75.325 1.55l-.025.325Z"/>
    </Icon>
  );
});

IconMaterialDryW100Filled.displayName = 'AmauiIconMaterialDryW100Filled';

export default IconMaterialDryW100Filled;
