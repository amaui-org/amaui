import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFemaleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemaleSharpFilled'
      short_name='Female'

      {...props}
    >
      <path d="M11 21V19H9V17H11V14.9Q9.025 14.55 7.763 13.012Q6.5 11.475 6.5 9.45Q6.5 7.175 8.113 5.588Q9.725 4 12 4Q14.275 4 15.887 5.588Q17.5 7.175 17.5 9.45Q17.5 11.475 16.238 13.012Q14.975 14.55 13 14.9V17H15V19H13V21ZM12 13Q13.45 13 14.475 11.975Q15.5 10.95 15.5 9.5Q15.5 8.05 14.475 7.025Q13.45 6 12 6Q10.55 6 9.525 7.025Q8.5 8.05 8.5 9.5Q8.5 10.95 9.525 11.975Q10.55 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialFemaleSharpFilled.displayName = 'AmauiIconMaterialFemaleSharpFilled';

export default IconMaterialFemaleSharpFilled;
