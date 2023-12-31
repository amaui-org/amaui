import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallQualityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallQualityW100'

      short_name='CallQuality'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M702-132q-97 0-198.5-52t-184-134.5Q237-401 184.5-502T132-700q0-18 12-30t30-12h80q18 0 30.5 10.5T301-704l18 82q3 16-.5 29T304-571l-84 77q56 94 125 162t163 120l82-86q11-11 22.5-14.5t25.5-.5l68 14q17 4 27.5 16.5T744-252v78q0 18-12 30t-30 12ZM206-520l80-72q5-4 6.5-11t-.5-13l-18-82q-2-8-7-12t-13-4h-80q-6 0-10 4t-4 10q0 41 12.5 87t33.5 93Zm328 320q41 21 88.5 30.5T702-160q6 0 10-4t4-10v-78q0-8-4-13t-12-7l-68-14q-6-2-10.5-.5T612-280l-78 80ZM206-520Zm328 320Zm120.148-280Q582-480 531-530.852q-51-50.851-51-123Q480-726 530.852-777q50.851-51 123-51Q726-828 777-777.148q51 50.851 51 123Q828-582 777.148-531q-50.851 51-123 51ZM654-540q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8v-110q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v110q0 5.6 4.2 9.8 4.2 4.2 9.8 4.2Zm0-184q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialCallQualityW100.displayName = 'AmauiIconMaterialCallQualityW100';

export default IconMaterialCallQualityW100;
