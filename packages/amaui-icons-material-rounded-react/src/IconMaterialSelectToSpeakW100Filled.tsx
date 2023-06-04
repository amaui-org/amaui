import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectToSpeakW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectToSpeakW100Filled'

      short_name='SelectToSpeak'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M772 575q0 94-54 169.5T578 855q-5 2-9.5-1t-4.5-8q0-7 3.5-12.5t9.5-7.5q76-32 121.5-100.5T744 575q0-82-45.5-150.5T577 324q-6-2-9.5-7.5T564 304q0-5 4.5-8t9.5-1q86 35 140 110.5T772 575Zm-454 69H218q-13 0-21.5-8.5T188 614v-76q0-13 8.5-21.5T218 508h100l75-75q14-14 32.5-6.5T444 454v244q0 20-18.5 27.5T393 719l-75-75Zm246 20V486q0-6 3-9.5t7-5.5q4-2 8.5-1t7.5 5q17 22 25.5 47.5T624 576q0 27-8.5 52.5T590 675q-3 4-7.5 5t-8.5-1q-4-2-7-6t-3-9ZM92 362V248q0-25 17.5-42.5T152 188h114q6 0 10 4t4 10q0 6-4 10t-10 4H152q-14 0-23 9t-9 23v114q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm602 602q-6 0-10-4t-4-10q0-6 4-10t10-4h114q14 0 23-9t9-23V790q0-6 4-10t10-4q6 0 10 4t4 10v114q0 25-17.5 42.5T808 964H694Z"/>
    </Icon>
  );
});

IconMaterialSelectToSpeakW100Filled.displayName = 'AmauiIconMaterialSelectToSpeakW100Filled';

export default IconMaterialSelectToSpeakW100Filled;
