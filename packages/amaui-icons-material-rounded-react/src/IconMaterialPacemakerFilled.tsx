import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPacemakerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PacemakerFilled'

      short_name='Pacemaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 22q-1.45 0-2.475-1.025Q3 19.95 3 18.5v-7.925q-.675-.65-1.337-1.313Q1 8.6 1 7.65q0-.675.488-1.163Q1.975 6 2.65 6q.4 0 .738.175.337.175.612.45.275-.275.613-.45Q4.95 6 5.35 6q.675 0 1.163.487Q7 6.975 7 7.65q0 .95-.662 1.612-.663.663-1.338 1.313V18.5q0 .625.438 1.062Q5.875 20 6.5 20t1.062-.438Q8 19.125 8 18.5V7q0-2.075 1.463-3.537Q10.925 2 13 2t3.538 1.463Q18 4.925 18 7v.1q1.725.35 2.863 1.712Q22 10.175 22 12v5q0 2.075-1.462 3.538Q19.075 22 17 22q-2.075 0-3.537-1.462Q12 19.075 12 17v-5q0-1.825 1.137-3.188Q14.275 7.45 16 7.1V7q0-1.25-.875-2.125T13 4q-1.25 0-2.125.875T10 7v11.5q0 1.45-1.025 2.475Q7.95 22 6.5 22ZM17 15q-.825 0-1.412.588Q15 16.175 15 17t.588 1.413Q16.175 19 17 19t1.413-.587Q19 17.825 19 17q0-.825-.587-1.412Q17.825 15 17 15Z"/>
    </Icon>
  );
});

IconMaterialPacemakerFilled.displayName = 'AmauiIconMaterialPacemakerFilled';

export default IconMaterialPacemakerFilled;
