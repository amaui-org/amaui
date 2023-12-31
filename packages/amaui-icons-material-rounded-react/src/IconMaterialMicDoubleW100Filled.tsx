import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicDoubleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicDoubleW100Filled'

      short_name='MicDouble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-146q-6 0-10-4t-4-10v-132q-86-7-146-66t-67-144q-1-7 3-12.5t10-5.5q7 0 10.5 6t4.5 14q8 76 64.5 128T332-320q9 0 17.5-.5T366-323q5 6 10.5 12t10.5 12l-20 4q-10 2-21 3v132q0 6-4 10t-10 4Zm296-306q-29 0-48.5-19.5T560-520v-240q0-29 19.5-48.5T628-828q29 0 48.5 19.5T696-760v240q0 29-19.5 48.5T628-452Zm-322-5q-19-8-30.5-24.5T264-520v-240q0-29 19.5-48.5T332-828q29 0 48.5 19.5T400-760v141q-44 5-71.5 37.5T301-505q0 11 1.5 24t3.5 24Zm322 137q78 0 134.5-52T827-500q1-8 4.5-14t10.5-6q6 0 10 5.5t3 12.5q-7 85-67 144t-146 66v132q0 6-4 10t-10 4q-6 0-10-4t-4-10v-132q-86-7-146-66t-67-144q-1-7 3-12.5t10-5.5q7 0 10.5 6t4.5 14q8 76 64.5 128T628-320Z"/>
    </Icon>
  );
});

IconMaterialMicDoubleW100Filled.displayName = 'AmauiIconMaterialMicDoubleW100Filled';

export default IconMaterialMicDoubleW100Filled;
