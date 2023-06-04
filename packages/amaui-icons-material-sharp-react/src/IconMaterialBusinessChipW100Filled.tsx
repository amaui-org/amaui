import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBusinessChipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessChipW100Filled'

      short_name='BusinessChip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 15.85h6q.35 0 .6-.25t.25-.6v-4q0-.35-.25-.6t-.6-.25h-1.15v-1.3q0-.275-.212-.488-.213-.212-.488-.212h-2.3q-.275 0-.487.212-.213.213-.213.488v1.3H9q-.35 0-.6.25t-.25.6v4q0 .35.25.6t.6.25Zm1.85-5.7v-1.3h2.3v1.3ZM8 17.7q-2.375 0-4.037-1.662Q2.3 14.375 2.3 12t1.663-4.037Q5.625 6.3 8 6.3h8q2.375 0 4.038 1.663Q21.7 9.625 21.7 12t-1.662 4.038Q18.375 17.7 16 17.7Z"/>
    </Icon>
  );
});

IconMaterialBusinessChipW100Filled.displayName = 'AmauiIconMaterialBusinessChipW100Filled';

export default IconMaterialBusinessChipW100Filled;
