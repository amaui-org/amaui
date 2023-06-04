import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonRemoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonRemoveW100'

      short_name='PersonRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.5 10.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM9 11.2q-1.125 0-1.912-.788Q6.3 9.625 6.3 8.5t.788-1.912Q7.875 5.8 9 5.8t1.913.788q.787.787.787 1.912t-.787 1.912Q10.125 11.2 9 11.2Zm-5.95 7q-.325 0-.537-.213-.213-.212-.213-.537v-.55q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q7.65 13.8 9 13.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v.55q0 .325-.212.537-.213.213-.538.213ZM3 17.5h12v-.6q0-.35-.238-.662-.237-.313-.662-.538-1.2-.575-2.487-.888Q10.325 14.5 9 14.5t-2.612.312Q5.1 15.125 3.9 15.7q-.425.225-.663.538Q3 16.55 3 16.9Zm6-7q.825 0 1.413-.588Q11 9.325 11 8.5t-.587-1.412Q9.825 6.5 9 6.5q-.825 0-1.412.588Q7 7.675 7 8.5t.588 1.412Q8.175 10.5 9 10.5Zm0-2Zm0 6Z"/>
    </Icon>
  );
});

IconMaterialPersonRemoveW100.displayName = 'AmauiIconMaterialPersonRemoveW100';

export default IconMaterialPersonRemoveW100;
