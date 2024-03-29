import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetImageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetImageFilled'

      short_name='ResetImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 9V3h2v3.35Q6.25 4.8 8.062 3.9 9.875 3 12 3q2.95 0 5.263 1.675Q19.575 6.35 20.5 9h-2.175q-.85-1.8-2.525-2.9Q14.125 5 12 5q-1.425 0-2.688.525Q8.05 6.05 7.1 7H9v2Zm3 9h12l-3.75-5-3 4L9 14Zm-3 4V12h2v8h14v-8h2v10Z"/>
    </Icon>
  );
});

IconMaterialResetImageFilled.displayName = 'AmauiIconMaterialResetImageFilled';

export default IconMaterialResetImageFilled;
