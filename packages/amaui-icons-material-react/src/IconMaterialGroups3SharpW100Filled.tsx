import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGroups3SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Groups3SharpW100Filled'
      short_name='Groups3'

      {...props}
    >
      <path d="m4.7 14.075 1.5-1.5-1.5-1.5-1.5 1.5Zm13.1-.225 1.55-2.5 1.575 2.5Zm-16.5 3.6v-.65q0-.875.938-1.463.937-.587 2.437-.587.275 0 .525.025t.475.075q-.175.35-.275.725-.1.375-.1.8v1.075Zm6 0v-.975q0-1.125 1.3-1.775 1.3-.65 3.4-.65 2.125 0 3.412.65 1.288.65 1.288 1.775v.975Zm11.4 0v-1.075q0-.425-.087-.8-.088-.375-.263-.725.225-.05.475-.075.25-.025.525-.025 1.5 0 2.425.587.925.588.925 1.463v.65ZM12 13.3q-.8 0-1.375-.575t-.575-1.375q0-.825.575-1.388Q11.2 9.4 12 9.4q.825 0 1.388.562.562.563.562 1.388 0 .8-.562 1.375-.563.575-1.388.575Z"/>
    </Icon>
  );
});

IconMaterialGroups3SharpW100Filled.displayName = 'AmauiIconMaterialGroups3SharpW100Filled';

export default IconMaterialGroups3SharpW100Filled;
