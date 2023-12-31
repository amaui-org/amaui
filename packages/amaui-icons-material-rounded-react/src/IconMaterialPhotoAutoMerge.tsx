import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoAutoMerge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAutoMerge'

      short_name='PhotoAutoMerge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280q-33 0-56.5-23.5T280-360v-440q0-33 23.5-56.5T360-880h235q-8 19-11.5 39t-3.5 41H360v408q45-42 101.5-65T580-480q61 0 118 23t102 65q1 1 0 0v-188q21 0 41-3.5t39-11.5v235q0 33-23.5 56.5T800-280H360Zm220-350Zm-68 430h218q0 26-21 43.5T661-135L224-81q-33 4-58.5-16T135-150L80-587q-5-33 16-59t54-30l50-6v80l-40 5 54 437 298-40Zm-298 40Zm550-584-11 31q-2 6-7 9.5t-11 3.5q-11 0-17-8t-2-18l57-160q2-6 7.5-10t12.5-4h14q7 0 12.5 4t7.5 10l57 159q4 10-1.5 18.5T866-700q-7 0-12.5-4t-7.5-10l-10-30h-72Zm10-30h52l-26-82-26 82ZM580-400q-35 0-69 10t-63 30h264q-29-20-63-30t-69-10Zm0-340q46 0 78 32t32 78q0 46-32 78t-78 32q-46 0-78-32t-32-78q0-46 32-78t78-32Zm0 80q-13 0-21.5 8.5T550-630q0 13 8.5 21.5T580-600q13 0 21.5-8.5T610-630q0-13-8.5-21.5T580-660Z"/>
    </Icon>
  );
});

IconMaterialPhotoAutoMerge.displayName = 'AmauiIconMaterialPhotoAutoMerge';

export default IconMaterialPhotoAutoMerge;
