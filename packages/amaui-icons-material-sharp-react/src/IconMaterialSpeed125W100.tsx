import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed125W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed125W100'

      short_name='Speed125'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M288-306v-28h28v28h-28Zm372 0v-28h160v-132H660v-188h188v28H688v132h160v188H660Zm-266 0v-188h160v-132H394v-28h188v188H422v132h160v28H394Zm-212 0v-320h-70v-28h98v348h-28Z"/>
    </Icon>
  );
});

IconMaterialSpeed125W100.displayName = 'AmauiIconMaterialSpeed125W100';

export default IconMaterialSpeed125W100;
