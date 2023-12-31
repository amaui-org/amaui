import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataLossPreventionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataLossPreventionW100'

      short_name='DataLossPrevention'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-586q23 0 38.5-15.5T494-640q0-23-15.5-38.5T440-694q-23 0-38.5 15.5T386-640q0 23 15.5 38.5T440-586Zm1 160q30 0 58.5-10.5T552-467q-30-14-58-20.5t-53-6.5q-34 0-64.5 7T329-467q23 20 52 30.5t60 10.5Zm413 301L637-342q-45 37-91 56.5T440-266q-123 0-208.5-85.5T146-560q0-123 85.5-208.5T440-854q123 0 208.5 85.5T734-560q0 60-19.5 106.5T658-362l216 216-20 21ZM440-294q110 0 188-78t78-188q0-110-78-188t-188-78q-110 0-188 78t-78 188q0 110 78 188t188 78Zm0-266Z"/>
    </Icon>
  );
});

IconMaterialDataLossPreventionW100.displayName = 'AmauiIconMaterialDataLossPreventionW100';

export default IconMaterialDataLossPreventionW100;
