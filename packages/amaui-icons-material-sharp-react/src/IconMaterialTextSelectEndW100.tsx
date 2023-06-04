import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectEndW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectEndW100'

      short_name='TextSelectEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 296v-28h80v28h-80Zm0 588v-28h80v28h-80ZM280 296v-28h80v28h-80Zm0 588v-28h80v28h-80ZM172 296v-28h28v28h-28Zm0 150v-80h28v80h-28Zm0 170v-80h28v80h-28Zm0 170v-80h28v80h-28Zm0 98v-28h28v28h-28Zm428 0v-28h80V296h-80v-28h188v28h-80v560h80v28H600Z"/>
    </Icon>
  );
});

IconMaterialTextSelectEndW100.displayName = 'AmauiIconMaterialTextSelectEndW100';

export default IconMaterialTextSelectEndW100;
