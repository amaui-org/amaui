import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalLaundryService = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLaundryService'

      short_name='LocalLaundryService'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h16v20Zm2-2h12V4H6Zm6-1q2.075 0 3.538-1.462Q17 16.075 17 14q0-2.075-1.462-3.538Q14.075 9 12 9q-2.075 0-3.537 1.462Q7 11.925 7 14q0 2.075 1.463 3.538Q9.925 19 12 19Zm0-1.7q-.675 0-1.287-.25-.613-.25-1.063-.7l4.7-4.7q.45.45.7 1.062.25.613.25 1.288 0 1.35-.975 2.325-.975.975-2.325.975ZM8 7q.425 0 .713-.287Q9 6.425 9 6t-.287-.713Q8.425 5 8 5t-.713.287Q7 5.575 7 6t.287.713Q7.575 7 8 7Zm3 0q.425 0 .713-.287Q12 6.425 12 6t-.287-.713Q11.425 5 11 5t-.712.287Q10 5.575 10 6t.288.713Q10.575 7 11 7ZM6 20V4v16Z"/>
    </Icon>
  );
});

IconMaterialLocalLaundryService.displayName = 'AmauiIconMaterialLocalLaundryService';

export default IconMaterialLocalLaundryService;
