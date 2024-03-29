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
      <path d="M7.9 20.875q-1.75-1.05-2.825-2.863Q4 16.2 4 14q0-2.625 1.25-4.675T8 5.875q1.5-1.4 2.75-2.138L12 3v3.3q0 .925.625 1.462.625.538 1.4.538.425 0 .813-.175.387-.175.712-.575L16 7q1.8 1.05 2.9 2.912Q20 11.775 20 14q0 2.2-1.075 4.012-1.075 1.813-2.825 2.863.425-.6.663-1.313Q17 18.85 17 18.05q0-1-.375-1.887-.375-.888-1.075-1.588L12 11.1l-3.525 3.475q-.725.725-1.1 1.6Q7 17.05 7 18.05q0 .8.238 1.512.237.713.662 1.313ZM12 21q-1.25 0-2.125-.863Q9 19.275 9 18.05q0-.575.225-1.112.225-.538.65-.963L12 13.9l2.125 2.075q.425.425.65.95.225.525.225 1.125 0 1.225-.875 2.087Q13.25 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialLocalFireDepartmentFilled.displayName = 'AmauiIconMaterialLocalFireDepartmentFilled';

export default IconMaterialLocalFireDepartmentFilled;
