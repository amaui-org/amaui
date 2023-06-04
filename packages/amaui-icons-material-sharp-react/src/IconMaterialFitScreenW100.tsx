import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenW100'

      short_name='FitScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 9V6h-3v-.7h3.7V9ZM3.3 9V5.3H7V6H4v3ZM17 18.7V18h3v-3h.7v3.7Zm-13.7 0V15H4v3h3v.7Zm3.8-3.8V9.1h9.8v5.8Zm.7-.7h8.4V9.8H7.8Zm0 0V9.8v4.4Z"/>
    </Icon>
  );
});

IconMaterialFitScreenW100.displayName = 'AmauiIconMaterialFitScreenW100';

export default IconMaterialFitScreenW100;
