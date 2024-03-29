import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRamenDining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDining'

      short_name='RamenDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 20h4v-1.1l1.25-.5q1.625-.65 2.763-1.813Q19.15 15.425 19.65 14H4.35q.5 1.425 1.625 2.587Q7.1 17.75 8.75 18.4l1.25.5Zm-2 2v-1.75Q5.325 19.2 3.663 17 2 14.8 2 12h2V4l18-2v1.5L10.5 4.8v1.7H22V8H10.5v4H22q0 2.8-1.663 5-1.662 2.2-4.337 3.25V22ZM8 6.5h1V4.95l-1 .1Zm-2.5 0h1V5.25l-1 .1ZM8 12h1V8H8Zm-2.5 0h1V8h-1Zm6.5 8Z"/>
    </Icon>
  );
});

IconMaterialRamenDining.displayName = 'AmauiIconMaterialRamenDining';

export default IconMaterialRamenDining;
