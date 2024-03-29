import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOffFilled'

      short_name='GridOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 19.15-2-2V16h-1.15l-2-2H20v-4h-4v3.15l-2-2V10h-1.15l-2-2H14V4h-4v3.15l-2-2V4H6.85l-2-2H22ZM16 8h4V4h-4Zm4.5 15.3L19.15 22H2V4.8L.7 3.5l1.4-1.4 19.8 19.8ZM16 20h1.15L16 18.8Zm-6-6h1.15L10 12.8Zm0 6h4v-3.2l-.85-.8H10ZM4 8h1.15L4 6.8Zm0 6h4v-3.2l-.85-.8H4Zm0 6h4v-4H4Z"/>
    </Icon>
  );
});

IconMaterialGridOffFilled.displayName = 'AmauiIconMaterialGridOffFilled';

export default IconMaterialGridOffFilled;
