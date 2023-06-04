import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStethoscopeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StethoscopeW100Filled'

      short_name='Stethoscope'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.45 20.7q-2.175 0-3.7-1.512-1.525-1.513-1.525-3.688V15q-1.825-.125-3.087-1.475-1.263-1.35-1.263-3.225V4.95h3v-1h.7v2.7h-.7v-1h-2.3v4.65q0 1.65 1.175 2.825Q6.925 14.3 8.575 14.3q1.65 0 2.825-1.175 1.175-1.175 1.175-2.825V5.65h-2.3v1h-.7v-2.7h.7v1h3v5.35q0 1.875-1.263 3.225Q10.75 14.875 8.925 15v.5q0 1.875 1.325 3.188Q11.575 20 13.45 20q1.875 0 3.187-1.312 1.313-1.313 1.313-3.188v-1.525q-.65-.125-1.075-.638-.425-.512-.425-1.187 0-.775.538-1.313.537-.537 1.312-.537t1.313.537q.537.538.537 1.313 0 .675-.425 1.187-.425.513-1.075.638V15.5q0 2.175-1.512 3.688Q15.625 20.7 13.45 20.7Z"/>
    </Icon>
  );
});

IconMaterialStethoscopeW100Filled.displayName = 'AmauiIconMaterialStethoscopeW100Filled';

export default IconMaterialStethoscopeW100Filled;
