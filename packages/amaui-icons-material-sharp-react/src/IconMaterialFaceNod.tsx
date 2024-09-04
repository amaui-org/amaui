import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaceNod = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceNod'

      short_name='FaceNod'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160q-134 0-227-93T40-480q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Zm0-80q100 0 170-70t70-170q0-11-1-21t-3-21q-74 8-143-16.5T332-616q-38 52-93.5 86T120-485q-2 101 68 173t172 72ZM260-400q-17 0-28.5-11.5T220-440q0-17 11.5-28.5T260-480q17 0 28.5 11.5T300-440q0 17-11.5 28.5T260-400Zm200 0q-17 0-28.5-11.5T420-440q0-17 11.5-28.5T460-480q17 0 28.5 11.5T500-440q0 17-11.5 28.5T460-400ZM296-711q-54 15-95 51.5T138-572q53-16 94-52.5t64-86.5Zm57-9q33 57 90.5 89.5T567-600q-33-57-90.5-89.5T353-720Zm-57 9Zm57-9ZM680-80v-200h60v116q58-66 89-147t31-169q0-88-31-169t-89-147v116h-60v-200h200v60h-81q59 72 90 159t31 181q0 94-31 181t-90 159h81v60H680Z"/>
    </Icon>
  );
});

IconMaterialFaceNod.displayName = 'AmauiIconMaterialFaceNod';

export default IconMaterialFaceNod;
