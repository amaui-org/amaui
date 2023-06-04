import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBusinessChipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessChipW100'

      short_name='BusinessChip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 15.85h6q.35 0 .6-.25t.25-.6v-4q0-.35-.25-.6t-.6-.25h-1.15v-1.3q0-.275-.212-.488-.213-.212-.488-.212h-2.3q-.275 0-.487.212-.213.213-.213.488v1.3H9q-.35 0-.6.25t-.25.6v4q0 .35.25.6t.6.25Zm1.85-5.7v-1.3h2.3v1.3ZM8 17.7q-2.375 0-4.037-1.662Q2.3 14.375 2.3 12t1.663-4.037Q5.625 6.3 8 6.3h8q2.375 0 4.038 1.663Q21.7 9.625 21.7 12t-1.662 4.038Q18.375 17.7 16 17.7Zm0-.7h8q2.075 0 3.538-1.463Q21 14.075 21 12t-1.462-3.538Q18.075 7 16 7H8Q5.925 7 4.463 8.462 3 9.925 3 12q0 2.075 1.463 3.537Q5.925 17 8 17Zm4-5Z"/>
    </Icon>
  );
});

IconMaterialBusinessChipW100.displayName = 'AmauiIconMaterialBusinessChipW100';

export default IconMaterialBusinessChipW100;
