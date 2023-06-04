import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDisplayExternalInputW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisplayExternalInputW100'

      short_name='DisplayExternalInput'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m691 965-20-20 89-89H557v-28h204l-90-90 20-19 123 123-123 123Zm-519-81V696h28v160h160v28H172Zm0-428V268h188v28H200v160h-28Zm588 0V296H600v-28h188v188h-28Z"/>
    </Icon>
  );
});

IconMaterialDisplayExternalInputW100.displayName = 'AmauiIconMaterialDisplayExternalInputW100';

export default IconMaterialDisplayExternalInputW100;
