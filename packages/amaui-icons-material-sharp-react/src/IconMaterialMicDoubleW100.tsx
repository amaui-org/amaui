import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicDoubleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicDoubleW100'

      short_name='MicDouble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-146v-146q-91-7-152.5-72T104-520h28q0 83 58.5 141.5T332-320q8.667 0 17.333-.5Q358-321 366-323q5 6 10.5 12t10.5 12l-20 4q-10 2-21 3v146h-28Zm-12-311q-19-8-30.5-24.25T264-520v-240q0-29 19.5-48.5T332-828q29 0 48.5 19.5T400-760v140H300v100q0 16.551 1.5 32.301Q303-471.949 306-457Zm322 5q-29 0-48.5-19.5T560-520v-240q0-29 19.5-48.5T628-828q29 0 48.5 19.5T696-760v240q0 29-19.5 48.5T628-452Zm-14 306v-146q-91-7-152.5-72T400-520h28q0 83 58.5 141.5T628-320q83 0 141.5-58.5T828-520h28q0 91-61.5 156T642-292v146h-28Zm14-334q17 0 28.5-11.5T668-520v-240q0-17-11.5-28.5T628-800q-17 0-28.5 11.5T588-760v240q0 17 11.5 28.5T628-480Zm0-160Z"/>
    </Icon>
  );
});

IconMaterialMicDoubleW100.displayName = 'AmauiIconMaterialMicDoubleW100';

export default IconMaterialMicDoubleW100;
