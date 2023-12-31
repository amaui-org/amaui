import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialActionKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ActionKeyW100Filled'

      short_name='ActionKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M829-112 721-219q-16 13-35.5 20t-41.5 7q-51.562 0-88.281-36.602-36.719-36.602-36.719-88t36.602-87.898q36.602-36.5 88-36.5t87.898 36.425Q768-368.15 768-317q0 21.922-7 41.461Q754-256 741-240l107 108-19 20Zm-593-79q-51.15 0-87.575-36.5Q112-264 112-317q0-51.15 36.425-87.575Q184.85-441 236-441q53 0 89.5 36.425T362-317q0 53-36.5 89.5T236-191Zm408-28q39.6 0 67.8-28 28.2-28 28.2-70 0-39.6-28.2-67.8Q683.6-413 644-413q-42 0-70 28.2T546-317q0 42 28 70t70 28ZM236-597q-51.15 0-87.575-36.5Q112-670 112-723q0-51.15 36.425-87.575Q184.85-847 236-847q53 0 89.5 36.425T362-723q0 53-36.5 89.5T236-597Zm408 0q-53 0-89.5-36.5T518-723q0-51.15 36.5-87.575Q591-847 644-847q51.15 0 87.575 36.425Q768-774.15 768-723q0 53-36.425 89.5T644-597Z"/>
    </Icon>
  );
});

IconMaterialActionKeyW100Filled.displayName = 'AmauiIconMaterialActionKeyW100Filled';

export default IconMaterialActionKeyW100Filled;
