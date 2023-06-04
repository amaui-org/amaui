import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImmunologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImmunologyW100Filled'

      short_name='Immunology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M521 924q-26 0-61.5-3.5t-72.5-11q-37-7.5-71.5-19.5T258 860q-27-21-56.5-65.5t-54-96q-24.5-51.5-40-103T92 508q0-34 14.5-61.5T144 396q23-23 51.5-42.5T251 316q54-35 120-61.5T506 228q66 0 125 28t114 66q13 9 34 27t41 44.5q20 26.5 34 60t14 73.5q0 64-29.5 134T761 789.5Q713 848 650.5 886T521 924ZM414 790q42 0 70-30t28-68q0-17-6.5-33.5T483 628q-25-23-41-50t-24-60q-8-35-35-55.5T324 442q-38 0-68 30t-30 68q0 34 14 77.5t39.5 81.5q25.5 38 60 64.5T414 790Zm0-28q-30 0-58.5-25t-51-60Q282 642 268 604t-14-64q0-26 22-48t48-22q19 0 39.5 13t27.5 41q9 38 26 68t46 57q11 10 16 21.5t5 23.5q0 25-19 46.5T414 762Zm236-172q6 0 10-4t4-10v-52l48 24q5 3 11 1.5t9-6.5q3-5 2-11t-6-8l-56-28 56-28q5-3 5-8.5t-2-10.5q-3-5-8.5-5.5T712 445l-48 24v-53q0-6-4-10t-10-4q-6 0-10 4t-4 10v55l-48-26q-5-3-11-1.5t-9 6.5q-2 4-1.5 10t5.5 8l52 23-49 33q-5 3-7 8.5t1 10.5q3 5 8.5 6.5T588 548l48-26v54q0 6 4 10t10 4Z"/>
    </Icon>
  );
});

IconMaterialImmunologyW100Filled.displayName = 'AmauiIconMaterialImmunologyW100Filled';

export default IconMaterialImmunologyW100Filled;
