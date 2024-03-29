import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroups3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Groups3Filled'

      short_name='Groups3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 13.525 6.525 11 4 8.475 1.475 11ZM17.5 13 20 9l2.5 4ZM0 18v-1.575q0-1.1 1.113-1.763Q2.225 14 4 14q.325 0 .625.012.3.013.575.063-.35.5-.525 1.075-.175.575-.175 1.225V18Zm6 0v-1.625q0-1.625 1.663-2.625 1.662-1 4.337-1 2.7 0 4.35 1 1.65 1 1.65 2.625V18Zm13.5 0v-1.625q0-.65-.163-1.225-.162-.575-.487-1.075.275-.05.563-.063Q19.7 14 20 14q1.8 0 2.9.662 1.1.663 1.1 1.763V18ZM12 12q-1.25 0-2.125-.875T9 9q0-1.275.875-2.138Q10.75 6 12 6q1.275 0 2.137.862Q15 7.725 15 9q0 1.25-.863 2.125Q13.275 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialGroups3Filled.displayName = 'AmauiIconMaterialGroups3Filled';

export default IconMaterialGroups3Filled;
