import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMinorCrashFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinorCrashFilled'

      short_name='MinorCrash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8 6.4-3-3L6.4 2l3 3Zm8 0L14.6 5l3-3L19 3.4ZM11 5V0h2v5ZM3 24v-9l2.45-7h13.1L21 15v9h-3v-2H6v2Zm2.8-11h12.4l-1.05-3H6.85Zm1.7 6q.625 0 1.062-.438Q9 18.125 9 17.5t-.438-1.062Q8.125 16 7.5 16t-1.062.438Q6 16.875 6 17.5t.438 1.062Q6.875 19 7.5 19Zm9 0q.625 0 1.062-.438Q18 18.125 18 17.5t-.438-1.062Q17.125 16 16.5 16t-1.062.438Q15 16.875 15 17.5t.438 1.062Q15.875 19 16.5 19Z"/>
    </Icon>
  );
});

IconMaterialMinorCrashFilled.displayName = 'AmauiIconMaterialMinorCrashFilled';

export default IconMaterialMinorCrashFilled;
