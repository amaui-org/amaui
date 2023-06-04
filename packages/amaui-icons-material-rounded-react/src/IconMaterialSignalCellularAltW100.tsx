import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAltW100'

      short_name='SignalCellularAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.5 18.35q-.25 0-.425-.175t-.175-.425V4.25q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425v13.5q0 .25-.175.425t-.425.175Zm-10 0q-.125 0-.237-.05-.113-.05-.188-.125t-.125-.187q-.05-.113-.05-.238v-3.5q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425v3.5q0 .125-.05.238-.05.112-.125.187t-.187.125q-.113.05-.238.05Zm5 0q-.25 0-.425-.175t-.175-.425v-8.5q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425v8.5q0 .25-.175.425t-.425.175Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAltW100.displayName = 'AmauiIconMaterialSignalCellularAltW100';

export default IconMaterialSignalCellularAltW100;
