import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrameReloadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameReloadW100'

      short_name='FrameReload'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 760q-61 0-109-36.5T305 632h30q17 45 55.612 72.5Q429.223 732 480 732q64.629 0 110.314-45.686Q636 640.629 636 576q0-64.629-45.686-110.314Q544.629 420 480 420q-39 0-75 20t-62 52h81v28H296V392h28v79q29-35 70-57t86-22q76.36 0 130.18 53.82Q664 499.64 664 576q0 76.36-53.82 130.18Q556.36 760 480 760ZM172 884V696h28v160h160v28H172Zm428 0v-28h160V696h28v188H600ZM172 456V268h188v28H200v160h-28Zm588 0V296H600v-28h188v188h-28Z"/>
    </Icon>
  );
});

IconMaterialFrameReloadW100.displayName = 'AmauiIconMaterialFrameReloadW100';

export default IconMaterialFrameReloadW100;
