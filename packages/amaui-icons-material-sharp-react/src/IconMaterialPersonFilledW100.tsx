import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonFilledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonFilledW100'

      short_name='PersonFilled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 11.2q-1.125 0-1.912-.788Q9.3 9.625 9.3 8.5t.788-1.912Q10.875 5.8 12 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-6.7 7v-1.3q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q10.65 13.8 12 13.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v1.3Zm.7-.7h12v-.6q0-.35-.237-.662-.238-.313-.663-.538-1.2-.575-2.487-.888Q13.325 14.5 12 14.5t-2.613.312Q8.1 15.125 6.9 15.7q-.425.225-.662.538Q6 16.55 6 16.9Zm6-7q.825 0 1.413-.588Q14 9.325 14 8.5t-.587-1.412Q12.825 6.5 12 6.5q-.825 0-1.412.588Q10 7.675 10 8.5t.588 1.412q.587.588 1.412.588Zm0-2Zm0 9Z"/>
    </Icon>
  );
});

IconMaterialPersonFilledW100.displayName = 'AmauiIconMaterialPersonFilledW100';

export default IconMaterialPersonFilledW100;
