import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedAddCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedAddCircleFilled'

      short_name='EncryptedAddCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-260v80q0 8 6 14t14 6q8 0 14-6t6-14v-80h80q8 0 14-6t6-14q0-8-6-14t-14-6h-80v-80q0-8-6-14t-14-6q-8 0-14 6t-6 14v80h-80q-8 0-14 6t-6 14q0 8 6 14t14 6h80Zm20 180q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v122q0 17-15 27.5t-32 5.5q-18-5-36-7.5t-37-2.5q-116 0-198 82t-82 198q0 32 7.5 62.5T429-156q9 19-5.5 34t-33.5 6q-42-22-77-54t-62-70q-43-59-67-129.5T160-516Zm320-124q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480h4q16-15 33-27.5t37-22.5q3-7 4.5-14.5T560-560q0-33-23.5-56.5T480-640Z"/>
    </Icon>
  );
});

IconMaterialEncryptedAddCircleFilled.displayName = 'AmauiIconMaterialEncryptedAddCircleFilled';

export default IconMaterialEncryptedAddCircleFilled;
