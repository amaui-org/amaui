import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBusinessChipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessChipFilled'

      short_name='BusinessChip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16h6q.425 0 .713-.288Q16 15.425 16 15v-4q0-.425-.287-.713Q15.425 10 15 10h-1V9q0-.425-.287-.713Q13.425 8 13 8h-2q-.425 0-.712.287Q10 8.575 10 9v1H9q-.425 0-.712.287Q8 10.575 8 11v4q0 .425.288.712Q8.575 16 9 16Zm2-6V9h2v1Zm-3 9q-2.925 0-4.962-2.038Q1 14.925 1 12t2.038-4.963Q5.075 5 8 5h8q2.925 0 4.962 2.037Q23 9.075 23 12q0 2.925-2.038 4.962Q18.925 19 16 19Z"/>
    </Icon>
  );
});

IconMaterialBusinessChipFilled.displayName = 'AmauiIconMaterialBusinessChipFilled';

export default IconMaterialBusinessChipFilled;
