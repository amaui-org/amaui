import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialYoutubeActivityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YoutubeActivityW100Filled'

      short_name='YoutubeActivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.8 16.65q-.55.025-1.025.038-.475.012-.85.012H12.1q-1.425 0-2.65-.05-1.075-.025-2.1-.088-1.025-.062-1.5-.187-.525-.125-.912-.512-.388-.388-.513-.913-.125-.475-.188-1.125-.062-.65-.087-1.275-.05-.7-.05-1.45t.05-1.45q.025-.625.087-1.275.063-.65.188-1.125.125-.525.513-.913.387-.387.912-.512.475-.125 1.5-.188 1.025-.062 2.1-.087 1.225-.05 2.65-.05 1.425 0 2.65.05 1.075.025 2.1.087 1.025.063 1.5.188.525.125.913.512.387.388.512.913.125.475.188 1.125.062.65.087 1.275.05.7.05 1.45v.325q-.375-.175-.775-.25-.4-.075-.825-.075-1.65 0-2.825 1.175Q14.5 13.45 14.5 15.1q0 .425.075.813.075.387.225.737Zm-4.3-3.15 4.15-2.4-4.15-2.4Zm7.2 4v-1.6h-1.6v-1.6h1.6v-1.6h1.6v1.6h1.6v1.6h-1.6v1.6Z"/>
    </Icon>
  );
});

IconMaterialYoutubeActivityW100Filled.displayName = 'AmauiIconMaterialYoutubeActivityW100Filled';

export default IconMaterialYoutubeActivityW100Filled;
