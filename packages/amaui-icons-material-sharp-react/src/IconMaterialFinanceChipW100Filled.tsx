import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFinanceChipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FinanceChipW100Filled'

      short_name='FinanceChip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.875 15.875h.475V15.1q.7-.1 1.188-.55.487-.45.487-1.15 0-.625-.5-1.038-.5-.412-1.15-.687V9.6q.3.05.525.237.225.188.325.413l.65-.275q-.2-.425-.6-.7-.4-.275-.9-.375v-.775h-.5V8.9q-.7.075-1.187.475-.488.4-.488 1.075 0 .625.513 1.062.512.438 1.162.713v2.15q-.5-.075-.813-.363-.312-.287-.437-.687l-.65.275q.2.6.7 1 .5.4 1.2.5Zm.5-1.5V12.4q.375.175.663.412.287.238.287.613 0 .45-.263.662-.262.213-.687.288Zm-.5-2.9q-.35-.175-.662-.413-.313-.237-.313-.612 0-.425.3-.613.3-.187.675-.237ZM8 17.7q-2.375 0-4.037-1.662Q2.3 14.375 2.3 12t1.663-4.037Q5.625 6.3 8 6.3h8q2.375 0 4.038 1.663Q21.7 9.625 21.7 12t-1.662 4.038Q18.375 17.7 16 17.7Z"/>
    </Icon>
  );
});

IconMaterialFinanceChipW100Filled.displayName = 'AmauiIconMaterialFinanceChipW100Filled';

export default IconMaterialFinanceChipW100Filled;
