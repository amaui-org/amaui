import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPharmacy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPharmacy'

      short_name='LocalPharmacy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.625 21q-.675 0-1.15-.475Q3 20.05 3 19.375q0-.15.038-.362.037-.213.087-.363L5 13 3.125 7.35q-.05-.15-.087-.35Q3 6.8 3 6.625q0-.675.475-1.15Q3.95 5 4.625 5H15.7l1.025-2.825q.175-.475.638-.713.462-.237.962-.037.5.2.713.65.212.45.037.95L18.35 5h1.025q.675 0 1.15.475.475.475.475 1.15 0 .15-.038.362-.037.213-.087.363L19 13l1.875 5.65q.05.15.087.35.038.2.038.375 0 .675-.475 1.15-.475.475-1.15.475ZM12 17q.425 0 .713-.288Q13 16.425 13 16v-2h2q.425 0 .713-.288Q16 13.425 16 13t-.287-.713Q15.425 12 15 12h-2v-2q0-.425-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10v2H9q-.425 0-.712.287Q8 12.575 8 13t.288.712Q8.575 14 9 14h2v2q0 .425.288.712.287.288.712.288Zm-6.9 2h13.8l-2-6 2-6H5.1l2 6Zm6.9-6Z"/>
    </Icon>
  );
});

IconMaterialLocalPharmacy.displayName = 'AmauiIconMaterialLocalPharmacy';

export default IconMaterialLocalPharmacy;
