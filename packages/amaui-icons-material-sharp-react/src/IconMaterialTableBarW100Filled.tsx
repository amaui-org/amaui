import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableBarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBarW100Filled'

      short_name='TableBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.95 18.725 1.5-3.7h3.2v-5.05q-3.3-.05-5.538-.775-2.237-.725-2.237-1.7 0-1.05 2.35-1.763 2.35-.712 5.775-.712 3.425 0 5.775.712 2.35.713 2.35 1.763 0 1-2.25 1.712-2.25.713-5.525.763v5.05h3.2l1.5 3.7h-.75l-1.2-3H8.9l-1.2 3Z"/>
    </Icon>
  );
});

IconMaterialTableBarW100Filled.displayName = 'AmauiIconMaterialTableBarW100Filled';

export default IconMaterialTableBarW100Filled;
