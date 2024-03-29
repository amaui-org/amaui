import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardCommandKey = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCommandKey'

      short_name='KeyboardCommandKey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 21q-1.45 0-2.475-1.025Q3 18.95 3 17.5q0-1.45 1.025-2.475Q5.05 14 6.5 14H8v-4H6.5q-1.45 0-2.475-1.025Q3 7.95 3 6.5q0-1.45 1.025-2.475Q5.05 3 6.5 3q1.45 0 2.475 1.025Q10 5.05 10 6.5V8h4V6.5q0-1.45 1.025-2.475Q16.05 3 17.5 3q1.45 0 2.475 1.025Q21 5.05 21 6.5q0 1.45-1.025 2.475Q18.95 10 17.5 10H16v4h1.5q1.45 0 2.475 1.025Q21 16.05 21 17.5q0 1.45-1.025 2.475Q18.95 21 17.5 21q-1.45 0-2.475-1.025Q14 18.95 14 17.5V16h-4v1.5q0 1.45-1.025 2.475Q7.95 21 6.5 21Zm0-2q.625 0 1.062-.438Q8 18.125 8 17.5V16H6.5q-.625 0-1.062.438Q5 16.875 5 17.5t.438 1.062Q5.875 19 6.5 19Zm11 0q.625 0 1.062-.438Q19 18.125 19 17.5t-.438-1.062Q18.125 16 17.5 16H16v1.5q0 .625.438 1.062.437.438 1.062.438ZM10 14h4v-4h-4ZM6.5 8H8V6.5q0-.625-.438-1.062Q7.125 5 6.5 5t-1.062.438Q5 5.875 5 6.5t.438 1.062Q5.875 8 6.5 8ZM16 8h1.5q.625 0 1.062-.438Q19 7.125 19 6.5t-.438-1.062Q18.125 5 17.5 5t-1.062.438Q16 5.875 16 6.5Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCommandKey.displayName = 'AmauiIconMaterialKeyboardCommandKey';

export default IconMaterialKeyboardCommandKey;
