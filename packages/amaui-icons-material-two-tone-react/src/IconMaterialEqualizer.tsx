import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEqualizer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Equalizer'

      short_name='Equalizer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z"/>
    </Icon>
  );
});

IconMaterialEqualizer.displayName = 'AmauiIconMaterialEqualizer';

export default IconMaterialEqualizer;
