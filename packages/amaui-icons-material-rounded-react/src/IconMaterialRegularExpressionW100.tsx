import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRegularExpressionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RegularExpressionW100'

      short_name='RegularExpression'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M131 575q0-68 25-130t72-111q5-5 11-6t11 4q5 5 4 11.5t-6 11.5q-43 45-66 101t-23 118q0 62 23.5 118.5T248 794q5 5 6.5 11.5T251 817q-5 5-11.5 4t-11.5-6q-46-50-71.5-111.5T131 575Zm249 215q-14 0-24-10t-10-24q0-14 10-24t24-10q14 0 24 10t10 24q0 14-10 24t-24 10Zm179-200q-6 0-10-4t-4-10v-77l-66 39q-5 3-10.5 1.5T460 533q-3-5-1.5-10.5t6.5-8.5l66-38-66-38q-5-3-6.5-8.5T460 419q3-5 8.5-6.5T479 414l66 39v-77q0-6 4-10t10-4q6 0 10 4t4 10v77l66-39q5-3 10.5-1.5t8.5 6.5q3 5 1.5 10.5T653 438l-66 38 66 38q5 3 6.5 8.5T658 533q-3 5-8.5 6.5T639 538l-66-39v77q0 6-4 10t-10 4Zm269-15q0 67-25 129.5T731 815q-5 5-11 6t-11-4q-5-5-4-11.5t6-11.5q43-45 66-101.5T800 574q0-62-23.5-118T711 355q-5-5-6-11.5t4-11.5q5-5 11-4t11 6q46 50 71.5 111.5T828 575Z"/>
    </Icon>
  );
});

IconMaterialRegularExpressionW100.displayName = 'AmauiIconMaterialRegularExpressionW100';

export default IconMaterialRegularExpressionW100;
