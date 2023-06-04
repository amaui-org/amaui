import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEqualW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualW100'

      short_name='Equal'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M186 724v-68h588v68H186Zm0-228v-68h588v68H186Z"/>
    </Icon>
  );
});

IconMaterialEqualW100.displayName = 'AmauiIconMaterialEqualW100';

export default IconMaterialEqualW100;
