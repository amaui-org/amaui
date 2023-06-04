import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlatwareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlatwareW100'

      short_name='Flatware'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.9 20.35q-.15 0-.25-.1t-.1-.25v-9.5q-.975-.45-1.488-1.375Q10.55 8.2 10.55 7.1q0-1.325.588-2.388.587-1.062 1.762-1.062t1.763 1.062q.587 1.063.587 2.388 0 1.1-.512 2.025-.513.925-1.488 1.375V20q0 .15-.1.25t-.25.1Zm4.9 0q-.15 0-.25-.1t-.1-.25V4.45q0-.325.213-.475.212-.15.487 0 .8.425 1.25 1.25.45.825.45 1.775v4.6q0 .325-.212.537-.213.213-.538.213h-.95V20q0 .15-.1.25t-.25.1Zm-11.4 0q-.15 0-.25-.1t-.1-.25v-9.5q-.8-.05-1.35-.575Q4.15 9.4 4.15 8.6V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.65h1.2V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.65h1.2V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.6q0 .8-.55 1.325-.55.525-1.35.575V20q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFlatwareW100.displayName = 'AmauiIconMaterialFlatwareW100';

export default IconMaterialFlatwareW100;
