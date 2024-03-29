import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQueryStatsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueryStatsFilled'

      short_name='QueryStats'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.625 18.175 1 17l5-8 3 3.5L13 6l2.725 4.075q-.575.025-1.088.137-.512.113-1.012.313l-.55-.825-3.8 6.175L6.25 12.35ZM21.575 23l-3.125-3.125q-.5.35-1.113.525-.612.175-1.262.175-1.875 0-3.187-1.313-1.313-1.312-1.313-3.187 0-1.875 1.313-3.188 1.312-1.312 3.187-1.312 1.875 0 3.188 1.312 1.312 1.313 1.312 3.188 0 .65-.175 1.262-.175.613-.525 1.138l3.125 3.1Zm-5.5-4.425q1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775-.725-.725-1.775-.725-1.05 0-1.775.725-.725.725-.725 1.775 0 1.05.725 1.775.725.725 1.775.725Zm2.225-8q-.475-.2-.988-.325-.512-.125-1.062-.15L21.375 2 23 3.175Z"/>
    </Icon>
  );
});

IconMaterialQueryStatsFilled.displayName = 'AmauiIconMaterialQueryStatsFilled';

export default IconMaterialQueryStatsFilled;
