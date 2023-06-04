import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalLaundryServiceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLaundryServiceW100Filled'

      short_name='LocalLaundryService'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425ZM12 18q1.65 0 2.825-1.175Q16 15.65 16 14q0-1.65-1.175-2.825Q13.65 10 12 10q-1.65 0-2.825 1.175Q8 12.35 8 14q0 1.65 1.175 2.825Q10.35 18 12 18Zm0-.7q-.65 0-1.25-.25t-1.05-.7l4.65-4.65q.45.45.7 1.05.25.6.25 1.25 0 1.35-.975 2.325-.975.975-2.325.975ZM8 7q.425 0 .713-.287Q9 6.425 9 6t-.287-.713Q8.425 5 8 5t-.713.287Q7 5.575 7 6t.287.713Q7.575 7 8 7Zm3 0q.425 0 .713-.287Q12 6.425 12 6t-.287-.713Q11.425 5 11 5t-.712.287Q10 5.575 10 6t.288.713Q10.575 7 11 7Z"/>
    </Icon>
  );
});

IconMaterialLocalLaundryServiceW100Filled.displayName = 'AmauiIconMaterialLocalLaundryServiceW100Filled';

export default IconMaterialLocalLaundryServiceW100Filled;
