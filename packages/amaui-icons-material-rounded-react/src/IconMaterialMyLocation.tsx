import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMyLocation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MyLocation'

      short_name='MyLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22.95q-.425 0-.712-.287Q11 22.375 11 21.95v-1q-3.125-.35-5.362-2.587Q3.4 16.125 3.05 13h-1q-.425 0-.713-.288-.287-.287-.287-.712t.287-.713Q1.625 11 2.05 11h1q.35-3.125 2.588-5.363Q7.875 3.4 11 3.05v-1q0-.425.288-.713.287-.287.712-.287t.713.287q.287.288.287.713v1q3.125.35 5.363 2.587Q20.6 7.875 20.95 11h1q.425 0 .713.287.287.288.287.713t-.287.712q-.288.288-.713.288h-1q-.35 3.125-2.587 5.363Q16.125 20.6 13 20.95v1q0 .425-.287.713-.288.287-.713.287ZM12 19q2.9 0 4.95-2.05Q19 14.9 19 12q0-2.9-2.05-4.95Q14.9 5 12 5 9.1 5 7.05 7.05 5 9.1 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm0-3q-1.65 0-2.825-1.175Q8 13.65 8 12q0-1.65 1.175-2.825Q10.35 8 12 8q1.65 0 2.825 1.175Q16 10.35 16 12q0 1.65-1.175 2.825Q13.65 16 12 16Zm0-2q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm0-2Z"/>
    </Icon>
  );
});

IconMaterialMyLocation.displayName = 'AmauiIconMaterialMyLocation';

export default IconMaterialMyLocation;
