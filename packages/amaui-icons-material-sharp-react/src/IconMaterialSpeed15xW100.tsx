import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed15xW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed15xW100'

      short_name='Speed15x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-306v-28h28v28h-28Zm-88 0v-320h-70v-28h98v348h-28Zm428 0 110-184-98-164h34l81 136 81-136h32l-97 162 111 186h-34l-94-157-94 157h-32Zm-252 0v-28h165v-132H360v-188h193v28H388v132h165v188H360Z"/>
    </Icon>
  );
});

IconMaterialSpeed15xW100.displayName = 'AmauiIconMaterialSpeed15xW100';

export default IconMaterialSpeed15xW100;
