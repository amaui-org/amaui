import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWrapText = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrapText'

      short_name='WrapText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.7 20.7 11 17l3.7-3.7 1.4 1.45L14.85 16h2.4q.725 0 1.238-.512.512-.513.512-1.238t-.512-1.238q-.513-.512-1.238-.512H4v-2h13.25q1.575 0 2.663 1.087Q21 12.675 21 14.25q0 1.575-1.087 2.663Q18.825 18 17.25 18h-2.4l1.25 1.25ZM4 18v-2h5v2ZM4 7V5h16v2Z"/>
    </Icon>
  );
});

IconMaterialWrapText.displayName = 'AmauiIconMaterialWrapText';

export default IconMaterialWrapText;
