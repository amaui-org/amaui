import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStrokePartial = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrokePartial'

      short_name='StrokePartial'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M477 976q-83 0-156-31.5T194 859q-54-54-85.5-127T77 576q0-83 31.5-156T194 293q54-54 127-85.5T477 176q83 0 156 31.5T760 293q54 54 85.5 127T877 576q0 83-31.5 156T760 859q-54 54-127 85.5T477 976Zm278-240H372l-40 40h396q8-10 14.5-19.5T755 736Zm40-120H493l-40 40h334q2-10 4-19.5t4-20.5Zm-8-120H613l-40 40h222q-2-11-4-20.5t-4-19.5Zm-57-116-36 36h61q-5-10-11.5-18.5T730 380ZM224 772l451-449q-41-32-91-49.5T477 256q-134 0-227 93t-93 227q0 56 17.5 105.5T224 772Zm253 124q43 0 82-10t74-30H321q35 20 74 30t82 10Z"/>
    </Icon>
  );
});

IconMaterialStrokePartial.displayName = 'AmauiIconMaterialStrokePartial';

export default IconMaterialStrokePartial;
