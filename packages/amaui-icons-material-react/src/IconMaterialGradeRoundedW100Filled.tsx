import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeRoundedW100Filled'
      short_name='Grade'

      {...props}
    >
      <path d="M9.225 17.8Q9 17.975 8.762 17.812Q8.525 17.65 8.6 17.375L9.65 13.9L7.05 12.025Q6.8 11.85 6.888 11.575Q6.975 11.3 7.275 11.3H10.55L11.625 7.775Q11.675 7.625 11.775 7.55Q11.875 7.475 12 7.475Q12.125 7.475 12.225 7.55Q12.325 7.625 12.375 7.775L13.45 11.3H16.725Q17.025 11.3 17.113 11.575Q17.2 11.85 16.95 12.025L14.35 13.9L15.4 17.375Q15.475 17.65 15.238 17.812Q15 17.975 14.775 17.8L12 15.7Z"/>
    </Icon>
  );
});

IconMaterialGradeRoundedW100Filled.displayName = 'AmauiIconMaterialGradeRoundedW100Filled';

export default IconMaterialGradeRoundedW100Filled;
