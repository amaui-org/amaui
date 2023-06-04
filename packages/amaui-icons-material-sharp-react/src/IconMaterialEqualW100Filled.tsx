import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEqualW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualW100Filled'

      short_name='Equal'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M186 724v-68h588v68H186Zm0-228v-68h588v68H186Z"/>
    </Icon>
  );
});

IconMaterialEqualW100Filled.displayName = 'AmauiIconMaterialEqualW100Filled';

export default IconMaterialEqualW100Filled;
