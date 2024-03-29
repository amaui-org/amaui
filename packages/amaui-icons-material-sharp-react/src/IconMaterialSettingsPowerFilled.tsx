import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsPowerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPowerFilled'

      short_name='SettingsPower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 12V2h2v10Zm1 7q-3.35 0-5.675-2.325Q4 14.35 4 11q0-1.975.912-3.7.913-1.725 2.538-2.85L8.9 5.9q-1.35.8-2.125 2.162Q6 9.425 6 11q0 2.5 1.75 4.25T12 17q2.5 0 4.25-1.75T18 11q0-1.575-.775-2.938Q16.45 6.7 15.1 5.9l1.45-1.45q1.625 1.125 2.537 2.85Q20 9.025 20 11q0 3.35-2.325 5.675Q15.35 19 12 19Zm-4 5q-.425 0-.713-.288Q7 23.425 7 23t.287-.712Q7.575 22 8 22t.713.288Q9 22.575 9 23t-.287.712Q8.425 24 8 24Zm4 0q-.425 0-.712-.288Q11 23.425 11 23t.288-.712Q11.575 22 12 22t.713.288Q13 22.575 13 23t-.287.712Q12.425 24 12 24Zm4 0q-.425 0-.712-.288Q15 23.425 15 23t.288-.712Q15.575 22 16 22t.712.288Q17 22.575 17 23t-.288.712Q16.425 24 16 24Z"/>
    </Icon>
  );
});

IconMaterialSettingsPowerFilled.displayName = 'AmauiIconMaterialSettingsPowerFilled';

export default IconMaterialSettingsPowerFilled;
