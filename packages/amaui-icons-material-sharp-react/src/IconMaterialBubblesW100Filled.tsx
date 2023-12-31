import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBubblesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubblesW100Filled'

      short_name='Bubbles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m385-615 181 181v-126h28v174H420v-28h127L365-595l20-20Zm353 403q-37.5 0-63.75-26.25T648-302q0-37.5 26.25-63.75T738-392q37.5 0 63.75 26.25T828-302q0 37.5-26.25 63.75T738-212Zm-606 0v-536h696v254h-28v-226H160v480h386v28H132Z"/>
    </Icon>
  );
});

IconMaterialBubblesW100Filled.displayName = 'AmauiIconMaterialBubblesW100Filled';

export default IconMaterialBubblesW100Filled;
