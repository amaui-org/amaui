import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToken = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Token'

      short_name='Token'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 22-9-5V7l9-5 9 5v10ZM9.1 9.25q.55-.575 1.287-.913Q11.125 8 12 8t1.613.337q.737.338 1.287.913l3-1.675L12 4.3 6.1 7.575Zm1.9 9.9v-3.275q-1.3-.35-2.15-1.413Q8 13.4 8 12q0-.275.025-.525t.1-.475L5 9.25v6.575ZM12 14q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm1 5.15 6-3.325V9.25L15.875 11q.075.25.1.488.025.237.025.512 0 1.4-.85 2.462-.85 1.063-2.15 1.413Z"/>
    </Icon>
  );
});

IconMaterialToken.displayName = 'AmauiIconMaterialToken';

export default IconMaterialToken;
