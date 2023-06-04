import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShuffleOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleOnW100'

      short_name='ShuffleOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 21.7V2.3h19.4v19.4ZM9.4 9.85l.475-.475L5.4 4.9l-.475.475Zm5.25 9.5h4.7v-4.7h-.7v3.45l-4-4-.5.5 4.05 4.05h-3.55ZM5.4 19.1 18.65 5.85v3.5h.7v-4.7h-4.7v.7h3.5L4.9 18.6Z"/>
    </Icon>
  );
});

IconMaterialShuffleOnW100.displayName = 'AmauiIconMaterialShuffleOnW100';

export default IconMaterialShuffleOnW100;
