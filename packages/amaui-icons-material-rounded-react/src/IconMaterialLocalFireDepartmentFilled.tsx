import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalFireDepartmentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalFireDepartmentFilled'

      short_name='LocalFireDepartment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.9 20.875q-1.75-1.05-2.825-2.863Q4 16.2 4 14q0-2.825 1.675-5.425 1.675-2.6 4.6-4.55.55-.375 1.138-.038Q12 4.325 12 5v1.3q0 .85.588 1.425.587.575 1.437.575.425 0 .813-.187.387-.188.687-.538.2-.25.513-.313.312-.062.587.138Q18.2 8.525 19.1 10.275q.9 1.75.9 3.725 0 2.2-1.075 4.012-1.075 1.813-2.825 2.863.425-.6.663-1.313Q17 18.85 17 18.05q0-1-.375-1.887-.375-.888-1.075-1.588L12 11.1l-3.525 3.475q-.725.725-1.1 1.6Q7 17.05 7 18.05q0 .8.238 1.512.237.713.662 1.313ZM12 21q-1.25 0-2.125-.863Q9 19.275 9 18.05q0-.575.225-1.112.225-.538.65-.963L12 13.9l2.125 2.075q.425.425.65.95.225.525.225 1.125 0 1.225-.875 2.087Q13.25 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialLocalFireDepartmentFilled.displayName = 'AmauiIconMaterialLocalFireDepartmentFilled';

export default IconMaterialLocalFireDepartmentFilled;
