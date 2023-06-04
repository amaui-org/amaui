import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitScreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenW100Filled'

      short_name='FitScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 9V6h-3v-.7h3.7V9ZM3.3 9V5.3H7V6H4v3ZM17 18.7V18h3v-3h.7v3.7Zm-13.7 0V15H4v3h3v.7Zm3.8-3.8V9.1h9.8v5.8Z"/>
    </Icon>
  );
});

IconMaterialFitScreenW100Filled.displayName = 'AmauiIconMaterialFitScreenW100Filled';

export default IconMaterialFitScreenW100Filled;
