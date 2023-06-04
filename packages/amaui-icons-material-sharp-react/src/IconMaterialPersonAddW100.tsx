import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddW100'

      short_name='PersonAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.325 13.35v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Zm-9.65-2.15q-1.125 0-1.912-.788-.788-.787-.788-1.912t.788-1.912Q7.55 5.8 8.675 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-6.7 7v-1.3q0-.55.337-1.037.338-.488.913-.763 1.375-.65 2.738-.975 1.362-.325 2.712-.325t2.712.325q1.363.325 2.738.975.575.275.913.763.337.487.337 1.037v1.3Zm.7-.7h12v-.6q0-.35-.237-.662-.238-.313-.663-.538-1.2-.575-2.487-.888Q10 14.5 8.675 14.5t-2.613.312q-1.287.313-2.487.888-.425.225-.662.538-.238.312-.238.662Zm6-7q.825 0 1.413-.588.587-.587.587-1.412t-.587-1.412Q9.5 6.5 8.675 6.5q-.825 0-1.412.588-.588.587-.588 1.412t.588 1.412q.587.588 1.412.588Zm0-2Zm0 6Z"/>
    </Icon>
  );
});

IconMaterialPersonAddW100.displayName = 'AmauiIconMaterialPersonAddW100';

export default IconMaterialPersonAddW100;
