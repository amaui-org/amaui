import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPerson4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person4Filled'

      short_name='Person4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13q-1.65 0-2.825-1.175Q8 10.65 8 9V5.5q0-.625.438-1.062Q8.875 4 9.5 4q.375 0 .713.175.337.175.537.5.2-.325.538-.5Q11.625 4 12 4q.375 0 .713.175.337.175.537.5.2-.325.538-.5Q14.125 4 14.5 4q.625 0 1.062.438Q16 4.875 16 5.5V9q0 1.65-1.175 2.825Q13.65 13 12 13Zm-8 8v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q10.35 14 12 14t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20 17.35 20 18.2V21Z"/>
    </Icon>
  );
});

IconMaterialPerson4Filled.displayName = 'AmauiIconMaterialPerson4Filled';

export default IconMaterialPerson4Filled;
