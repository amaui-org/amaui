import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed07xW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed07xW100'

      short_name='Speed07x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m534-306 110-184-98-164h34l81 136 81-136h32l-97 162 111 186h-34l-94-157-94 157h-32Zm-322 0v-28h28v28h-28Zm122 0 80-320H256v-28h188v31l-80 317h-30Z"/>
    </Icon>
  );
});

IconMaterialSpeed07xW100.displayName = 'AmauiIconMaterialSpeed07xW100';

export default IconMaterialSpeed07xW100;
