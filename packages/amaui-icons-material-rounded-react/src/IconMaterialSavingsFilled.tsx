import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSavingsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SavingsFilled'

      short_name='Savings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 11q.425 0 .712-.288Q17 10.425 17 10t-.288-.713Q16.425 9 16 9t-.712.287Q15 9.575 15 10t.288.712Q15.575 11 16 11ZM9 9h3q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7H9q-.425 0-.712.287Q8 7.575 8 8t.288.712Q8.575 9 9 9ZM5.925 21q-.575 0-1.113-.4-.537-.4-.712-.975-.625-2.1-1.025-3.638-.4-1.537-.637-2.7-.238-1.162-.338-2.062-.1-.9-.1-1.725 0-2.3 1.6-3.9T7.5 4h5q.675-.9 1.713-1.45Q15.25 2 16.5 2q.625 0 1.062.438Q18 2.875 18 3.5q0 .15-.038.3-.037.15-.087.275-.1.275-.187.55-.088.275-.138.6L19.825 7.5H21q.425 0 .712.287.288.288.288.713v5.25q0 .325-.188.575-.187.25-.512.375l-2.125.7-1.25 4.175q-.2.65-.725 1.038Q16.675 21 16 21h-2q-.825 0-1.412-.587Q12 19.825 12 19h-2q0 .825-.587 1.413Q8.825 21 8 21Z"/>
    </Icon>
  );
});

IconMaterialSavingsFilled.displayName = 'AmauiIconMaterialSavingsFilled';

export default IconMaterialSavingsFilled;
