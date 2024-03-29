import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightFilled'

      short_name='Light'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-1.65 0-2.825-1.175Q8 18.65 8 17H5q-.825 0-1.413-.587Q3 15.825 3 15q0-3.5 2.3-6.037Q7.6 6.425 11 6.05V4q0-.425.288-.713Q11.575 3 12 3t.713.287Q13 3.575 13 4v2.05q3.4.375 5.7 2.913Q21 11.5 21 15q0 .825-.587 1.413Q19.825 17 19 17h-3q0 1.65-1.175 2.825Q13.65 21 12 21Zm-7-6h14q0-2.9-2.05-4.95Q14.9 8 12 8q-2.9 0-4.95 2.05Q5 12.1 5 15Z"/>
    </Icon>
  );
});

IconMaterialLightFilled.displayName = 'AmauiIconMaterialLightFilled';

export default IconMaterialLightFilled;
