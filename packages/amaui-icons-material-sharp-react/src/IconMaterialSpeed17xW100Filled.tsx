import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed17xW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed17xW100Filled'

      short_name='Speed17x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-306v-28h28v28h-28Zm-88 0v-320h-70v-28h98v348h-28Zm408 0 110-184-98-164h34l81 136 81-136h32l-97 162 111 186h-34l-94-157-94 157h-32Zm-181 0 80-320H333v-28h188v31l-80 317h-30Z"/>
    </Icon>
  );
});

IconMaterialSpeed17xW100Filled.displayName = 'AmauiIconMaterialSpeed17xW100Filled';

export default IconMaterialSpeed17xW100Filled;
