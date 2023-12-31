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
      <path d="M280-280v-600h315q-8 19-11.5 39t-3.5 41H360v408q45-42 101.5-65T580-480q61 0 118 23.5T800-391v-189q21 0 41-3.5t39-11.5v315H280Zm300-350ZM144-71 70-666l130-16v80l-40 5 54 437 298-40h218l6 56-592 73Zm70-88Zm493-541 71-200h44l72 200h-43l-15-44h-72l-15 44h-42Zm67-74h52l-26-82-26 82ZM580-400q-35 0-69 10t-63 30h264q-29-20-63-30t-69-10Zm0-340q46 0 78 32t32 78q0 46-32 78t-78 32q-46 0-78-32t-32-78q0-46 32-78t78-32Zm0 80q-13 0-21.5 8.5T550-630q0 13 8.5 21.5T580-600q13 0 21.5-8.5T610-630q0-13-8.5-21.5T580-660Z"/>
    </Icon>
  );
});

IconMaterialPhotoAutoMerge.displayName = 'AmauiIconMaterialPhotoAutoMerge';

export default IconMaterialPhotoAutoMerge;
