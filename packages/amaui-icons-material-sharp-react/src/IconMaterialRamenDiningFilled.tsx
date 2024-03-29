import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRamenDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDiningFilled'

      short_name='RamenDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22v-1.75Q5.325 19.2 3.663 17 2 14.8 2 12h2V4l18-2v1.5L10.5 4.8v1.7H22V8H10.5v4H22q0 2.8-1.663 5-1.662 2.2-4.337 3.25V22ZM8 6.5h1V4.95l-1 .1Zm-2.5 0h1V5.25l-1 .1ZM8 12h1V8H8Zm-2.5 0h1V8h-1Z"/>
    </Icon>
  );
});

IconMaterialRamenDiningFilled.displayName = 'AmauiIconMaterialRamenDiningFilled';

export default IconMaterialRamenDiningFilled;
