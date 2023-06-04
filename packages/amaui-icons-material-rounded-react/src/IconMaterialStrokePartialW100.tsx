import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStrokePartialW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrokePartialW100'

      short_name='StrokePartial'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M477 924q-72 0-135.5-27.5T231 822q-47-47-74.5-110.5T129 576q0-72 27.5-135.5T231 330q47-47 110.5-74.5T477 228q72 0 135.5 27.5T723 330q47 47 74.5 110.5T825 576q0 72-27.5 135.5T723 822q-47 47-110.5 74.5T477 924Zm291-214H361l-92 92h435q20-20 36-43t28-49Zm29-120H482l-92 92h389q8-22 12.5-45t5.5-47Zm-18-120H603l-93 92h287q-1-24-5.5-47T779 470Zm-66-110-82 82h137q-11-23-24.5-43.5T713 360ZM241 792l453-451q-43-40-98.5-62.5T477 256q-134 0-227 93t-93 227q0 63 22.5 118t61.5 98Zm236 104q55 0 104.5-17.5T672 830H282q41 31 90.5 48.5T477 896Z"/>
    </Icon>
  );
});

IconMaterialStrokePartialW100.displayName = 'AmauiIconMaterialStrokePartialW100';

export default IconMaterialStrokePartialW100;
