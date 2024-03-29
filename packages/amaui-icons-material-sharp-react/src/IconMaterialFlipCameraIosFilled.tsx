import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipCameraIosFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipCameraIosFilled'

      short_name='FlipCameraIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.25 10.5-2.5 2.5 1.05 1.05.65-.65q-.15 1.325-1.125 2.213-.975.887-2.325.887-.35 0-.65-.062-.3-.063-.6-.188l-1.1 1.1q.525.3 1.113.475Q11.35 18 12 18q2 0 3.412-1.35 1.413-1.35 1.538-3.3l.75.7L18.75 13Zm-8.5 5 2.5-2.5-1.05-1.05-.65.65q.15-1.325 1.125-2.213Q10.65 9.5 12 9.5q.35 0 .65.062.3.063.6.188l1.1-1.1q-.525-.3-1.112-.475Q12.65 8 12 8q-2 0-3.412 1.35-1.413 1.35-1.538 3.3l-.75-.7L5.25 13ZM2 21V5h5.15L9 3h6l1.85 2H22v16Z"/>
    </Icon>
  );
});

IconMaterialFlipCameraIosFilled.displayName = 'AmauiIconMaterialFlipCameraIosFilled';

export default IconMaterialFlipCameraIosFilled;
