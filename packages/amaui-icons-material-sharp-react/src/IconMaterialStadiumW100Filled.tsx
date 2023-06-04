import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStadiumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StadiumW100Filled'

      short_name='Stadium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.9 7V3.8l3.2 1.6Zm12 0V3.8l3.2 1.6Zm-5.6-.8V3l3.2 1.6ZM9.65 21.05q-1.475-.1-2.675-.313-1.2-.212-2.05-.512-.85-.3-1.312-.675-.463-.375-.463-.8v-8q0-.5.65-.925.65-.425 1.825-.738 1.175-.312 2.8-.5Q10.05 8.4 12 8.4q1.95 0 3.575.187 1.625.188 2.8.5 1.175.313 1.825.738.65.425.65.925v8q0 .425-.462.8-.463.375-1.313.675-.85.3-2.05.512-1.2.213-2.675.313v-4.3h-4.7ZM12 12.4q2.5 0 4.788-.425 2.287-.425 3.362-1.15-.425-.65-2.537-1.188Q15.5 9.1 12 9.1q-3.5 0-5.612.537-2.113.538-2.538 1.188 1.075.725 3.075 1.15 2 .425 5.075.425Z"/>
    </Icon>
  );
});

IconMaterialStadiumW100Filled.displayName = 'AmauiIconMaterialStadiumW100Filled';

export default IconMaterialStadiumW100Filled;
