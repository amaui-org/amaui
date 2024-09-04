import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRowAboveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRowAboveW100Filled'

      short_name='AddRowAbove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.96-640q-5.96 0-9.96-4.03-4-4.02-4-9.97v-66h-66q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-66v66q0 5.95-4.04 9.97-4.03 4.03-10 4.03ZM232-132q-24.75 0-42.37-17.63Q172-167.25 172-192v-237h616v237q0 24.75-17.62 42.37Q752.75-132 728-132H232Zm-60-325v-231q0-24.75 17.63-42.38Q207.25-748 232-748h41q5.62 0 9.31 4 3.69 4 3.69 10 0 80.51 56.26 137.26Q398.52-540 480-540q81.48 0 137.74-56.74Q674-653.49 674-734q0-5.6 3.61-9.8 3.61-4.2 9.39-4.2h41q24.75 0 42.38 17.62Q788-712.75 788-688v231H172Z"/>
    </Icon>
  );
});

IconMaterialAddRowAboveW100Filled.displayName = 'AmauiIconMaterialAddRowAboveW100Filled';

export default IconMaterialAddRowAboveW100Filled;
