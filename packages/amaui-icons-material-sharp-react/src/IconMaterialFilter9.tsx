import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter9 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9'

      short_name='Filter9'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15h5V5h-6v6h4v2h-3Zm3-6h-2V7h2Zm-9 9V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2Zm6-6V4v12Z"/>
    </Icon>
  );
});

IconMaterialFilter9.displayName = 'AmauiIconMaterialFilter9';

export default IconMaterialFilter9;
