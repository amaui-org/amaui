import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHistoryOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HistoryOffW100Filled'

      short_name='HistoryOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478-760q-31 0-60.5 7T361-733q-5 2-10.5.5T342-739q-3-5-1.5-11t6.5-8q31-14 63.5-22t67.5-8q64 0 120 24t98 66q42 42 66 98t24 120q0 37-8 70.5T755-345q-2 5-8 7t-11-1q-5-3-6.5-8.5t.5-10.5q14-28 21-58.5t7-63.5q0-117-81.5-198.5T478-760Zm3 80q6 0 10 4t4 10v54q0 6-4 10t-10 4q-6 0-10-4t-4-10v-54q0-6 4-10t10-4Zm-3 508q-58 0-110-20t-93-56q-38-33-63.5-77.5T176-422q-1-6 2-10.5t9-5.5q6-1 10.5 2.5t6.5 9.5q10 48 33.5 87.5T296-269q37 32 83.5 50.5T478-200q51 0 96.5-17t81.5-47L280-640h-28q-13 0-21.5-8.5T222-670v-28L102-818q-4-4-4.5-9.5T102-838q5-5 10-5t10 5l716 716q4 4 4.5 9.5T838-102q-5 5-10 5t-10-5L676-244q-41 34-91 53t-107 19Z"/>
    </Icon>
  );
});

IconMaterialHistoryOffW100Filled.displayName = 'AmauiIconMaterialHistoryOffW100Filled';

export default IconMaterialHistoryOffW100Filled;
