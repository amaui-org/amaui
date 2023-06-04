import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipCameraIosW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipCameraIosW100'

      short_name='FlipCameraIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.25 11.05 14.3 13l.5.5 1.05-1.05q-.125 1.95-1.237 3.2Q13.5 16.9 12 16.9q-.3 0-.587-.063-.288-.062-.563-.137l-.55.55q.425.15.838.25.412.1.862.1 1.85 0 3.175-1.5 1.325-1.5 1.375-3.65l1.15 1.05.5-.5Zm-8.5 3.9L9.7 13l-.5-.5-1.05 1.05q.125-1.95 1.237-3.2Q10.5 9.1 12 9.1q.3 0 .588.062.287.063.562.138l.55-.55q-.425-.15-.837-.25-.413-.1-.863-.1-1.85 0-3.175 1.5Q7.5 11.4 7.45 13.55L6.3 12.5l-.5.5ZM3.3 19.7V6.3h4.4l1.85-2h4.9l1.85 2h4.4v13.4ZM4 19h16V7H4Zm8-6Z"/>
    </Icon>
  );
});

IconMaterialFlipCameraIosW100.displayName = 'AmauiIconMaterialFlipCameraIosW100';

export default IconMaterialFlipCameraIosW100;
