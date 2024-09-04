import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed12xW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed12xW100'

      short_name='Speed12x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-306v-28h28v28h-28Zm88 0v-188h165v-132H360v-28h193v188H388v132h165v28H360Zm-176 0v-320h-70v-28h98v348h-28Zm428 0 110-184-98-164h34l81 136 81-136h32l-97 162 111 186h-34l-94-157-94 157h-32Z"/>
    </Icon>
  );
});

IconMaterialSpeed12xW100.displayName = 'AmauiIconMaterialSpeed12xW100';

export default IconMaterialSpeed12xW100;
