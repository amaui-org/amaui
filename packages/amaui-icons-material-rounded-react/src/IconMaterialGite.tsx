import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGite = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Gite'

      short_name='Gite'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19q-.825 0-1.412-.587Q2 17.825 2 17v-6.175q0-.4.15-.763.15-.362.425-.637l2.85-2.85q.275-.275.637-.425.363-.15.763-.15H7V5q0-.425.287-.713Q7.575 4 8 4t.713.287Q9 4.575 9 5v1h8.175q.4 0 .763.15.362.15.637.425l2.85 2.85q.275.275.425.637.15.363.15.763V17q0 .825-.587 1.413Q20.825 19 20 19Zm12-2h4v-6.175l-2-2-2 2ZM4 17h10v-5H4Z"/>
    </Icon>
  );
});

IconMaterialGite.displayName = 'AmauiIconMaterialGite';

export default IconMaterialGite;
