import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPerson2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person2Filled'

      short_name='Person2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.362Q10.525 4 12 4t2.575.938q1.1.937 1.3 2.362l.325 2.45q.125.9-.475 1.575-.6.675-1.5.675ZM4 20v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20 16.35 20 17.2V20Z"/>
    </Icon>
  );
});

IconMaterialPerson2Filled.displayName = 'AmauiIconMaterialPerson2Filled';

export default IconMaterialPerson2Filled;
