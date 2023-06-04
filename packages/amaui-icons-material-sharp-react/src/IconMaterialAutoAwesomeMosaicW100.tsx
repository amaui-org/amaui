import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMosaicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMosaicW100'

      short_name='AutoAwesomeMosaic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19.7H4.3V4.3H11Zm-.7-.7V5H5v14Zm2.7-8V4.3h6.7V11Zm.7-.7H19V5h-5.3Zm-.7 9.4V13h6.7v6.7Zm.7-.7H19v-5.3h-5.3Zm-3.4-7Zm3.4-1.7Zm0 3.4Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaicW100.displayName = 'AmauiIconMaterialAutoAwesomeMosaicW100';

export default IconMaterialAutoAwesomeMosaicW100;
