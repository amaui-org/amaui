import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCakeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeW100Filled'

      short_name='Cake'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 13.6v-4q0-.65.425-1.075Q7.15 8.1 7.8 8.1h3.85V6.6q-.425-.275-.712-.613-.288-.337-.288-.787 0-.275.1-.512.1-.238.3-.438l.675-.675q.05-.05.275-.1.025 0 .275.1l.675.675q.2.2.3.438.1.237.1.512 0 .45-.288.787-.287.338-.712.613v1.5h3.85q.65 0 1.075.425.425.425.425 1.075v4Zm-1.35 7.1q-.3 0-.475-.2T4.3 20v-4.2q0-.65.425-1.075Q5.15 14.3 5.8 14.3h12.4q.65 0 1.075.425.425.425.425 1.075V20q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterialCakeW100Filled.displayName = 'AmauiIconMaterialCakeW100Filled';

export default IconMaterialCakeW100Filled;
