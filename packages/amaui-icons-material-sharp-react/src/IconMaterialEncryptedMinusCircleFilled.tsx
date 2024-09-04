import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedMinusCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedMinusCircleFilled'

      short_name='EncryptedMinusCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-260h240v-40H560v40ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm-200 0q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-26-13-58.5-20t-61.5-7q-116 0-198 82t-82 198q0 62 23.5 112T483-81q-1 0-1.5.5t-1.5.5Zm0-560q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480h4q16-15 33-27.5t37-22.5q3-7 4.5-14.5T560-560q0-33-23.5-56.5T480-640Z"/>
    </Icon>
  );
});

IconMaterialEncryptedMinusCircleFilled.displayName = 'AmauiIconMaterialEncryptedMinusCircleFilled';

export default IconMaterialEncryptedMinusCircleFilled;
