import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsTennis = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsTennis'

      short_name='SportsTennis'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.425 20 2 18.6l4.1-4.1q.775-.775 1.062-1.938Q7.45 11.4 7.45 9q0-1.45.65-2.85.65-1.4 1.85-2.6 2.275-2.275 5.025-2.575 2.75-.3 4.525 1.525 1.8 1.8 1.5 4.55-.3 2.75-2.55 5-1.2 1.2-2.6 1.85-1.4.65-2.85.65-2.425 0-3.55.275T7.525 15.9Zm6.875-8.35q1.175 1.15 3.175.85 2-.3 3.575-1.875 1.6-1.6 1.913-3.588.312-1.987-.863-3.112-1.2-1.2-3.137-.9-1.938.3-3.563 1.9Q9.825 6.5 9.488 8.488q-.338 1.987.812 3.162ZM18 23q-1.65 0-2.825-1.175Q14 20.65 14 19q0-1.65 1.175-2.825Q16.35 15 18 15q1.65 0 2.825 1.175Q22 17.35 22 19q0 1.65-1.175 2.825Q19.65 23 18 23Zm0-2q.825 0 1.413-.587Q20 19.825 20 19q0-.825-.587-1.413Q18.825 17 18 17q-.825 0-1.413.587Q16 18.175 16 19q0 .825.587 1.413Q17.175 21 18 21Zm0-2Z"/>
    </Icon>
  );
});

IconMaterialSportsTennis.displayName = 'AmauiIconMaterialSportsTennis';

export default IconMaterialSportsTennis;
