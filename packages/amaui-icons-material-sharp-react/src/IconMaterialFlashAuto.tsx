import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashAuto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashAuto'

      short_name='FlashAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.625 11 17 2h1.6l3.425 9h-1.55l-.8-2.3h-3.7l-.8 2.3Zm2.8-3.6h2.75L17.85 3.65h-.05ZM6 23v-9H3V2h10l-4 9h4Z"/>
    </Icon>
  );
});

IconMaterialFlashAuto.displayName = 'AmauiIconMaterialFlashAuto';

export default IconMaterialFlashAuto;
