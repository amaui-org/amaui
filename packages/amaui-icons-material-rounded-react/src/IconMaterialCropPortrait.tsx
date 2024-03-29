import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropPortrait = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortrait'

      short_name='CropPortrait'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 22H6q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v16q0 .825-.587 1.413Q18.825 22 18 22ZM6 20h12V4H6v16Zm0 0V4v16Z"/>
    </Icon>
  );
});

IconMaterialCropPortrait.displayName = 'AmauiIconMaterialCropPortrait';

export default IconMaterialCropPortrait;
