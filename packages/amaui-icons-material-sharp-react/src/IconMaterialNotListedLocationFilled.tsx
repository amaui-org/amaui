import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotListedLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotListedLocationFilled'

      short_name='NotListedLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q.425 0 .738-.312.312-.313.312-.738t-.312-.738Q12.425 13.9 12 13.9t-.737.312q-.313.313-.313.738t.313.738Q11.575 16 12 16Zm-.75-3.1h1.5q0-.475.038-.75.037-.275.112-.45.1-.2.288-.413.187-.212.612-.637.525-.525.788-1.05.262-.525.262-1.05 0-1.175-.775-1.862Q13.3 6 12 6q-1.025 0-1.8.575-.775.575-1.05 1.525l1.35.55q.175-.575.575-.888.4-.312.925-.312.6 0 .975.325t.375.825q0 .425-.187.737-.188.313-.663.713-.425.35-.675.638-.25.287-.375.562-.125.25-.162.613-.038.362-.038 1.037ZM12 22q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Z"/>
    </Icon>
  );
});

IconMaterialNotListedLocationFilled.displayName = 'AmauiIconMaterialNotListedLocationFilled';

export default IconMaterialNotListedLocationFilled;
