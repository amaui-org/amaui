import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropFilled'

      short_name='Crop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 15V7H9V5h8q.825 0 1.413.588Q19 6.175 19 7v8Zm1 8q-.425 0-.712-.288Q17 22.425 17 22v-3H7q-.825 0-1.412-.587Q5 17.825 5 17V7H2q-.425 0-.712-.287Q1 6.425 1 6t.288-.713Q1.575 5 2 5h3V2q0-.425.287-.713Q5.575 1 6 1t.713.287Q7 1.575 7 2v15h15q.425 0 .712.288.288.287.288.712t-.288.712Q22.425 19 22 19h-3v3q0 .425-.288.712Q18.425 23 18 23Z"/>
    </Icon>
  );
});

IconMaterialCropFilled.displayName = 'AmauiIconMaterialCropFilled';

export default IconMaterialCropFilled;
