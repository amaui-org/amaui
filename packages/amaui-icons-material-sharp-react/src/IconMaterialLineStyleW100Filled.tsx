import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStyleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStyleW100Filled'

      short_name='LineStyle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.25 17.75v-.7h.7v.7Zm0-2.7v-.7h2.825v.7Zm0-2.7v-.7H11v.7Zm0-2.7v-3.4h11.5v3.4Zm2.7 8.1v-.7h.7v.7Zm1.625-2.7v-.7H13.4v.7Zm1.075 2.7v-.7h.7v.7Zm1.35-5.4v-.7h4.75v.7Zm1.35 5.4v-.7h.7v.7Zm.55-2.7v-.7h2.85v.7Zm2.15 2.7v-.7h.7v.7Z"/>
    </Icon>
  );
});

IconMaterialLineStyleW100Filled.displayName = 'AmauiIconMaterialLineStyleW100Filled';

export default IconMaterialLineStyleW100Filled;
