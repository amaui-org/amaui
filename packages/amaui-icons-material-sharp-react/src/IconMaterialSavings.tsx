import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSavings = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Savings'

      short_name='Savings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 11q.425 0 .712-.288Q17 10.425 17 10t-.288-.713Q16.425 9 16 9t-.712.287Q15 9.575 15 10t.288.712Q15.575 11 16 11ZM8 9h5V7H8ZM4.5 21q-.75-2.475-1.225-4.25-.475-1.775-.762-3.088-.288-1.312-.401-2.287Q2 10.4 2 9.5q0-2.3 1.6-3.9T7.5 4h5q.675-.9 1.713-1.45Q15.25 2 16.5 2q.625 0 1.062.438Q18 2.875 18 3.5q0 .15-.038.3-.037.15-.087.275-.1.275-.187.55-.088.275-.138.6L19.825 7.5H22v6.975l-2.825.925L17.5 21H12v-2h-2v2ZM6 19h2v-2h6v2h2l1.55-5.15 2.45-.825V9.5h-1L15.5 6q0-.5.062-.975.063-.475.188-.925-.725.2-1.275.687-.55.488-.8 1.213H7.5Q6.05 6 5.025 7.025 4 8.05 4 9.5q0 1.025.525 3.512Q5.05 15.5 6 19Zm6-7.45Z"/>
    </Icon>
  );
});

IconMaterialSavings.displayName = 'AmauiIconMaterialSavings';

export default IconMaterialSavings;
