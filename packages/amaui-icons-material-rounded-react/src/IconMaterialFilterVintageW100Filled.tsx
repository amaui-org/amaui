import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterVintageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterVintageW100Filled'

      short_name='FilterVintage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 19.35q-1.125 0-1.975-.862-.85-.863-.725-1.838-.9.6-2.025.338-1.125-.263-1.725-1.288-.575-.975-.212-2.113Q5.725 12.45 6.775 12q-1.05-.45-1.412-1.588Q5 9.275 5.575 8.3 6.15 7.325 7.3 7.012 8.45 6.7 9.325 7.3q-.125-1.025.725-1.863.85-.837 1.975-.837T14 5.437q.85.838.725 1.863.875-.6 2-.288 1.125.313 1.7 1.288.575.975.213 2.112-.363 1.138-1.413 1.588 1.05.45 1.413 1.587.362 1.138-.213 2.113-.6 1.025-1.7 1.288-1.1.262-2-.338.125.975-.725 1.838-.85.862-1.975.862ZM12 14.725q1.125 0 1.925-.8t.8-1.925q0-1.125-.8-1.925T12 9.275q-1.125 0-1.925.8T9.275 12q0 1.125.8 1.925t1.925.8Z"/>
    </Icon>
  );
});

IconMaterialFilterVintageW100Filled.displayName = 'AmauiIconMaterialFilterVintageW100Filled';

export default IconMaterialFilterVintageW100Filled;
