import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConversionPathOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConversionPathOffW100Filled'

      short_name='ConversionPathOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M842 978 100 236q-4-4-4.5-9.5T100 216q5-5 10-5t10 5l742 742q4 4 4.5 9.5T862 978q-5 5-10 5t-10-5ZM440 830q-56 0-95-39t-39-95q0-56 39-95t95-39h26l28 28h-54q-44 0-75 31t-31 75q0 44 31 75t75 31h266l97 97q-10 5-20.5 8t-22.5 3q-35 0-61.5-22.5T667 830H440Zm412 6L740 724q5-1 10-1.5t10-.5q39 0 66.5 27.5T854 816q0 5-.5 10t-1.5 10ZM588 572l-21-21q26-13 42.5-38.5T626 456q0-44-31-75t-75-31H366l-28-28h182q56 0 95 39t39 95q0 37-18 68t-48 48ZM200 430q-39 0-66.5-27.5T106 336q0-27 14-49t37-34l127 127q-12 23-35 36.5T200 430Z"/>
    </Icon>
  );
});

IconMaterialConversionPathOffW100Filled.displayName = 'AmauiIconMaterialConversionPathOffW100Filled';

export default IconMaterialConversionPathOffW100Filled;
