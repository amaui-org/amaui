import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoPrints = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoPrints'

      short_name='PhotoPrints'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M150-75 76-671l125-15v80l-36 4 54 438 294-36h226v51L150-75Zm431-325q68 0 115.5-47T749-560q-68 0-116.5 47T581-400ZM281-280v-600h600v600H281Zm300-120q-3-66-51.5-113T413-560q5 66 52.5 113T581-400Zm0-120q17 0 28.5-11.5T621-560v-10l10 4q15 6 30.5 3t23.5-17q9-15 6-32t-20-24l-10-4 10-4q17-7 19.5-24.5T685-700q-9-15-24-17.5t-30 3.5l-10 4v-10q0-17-11.5-28.5T581-760q-17 0-28.5 11.5T541-720v10l-10-4q-15-6-30-3.5T477-700q-8 14-5.5 31.5T491-644l10 4-10 4q-17 7-20 24t6 32q8 14 23.5 17t30.5-3l10-4v10q0 17 11.5 28.5T581-520Zm0-80q-17 0-28.5-11.5T541-640q0-17 11.5-28.5T581-680q17 0 28.5 11.5T621-640q0 17-11.5 28.5T581-600ZM361-360h440v-440H361v440ZM219-164Zm142-196v-440 440Z"/>
    </Icon>
  );
});

IconMaterialPhotoPrints.displayName = 'AmauiIconMaterialPhotoPrints';

export default IconMaterialPhotoPrints;
