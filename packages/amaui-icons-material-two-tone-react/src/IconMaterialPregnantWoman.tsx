import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPregnantWoman = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PregnantWoman'

      short_name='PregnantWoman'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"/><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"/>
    </Icon>
  );
});

IconMaterialPregnantWoman.displayName = 'AmauiIconMaterialPregnantWoman';

export default IconMaterialPregnantWoman;
