import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBloodtype = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bloodtype'

      short_name='Bloodtype'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 18h4q.425 0 .713-.288Q15 17.425 15 17t-.287-.712Q14.425 16 14 16h-4q-.425 0-.712.288Q9 16.575 9 17t.288.712Q9.575 18 10 18Zm2-3q.425 0 .713-.288Q13 14.425 13 14v-1h1q.425 0 .713-.288Q15 12.425 15 12t-.287-.713Q14.425 11 14 11h-1v-1q0-.425-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10v1h-1q-.425 0-.712.287Q9 11.575 9 12t.288.712Q9.575 13 10 13h1v1q0 .425.288.712.287.288.712.288Zm0 7q-3.175 0-5.587-2.212Q4 17.575 4 13.8q0-2.375 1.8-5.15 1.8-2.775 5.45-6 .15-.125.35-.2.2-.075.4-.075t.4.075q.2.075.35.2 3.65 3.225 5.45 6Q20 11.425 20 13.8q0 3.775-2.413 5.988Q15.175 22 12 22Zm0-2q2.525 0 4.262-1.725Q18 16.55 18 13.8q0-1.775-1.475-4.063Q15.05 7.45 12 4.65q-3.05 2.8-4.525 5.087Q6 12.025 6 13.8q0 2.75 1.737 4.475Q9.475 20 12 20Zm0-6.2Z"/>
    </Icon>
  );
});

IconMaterialBloodtype.displayName = 'AmauiIconMaterialBloodtype';

export default IconMaterialBloodtype;
