import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradeRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeRoundedW100'
      short_name='Grade'

      {...props}
    >
      <path d="M12 12.775ZM9.225 17.8Q9 17.975 8.762 17.812Q8.525 17.65 8.6 17.375L9.65 13.9L7.075 12.025Q6.825 11.85 6.925 11.575Q7.025 11.3 7.3 11.3H10.55L11.625 7.775Q11.675 7.625 11.775 7.55Q11.875 7.475 12 7.475Q12.125 7.475 12.225 7.55Q12.325 7.625 12.375 7.775L13.45 11.3H16.7Q16.975 11.3 17.075 11.575Q17.175 11.85 16.925 12.025L14.35 13.9L15.4 17.375Q15.475 17.65 15.238 17.812Q15 17.975 14.775 17.8L12 15.7ZM9.6 16.65 12 14.825 14.4 16.65 13.525 13.625 15.75 12H12.95L12 8.9L11.05 12H8.25L10.475 13.625Z"/>
    </Icon>
  );
});

IconMaterialGradeRoundedW100.displayName = 'AmauiIconMaterialGradeRoundedW100';

export default IconMaterialGradeRoundedW100;
